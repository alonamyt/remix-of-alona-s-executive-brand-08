/* Logistics Hub — прототип форми пропозиції об'єкта.
   Офлайн-логіка: списки, умовні поля, нормалізація вартості, підсвітка, автогео,
   AI-евристики, автозбереження. LLM/Whisper/Google Maps/інтеграція — заглушки. */

const REGIONS = [
  "Львівська","Волинська","Рівненська","Тернопільська","Івано-Франківська",
  "Закарпатська","Чернівецька","Хмельницька","Вінницька","Київська","Житомирська",
  "Одеська","Дніпропетровська","Полтавська","Черкаська","Кіровоградська","Миколаївська",
  "Запорізька","Харківська","Сумська","Чернігівська","Херсонська","Донецька","Луганська"
];

const DANGERS = [
  "Немає","ТЕЦ","Нафтобаза","Завод або інше промислове виробництво",
  "Нова пошта / великий логістичний термінал","Не уточнено",
  "Військове виробництво або військовий об'єкт","Розподільча підстанція",
  "АЗС / заправка","Холодильне/морозильне виробництво з аміаком",
  "Інший потенційно небезпечний об'єкт"
];

// Курси для демо-нормалізації (у проді — НБУ на дату або ручний ввід)
const RATES = { USD: 41.5, EUR: 45.0, "ГРН": 1 };
const VAT_RATE = 0.20;

/* ---------- ініціалізація списків ---------- */
function fillRegions(){
  const sel = document.querySelector('select[name=region]');
  REGIONS.forEach(r => { const o=document.createElement('option'); o.textContent=r; sel.appendChild(o); });
}
function fillDangers(){
  const box = document.getElementById('dangerChecks');
  DANGERS.forEach((d,i)=>{
    const id='dg'+i;
    const l=document.createElement('label');
    l.innerHTML=`<input type="checkbox" name="danger" value="${d}"> <span>${d}</span>`;
    box.appendChild(l);
  });
}

/* ---------- динамічні секції Склад / Земля ---------- */
const opt = (arr)=>['<option value="">Оберіть</option>',...arr.map(o=>`<option>${o}</option>`)].join('');

function warehouseHTML(){
  return `
  <div class="section">
    <h2>Характеристики складського приміщення</h2>
    <div class="grid">
      <div class="field" data-want><label>Юридично будівля введена в експлуатацію?</label>
        <select name="commissioned">${opt(["Так","Ні","Не уточнено"])}</select></div>
      <div class="field" data-req><label>Площа, яка пропонується компанії, м² <span class="req">*</span></label>
        <input type="number" name="areaOffered" placeholder="5000"></div>
      <div class="field" data-req><label>Загальна площа всієї будівлі, м² <span class="req">*</span></label>
        <input name="areaTotal" placeholder="Якщо уточнено"></div>
      <div class="field" data-want><label>Формат розміщення</label>
        <select name="placement">${opt(["Окремо розташована будівля","Частина відносно невеликої будівлі","Частина великого складського комплексу","Не уточнено"])}</select></div>
      <div class="field" data-req><label>Чиста робоча висота приміщення, м <span class="req">*</span></label>
        <input name="height" placeholder="Бажано 12 м, мінімум 6 м"></div>
      <div class="field" data-want><label>Стан підлоги</label>
        <select name="floor">${opt(["Рівна промислова, придатна для навантажувача та стелажів","Рівна, але встановлення стелажів не підтверджено","Має нерівності","Відсутня"])}</select></div>
      <div class="field" data-req><label>Рампа <span class="req">*</span></label>
        <select name="ramp" onchange="onRampChange()">${opt(["Рампа є, висота близько 1,2 м","Рампа є, інша висота","Підлога в рівень із землею","Рампа відсутня","Не уточнено"])}</select></div>
      <div class="field depend hidden" id="rampHeightBox"><label>Вкажіть висоту рампи, м</label><input type="number" name="rampHeight" step="0.1"></div>
      <div class="field full depend hidden" id="loadingBox"><label>Які варіанти організації завантаження/розвантаження можливі? (декілька)</label>
        <div class="checks">
          ${["Можливе облаштування стаціонарної рампи","Можливе пониження майданчика / заглиблений під'їзд","Облаштування рампи технічно неможливе","Потребує технічного обстеження","Не уточнено"]
            .map(o=>`<label><input type="checkbox" name="loading" value="${o}"> <span>${o}</span></label>`).join('')}
        </div></div>
      <div class="field" data-req><label>Ширина майданчика перед рампами, м <span class="req">*</span></label>
        <select name="rampYard">${opt(["Менше 18 м","18–23,9 м","24 м і більше","Не уточнено"])}</select></div>
    </div>
  </div>

  <div class="section">
    <h2>Комунікації та стан</h2>
    <div class="grid">
      <div class="field" data-req><label>Доступна електрична потужність <span class="req">*</span></label>
        <select name="power">${opt(["Менше 50 кВт","50–70 кВт","71–99 кВт","100–149 кВт","150 кВт і більше","Не уточнено"])}</select></div>
      <div class="field" data-req><label>Трифазне електроживлення (380/400 В) <span class="req">*</span></label>
        <select name="threephase">${opt(["Так","Ні","Є технічна можливість підключення","Не уточнено"])}</select></div>
      <div class="field full"><label>Наявні комунікації (декілька)</label>
        <div class="checks">
          ${["Водопостачання","Водовідведення / каналізація","Опалення","Інтернет","Відсутні","Не уточнено"]
            .map(o=>`<label><input type="checkbox" name="utilities" value="${o}" onchange="onUtil()"> <span>${o}</span></label>`).join('')}
        </div></div>
      <div class="field full depend hidden" id="internetBox">
        <div class="grid" style="padding:0">
          <div class="field"><label>Інтернет: провайдер</label><input name="netProvider"></div>
          <div class="field"><label>Тип підключення</label><select name="netType">${opt(["Оптоволокно","Кабель","Мобільний інтернет","Інше","Не уточнено"])}</select></div>
          <div class="field"><label>Доступна швидкість</label><select name="netSpeed">${opt(["До 100 Мбіт/с","100–500 Мбіт/с","500 Мбіт/с–1 Гбіт/с","Понад 1 Гбіт/с","Не уточнено"])}</select></div>
        </div></div>
      <div class="field full"><label>Наявність систем безпеки (декілька)</label>
        <div class="checks">
          ${["Охоронна сигналізація","Відеоспостереження","Контроль та управління доступом (СКУД)","Пожежна сигналізація","Фізична охорона","Відсутні","Не уточнено"]
            .map(o=>`<label><input type="checkbox" name="security" value="${o}"> <span>${o}</span></label>`).join('')}
        </div></div>
      <div class="field full" data-want><label>Загальний стан приміщення</label>
        <select name="condition" onchange="toggleDep('conditionBox', this.value==='Потрібні незначні роботи')">${opt(["Готове до використання","Потрібні незначні роботи","Потрібна суттєва адаптація або ремонт","Об'єкт будується або реконструюється","Не уточнено"])}</select></div>
      <div class="field full depend hidden" id="conditionBox"><label>Які саме роботи</label><input name="conditionDetail"></div>
    </div>
  </div>

  <div class="section">
    <h2>Під'їзд і логістика</h2>
    <div class="grid">
      <div class="field" data-want><label>Чи є нормальний під'їзд вантажного транспорту?</label>
        <select name="access">${opt(["Так, безперешкодно","Під'їзд є, але має обмеження","Під'їзду немає","Не уточнено"])}</select></div>
      <div class="field" data-req><label>Ширина основного заїзду, м <span class="req">*</span></label><input type="number" name="entryWidth" step="0.1"></div>
      <div class="field" data-req><label>Кількість заїздів <span class="req">*</span></label><select name="entryCount">${opt(["1","2 і більше","Не уточнено"])}</select></div>
      <div class="field" data-want><label>Мінімальна вільна відстань для маневрування, м</label><input type="number" name="maneuver" placeholder="Нормальна мінімальна відстань — 25 м"></div>
      <div class="field" data-want><label>Ширина проїзду до зони завантаження, м</label><input type="number" name="passWidth" step="0.1"></div>
      <div class="field full"><label>Розміри майданчика для маневрування (д × ш), м</label>
        <div style="display:flex;gap:8px;align-items:center"><input type="number" name="yardL" style="flex:1" placeholder="довжина"> × <input type="number" name="yardW" style="flex:1" placeholder="ширина"></div></div>
      <div class="field" data-want><label>Заїзд стандартного автопоїзда (~17 м)</label><select name="truckIn">${opt(["Так","Ні","Потребує перевірки","Не уточнено"])}</select></div>
      <div class="field" data-want><label>Розворот і подача до рампи/воріт</label><select name="truckTurn">${opt(["Так, вільно","Так, з додатковим маневруванням","Ні","Потребує технічної оцінки","Не уточнено"])}</select></div>
      <div class="field" data-want><label>Покриття майданчика</label><select name="yardSurface">${opt(["Асфальт","Бетон","Щебінь","Ґрунт","Інше"])}</select></div>
      <div class="field full"><label>Обмеження/перешкоди для великогабаритного транспорту</label><textarea name="accessLimits" placeholder="Радіуси повороту, знаки, мости, ворота, вага/висота"></textarea></div>
      <div class="field" data-want><label>Цілодобова робота складу та доступ транспорту</label>
        <select name="access247" onchange="toggleDep('access247Box', this.value==='Є обмеження')">${opt(["Так, без обмежень","Є обмеження","Ні","Не уточнено"])}</select></div>
      <div class="field depend hidden" id="access247Box"><label>Зазначте обмеження</label><input name="access247Detail"></div>
    </div>
  </div>`;
}

function landHTML(){
  return `
  <div class="section">
    <h2>Характеристики земельної ділянки</h2>
    <div class="grid">
      <div class="field" data-req><label>Площа ділянки, га <span class="req">*</span></label><input type="number" name="landArea" step="0.01" placeholder="Від 2,5–3 га"></div>
      <div class="field full"><label>Геометрія / конфігурація ділянки</label><textarea name="landGeometry" placeholder="Форма, пропорції, рельєф"></textarea></div>
      <div class="field" data-want><label>Електропостачання (доступна потужність)</label><input name="landPower" placeholder="кВт або опис"></div>
      <div class="field" data-want><label>Можливість підключення газу</label><select name="landGas">${opt(["Так","Ні","Є технічна можливість","Не уточнено"])}</select></div>
      <div class="field" data-want><label>Водопостачання</label><select name="landWater">${opt(["Централізоване","Свердловина","Немає","Не уточнено"])}</select></div>
      <div class="field" data-want><label>Цільове призначення / категорія землі</label><input name="landPurpose"></div>
      <div class="field full"><label>Обмеження (водойми, ЛЕП, охоронні зони тощо)</label><textarea name="landLimits"></textarea></div>
    </div>
  </div>`;
}

function onTypeChange(){
  const t = document.querySelector('select[name=objectType]').value;
  document.getElementById('warehouseSections').innerHTML = t==='Складське приміщення' ? warehouseHTML() : '';
  document.getElementById('landSections').innerHTML = t==='Земельна ділянка' ? landHTML() : '';
  refresh();
}

/* ---------- умовні поля ---------- */
function toggleDep(id, show){ const el=document.getElementById(id); if(el) el.classList.toggle('hidden', !show); }
function onDealChange(){
  const v=document.querySelector('select[name=deal]').value;
  toggleDep('rentBlock', v==='Оренда' || v==='Оренда або продаж');
  refresh();
}
function onRampChange(){
  const v=document.querySelector('select[name=ramp]').value;
  toggleDep('rampHeightBox', v==='Рампа є, інша висота');
  toggleDep('loadingBox', v==='Підлога в рівень із землею' || v==='Рампа відсутня');
}
function onUtil(){
  const net=[...document.querySelectorAll('input[name=utilities]')].some(c=>c.checked && c.value==='Інтернет');
  toggleDep('internetBox', net);
}

/* ---------- нормалізація вартості ---------- */
function parsePrice(raw){
  if(!raw) return null;
  const s=raw.toLowerCase().replace(/\u00a0/g,' ');
  let cur='ГРН';
  if(/\$|usd|дол/.test(s)) cur='USD';
  else if(/€|eur|євро|евро/.test(s)) cur='EUR';
  else if(/грн|₴|uah|гривн/.test(s)) cur='ГРН';
  // число з підтримкою "6.5 млн", "90 000", "1,5"
  let numMatch=s.match(/(\d[\d\s.,]*)/);
  if(!numMatch) return null;
  let num=parseFloat(numMatch[1].replace(/\s/g,'').replace(',', '.'));
  if(/млн|mln|m\b/.test(s)) num*=1_000_000;
  else if(/тис|тыс|k\b/.test(s)) num*=1_000;
  const perSqm=/м²|м2|кв\.?\s*м|\/\s*м|sqm|за метр/.test(s);
  const perObject=!perSqm && /за об|об'?єкт|обєкт|весь|цілком|загалом/.test(s) || (!perSqm && num>=100000);
  const withVat=/з пдв|з ндс|вкл.*пдв|incl.*vat/.test(s);
  const noVat=/без пдв|без ндс|\+ ?пдв|excl.*vat/.test(s);
  return { num, cur, perSqm, perObject, withVat: withVat?true:(noVat?false:null) };
}
function normalizePrice(){
  const raw=document.querySelector('input[name=priceRaw]').value;
  const vatSel=document.querySelector('select[name=vat]').value;
  const box=document.getElementById('normBox');
  const out=document.querySelector('input[name=priceNorm]');
  const p=parsePrice(raw);
  if(!p){
    box.textContent="Тут з'явиться пояснення розрахунку: курс, первинна валюта, ПДВ.";
    box.classList.remove('warn');
    if(!out.dataset.touched) out.value='';
    return;
  }
  const inUAH = p.num * (RATES[p.cur]||1);
  // визначаємо чи з ПДВ: пріоритет — селект ПДВ, потім текст
  let hasVat = vatSel==='Так' ? true : (vatSel==='Ні' || vatSel==='Власник не є платником ПДВ') ? false : p.withVat;
  let base, withV;
  if(hasVat===true){ withV=inUAH; base=inUAH/(1+VAT_RATE); }
  else if(hasVat===false){ base=inUAH; withV=inUAH*(1+VAT_RATE); }
  else { base=inUAH; withV=null; } // невідомо
  const fmt=(n)=>n.toLocaleString('uk-UA',{maximumFractionDigits:2});
  // Головний рядок — тільки в редаговане поле priceNorm (не дублюємо).
  let text = p.perObject
    ? `${fmt(base)} грн без ПДВ за об'єкт` + (withV!=null?` (${fmt(withV)} грн з ПДВ)`:` (ПДВ не уточнено)`)
    : `${fmt(base)} грн без ПДВ/м²` + (withV!=null?` (${fmt(withV)} грн з ПДВ/м²)`:` (ПДВ не уточнено)`);
  if(!out.dataset.touched) out.value=text; // якщо не редагували вручну

  // Блок нижче — НЕ копія рядка, а пояснення розрахунку.
  const details=[];
  if(p.cur!=='ГРН') details.push(`первинно ${fmt(p.num)} ${p.cur}${p.perSqm?'/м²':''} → курс ${RATES[p.cur]} грн`);
  else details.push('первинно у гривні');
  if(hasVat===null) details.push('⚠️ ПДВ не уточнено — оберіть у полі «Чи включено ПДВ»');
  else details.push(hasVat ? 'у вартості ПДВ включено' : 'ПДВ не включено (+20% для «з ПДВ»)');
  if(p.perObject) details.push('база: за об\'єкт (не за м²)');
  box.innerHTML = 'Розрахунок: ' + details.join(' · ');
  box.classList.toggle('warn', hasVat===null);
}

/* ---------- автогеолокація (заглушка Google Maps) ---------- */
function geoButtons(){
  const geo=document.querySelector('input[name=geo]');
  const has=!!(geo && geo.value.trim());
  const v=document.getElementById('geoView'); const c=document.getElementById('geoCopy');
  if(v) v.disabled=!has; if(c) c.disabled=!has;
}
function autoGeo(){
  const region=document.querySelector('select[name=region]').value.trim();
  const city=document.querySelector('input[name=city]').value.trim();
  const addr=document.querySelector('input[name=address]').value.trim();
  const geo=document.querySelector('input[name=geo]');
  const hint=document.getElementById('geoHint');
  if(geo.dataset.touched){ geoButtons(); return; } // не перезаписуємо ручні правки
  // Генеруємо лінк ТІЛЬКИ коли є хоча б населений пункт.
  if(!city){
    geo.value='';
    hint.textContent='Введіть населений пункт — і посилання згенерується автоматично. Можна відредагувати.';
    geoButtons();
    return;
  }
  const q=[addr,city,region?region+' область':'','Україна'].filter(Boolean).join(', ');
  geo.value='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
  hint.textContent = region
    ? 'Згенеровано з області, міста й адреси. Можна відредагувати.'
    : '⚠️ Область не вказана — локацію визначено неточно, перевірте посилання. Можна відредагувати.';
  hint.style.color = region ? '' : 'var(--want)';
  geoButtons();
}
function geoOpen(){ const v=document.querySelector('input[name=geo]').value.trim(); if(v) window.open(v,'_blank','noopener'); }
function geoCopyLink(){
  const v=document.querySelector('input[name=geo]').value.trim(); if(!v) return;
  navigator.clipboard?.writeText(v).then(()=>{
    const b=document.getElementById('geoCopy'); if(!b) return;
    const t=b.textContent; b.textContent='Скопійовано'; setTimeout(()=>b.textContent=t,1500);
  });
}

/* ---------- AI-помічник (евристики; у проді — LLM) ---------- */
function addMsg(text, who){
  const l=document.getElementById('aiLog'); if(!l) return;
  const d=document.createElement('div');
  d.className='msg '+who;
  d.textContent=text;
  // Надійні inline-стилі (не залежать від кешованого CSS), щоб бульбашки завжди було видно.
  d.style.cssText='padding:9px 13px;border-radius:12px;max-width:88%;font-size:14px;line-height:1.4;margin:0;box-shadow:0 1px 2px rgba(20,30,50,.08);white-space:pre-wrap;word-break:break-word';
  if(who==='user'){
    d.style.alignSelf='flex-end';
    d.style.setProperty('background','#2563eb','important');
    d.style.setProperty('color','#ffffff','important');
    d.style.borderBottomRightRadius='3px';
  } else {
    d.style.alignSelf='flex-start';
    d.style.setProperty('background','#eef1f7','important');
    d.style.setProperty('color','#1b2432','important');
    d.style.border='1px solid #d9dfea';
    d.style.borderBottomLeftRadius='3px';
  }
  l.appendChild(d);
  l.scrollTop=l.scrollHeight;
}
// Джерело поточного автозаповнення: 'text' (явний текст/голос) | 'photo' (OCR/файл).
let fillSource = 'text';

function markToVerify(el){
  const field = el.closest('.field');
  if(!field) return;
  field.classList.add('from-photo');
  if(!field.querySelector('.verify-badge')){
    const b=document.createElement('span');
    b.className='verify-badge';
    b.textContent='🔍 з фото — перевірте';
    b.style.cssText='font-size:11px;font-weight:600;color:#92400e;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:2px 8px;align-self:flex-start;margin-top:2px';
    b.title='Значення розпізнано з фото/файлу — може бути неточним. Перевірте.';
    field.appendChild(b);
  }
}

function setField(sel,val){
  const el=document.querySelector(sel);
  if(!el) return false;
  if(el.value && el.value.trim()) return false; // не перезаписуємо вже заповнене
  el.value=val;
  el.dispatchEvent(new Event('change',{bubbles:true}));
  el.dispatchEvent(new Event('input',{bubbles:true}));
  const ok = el.value===val; // true якщо значення реально прийнялось (для select — опція існує)
  if(ok && fillSource==='photo') markToVerify(el);
  return ok;
}

// Транслітерація латиниці у слаґах OLX -> українські міста (найчастіші)
const TRANSLIT_CITIES = {
  lutsk:"Луцьк", lviv:"Львів", rivne:"Рівне", ternopil:"Тернопіль",
  "ivano-frankivsk":"Івано-Франківськ", uzhhorod:"Ужгород", uzhgorod:"Ужгород",
  mukachevo:"Мукачево", chernivtsi:"Чернівці", khmelnytskyi:"Хмельницький",
  khmelnitskiy:"Хмельницький", vinnytsia:"Вінниця", vinnitsa:"Вінниця",
  kyiv:"Київ", kiev:"Київ", zhytomyr:"Житомир", odesa:"Одеса", odessa:"Одеса",
  dnipro:"Дніпро", poltava:"Полтава", cherkasy:"Черкаси", kropyvnytskyi:"Кропивницький",
  mykolaiv:"Миколаїв", zaporizhzhia:"Запоріжжя", kharkiv:"Харків", sumy:"Суми",
  chernihiv:"Чернігів"
};
// Місто -> область (для автопідстановки області)
const CITY_TO_REGION = {
  "Луцьк":"Волинська","Львів":"Львівська","Рівне":"Рівненська","Тернопіль":"Тернопільська",
  "Івано-Франківськ":"Івано-Франківська","Ужгород":"Закарпатська","Мукачево":"Закарпатська",
  "Чернівці":"Чернівецька","Хмельницький":"Хмельницька","Вінниця":"Вінницька",
  "Київ":"Київська","Житомир":"Житомирська","Одеса":"Одеська","Дніпро":"Дніпропетровська",
  "Полтава":"Полтавська","Черкаси":"Черкаська","Кропивницький":"Кіровоградська",
  "Миколаїв":"Миколаївська","Запоріжжя":"Запорізька","Харків":"Харківська",
  "Суми":"Сумська","Чернігів":"Чернігівська"
};

function isUrl(s){ return /https?:\/\/\S+/i.test(s); }

function askAI(){
  const t=document.getElementById('aiText').value.trim();
  if(!t){ return; }
  addMsg(t,'user');
  const filled=extractFields(t);
  let reply;
  if(filled.length){
    reply='Заповнив: '+filled.join(', ')+'. Перевірте підсвічені поля.';
  } else if(isUrl(t)){
    reply='Поклав посилання в «Посилання на оголошення». З самого лінку більше витягти не вдалося — відкрити сторінку й дістати повний опис зможе AI у проді (LLM з доступом до вебу). Поки що скопіюйте текст оголошення сюди — я заповню поля.';
  } else {
    reply='Не зміг однозначно розпізнати поля. Уточніть місто, площу, висоту, ціну.';
  }
  addMsg(reply,'ai');
  document.getElementById('aiText').value='';
  normalizePrice(); autoGeo();
  // після автозаповнення показуємо, що ще лишилось (вмикаємо підсвітку)
  if(filled.length) validationVisible = true;
  const { reqLeft } = refresh();
  if(filled.length){
    if(reqLeft) addMsg(`Залишилось обов'язкових (червоних) полів: ${reqLeft}. Гортаю до першого — дозаповніть, і форму можна буде відправити.`,'ai');
    else addMsg('Усі обов\'язкові поля заповнено ✅ Можна відправляти.','ai');
    document.querySelector('.field.miss-req')?.scrollIntoView({behavior:'smooth',block:'center'});
  }
}

// Витягує дані зі слаґа OLX-посилання (транслітерація + "1000-m")
function extractFromOlxSlug(url, done){
  let slug='';
  try{ slug=decodeURIComponent(new URL(url).pathname).toLowerCase(); }catch{ slug=url.toLowerCase(); }
  // тип угоди / об'єкта
  if(/orenda|arenda|rent/.test(slug)){ if(setField('select[name=deal]','Оренда')) done.push('тип угоди'); }
  else if(/prodazh|prodazha|sale|kupivlya/.test(slug)){ if(setField('select[name=deal]','Продаж')) done.push('тип угоди'); }
  if(/sklad|warehouse|primsch|primish/.test(slug)){ if(setField('select[name=objectType]','Складське приміщення')){ onTypeChange(); done.push('тип'); } }
  else if(/zemel|uchastok|land|dilyank/.test(slug)){ if(setField('select[name=objectType]','Земельна ділянка')){ onTypeChange(); done.push('тип'); } }
  // площа "1000-m" / "1000m2"
  const areaM=slug.match(/(\d{2,6})[\-_ ]?m(?:2|²|\b)/);
  if(areaM){ if(setField('input[name=areaOffered]', areaM[1])) done.push('площа'); }
  // місто з транслітерації
  for(const [lat,ua] of Object.entries(TRANSLIT_CITIES)){
    if(slug.includes(lat)){
      if(setField('input[name=city]', ua)) done.push('місто');
      if(CITY_TO_REGION[ua]) { if(setField('select[name=region]', CITY_TO_REGION[ua])) done.push('область'); }
      break;
    }
  }
}

function powerToOption(kw){
  if(kw<50) return 'Менше 50 кВт';
  if(kw<=70) return '50–70 кВт';
  if(kw<=99) return '71–99 кВт';
  if(kw<=149) return '100–149 кВт';
  return '150 кВт і більше';
}

function extractFields(t){
  const done=[]; const low=t.toLowerCase();

  // 1) URL -> у поле "Посилання на оголошення" + спроба розпарсити слаґ
  const urlM=t.match(/https?:\/\/\S+/i);
  if(urlM){
    if(setField('input[name=listing]', urlM[0])) done.push('посилання');
    extractFromOlxSlug(urlM[0], done);
  }

  // 2) тип об'єкта: прямі + непрямі ознаки складу (рампа/кВт/висота/навіс/ферми)
  const landHints=/земел|ділянк|\bга\b|під ангар|модульн/.test(low);
  const whHints=/склад|приміщенн|ангар|рампа|рампи|кВт|квт|під навіс|навіс|до ферм|висот|стелаж|навантажувач|палет|термінал/i.test(t);
  if(landHints){ if(setField('select[name=objectType]','Земельна ділянка')){ onTypeChange(); done.push('тип'); } }
  else if(whHints){ if(setField('select[name=objectType]','Складське приміщення')){ onTypeChange(); done.push('тип'); } }

  // 3) область
  for(const r of REGIONS){ if(low.includes(r.toLowerCase().replace('ська','').replace('цька','ц'))){ if(setField('select[name=region]', r)) done.push('область'); break; } }
  // 4) місто (кирилиця): "м. Луцьк" / "місто Луцьк" / просто відоме місто / перше слово речення
  const cityM=t.match(/(?:м\.?|місто|смт|с\.)\s*([А-ЯІЇЄҐ][а-яіїєґ'-]+)/);
  if(cityM){ if(setField('input[name=city]', cityM[1])){ done.push('місто'); const reg=CITY_TO_REGION[cityM[1]]; if(reg) setField('select[name=region]', reg); } }
  else {
    let found=false;
    for(const ua of Object.keys(CITY_TO_REGION)){ if(t.includes(ua)){ if(setField('input[name=city]', ua)){ done.push('місто'); if(CITY_TO_REGION[ua]) setField('select[name=region]', CITY_TO_REGION[ua]); } found=true; break; } }
    // якщо міста нема у словнику — беремо перше слово з великої літери на початку (напр. "Антонівка")
    if(!found){ const firstWord=t.match(/^\s*\.?\s*([А-ЯІЇЄҐ][а-яіїєґ'-]{2,})/); if(firstWord && setField('input[name=city]', firstWord[1])) done.push('місто'); }
  }

  // 5) ПЛОЩА ДІЛЯНКИ в гектарах: "7,04 га", "7 0431 м²" з контекстом "ділянка".
  //    Беремо найбільше значення в га (часто є "разом").
  const haAll=[...low.matchAll(/([\d]{1,3}(?:[.,]\d{1,4})?)\s*га\b/g)].map(m=>parseFloat(m[1].replace(',', '.'))).filter(n=>n>0&&n<100000);
  if(haAll.length){
    const ha=Math.max(...haAll);
    if(setField('select[name=objectType]','Земельна ділянка')){ onTypeChange(); done.push('тип: земельна ділянка'); }
    if(setField('input[name=landArea]', String(ha))) done.push('площа ділянки '+ha+' га');
  }

  // 6) ПЛОЩІ в м²: збираємо всі, розрізняємо загальну площу будівлі vs площу забудови/проїздів.
  //    Числа біля слів "загальна площа" мають пріоритет для площі приміщення.
  const num=(s)=>parseFloat(String(s).replace(/\s/g,'').replace(',', '.'));
  const m2All=[...low.matchAll(/([\d][\d\s]{1,8}(?:[.,]\d+)?)\s*(?:м²|м2|кв\.?\s*м|m2|m²)/g)]
    .map(m=>({v:num(m[1]), ctx: low.slice(Math.max(0,m.index-40), m.index)}))
    .filter(o=>o.v>=50 && o.v<1000000);
  if(m2All.length){
    // спершу шукаємо "загальна площа ... N м²"
    let general = m2All.find(o=>/загальн|разом|усіх площ/.test(o.ctx));
    // інакше — найбільше значення, але виключаємо "проїзди/майданчик/забудови"
    const buildingCandidates = m2All.filter(o=>!/проїзд|майданчик|забудов|тверд/.test(o.ctx));
    const pick = general || buildingCandidates.sort((a,b)=>b.v-a.v)[0] || m2All.sort((a,b)=>b.v-a.v)[0];
    if(pick){
      if(!haAll.length){ // якщо це не земля — це склад
        if(setField('select[name=objectType]','Складське приміщення')){ onTypeChange(); done.push('тип: складське приміщення'); }
      }
      const target = haAll.length ? null : 'input[name=areaOffered]';
      if(target && setField(target, String(Math.round(pick.v)))) done.push('загальна площа ~'+Math.round(pick.v)+' м²');
    }
  }

  // 7) ВИСОТА: "9,3 м", "максимальна висота 9,3", "висоти прольотів 9,3 / 6,1 / 5,1" -> беремо максимум.
  const heights=[...low.matchAll(/(\d{1,2}(?:[.,]\d)?)\s*м(?![²2])/g)].map(m=>parseFloat(m[1].replace(',', '.'))).filter(n=>n>=3&&n<=30);
  const heightCtx=/висот|проліт|ферм|стел/.test(low);
  if(heights.length && heightCtx){
    const h=Math.max(...heights);
    if(setField('input[name=height]', String(h))) done.push('висота (макс.) '+h+' м');
  }

  // 8) потужність: "до 15 кВт" / "50 кВт" -> селект діапазону
  const kwM=low.match(/(\d+[.,]?\d*)\s*квт/);
  if(kwM){ const kw=parseFloat(kwM[1].replace(',', '.')); if(setField('select[name=power]', powerToOption(kw))) done.push('електропотужність'); }

  // 9) угода: "оренда 49 років" / "оренда" / "продаж"
  if(/оренд/i.test(low) && /продаж|купівл/i.test(low)){ if(setField('select[name=deal]','Оренда або продаж')) done.push('тип угоди'); }
  else if(/оренд/i.test(low)){ if(setField('select[name=deal]','Оренда')){ done.push('тип угоди'); onDealChange(); } }
  else if(/продаж|купівл/i.test(low)){ if(setField('select[name=deal]','Продаж')) done.push('тип угоди'); }

  // 10) ціна: "996 тис. грн", "5 % НГО", "$6.5 млн", "250 грн/м²"
  const priceM=t.match(/([$€]?\s*\d[\d\s.,]*\s*(?:млн|млрд|тис\.?)?\s*(?:грн|₴|usd|\$|eur|€|дол\w*|євро)(?:\s*\/?\s*(?:м²|м2|кв\.?\s*м|рік|міс|щорічно))?)/i);
  if(priceM){ if(setField('input[name=priceRaw]', priceM[1].trim())) done.push('вартість'); }

  // 11) рампа
  if(/\bрамп/i.test(low)){ if(setField('select[name=ramp]','Рампа є, інша висота')) done.push('рампа'); }

  // 12) БАГАТА ДОВІДКА -> ключові рядки в коментар, щоб нічого не втратити.
  //     Витягуємо характерні рядки (форма володіння, цільове, обмеження, рік, фундамент, сейсміка тощо).
  const notable=[];
  const grab=(re,label)=>{ const m=t.match(re); if(m) notable.push((label?label+': ':'')+m[0].replace(/\s+/g,' ').trim()); };
  grab(/форма\s+володіння[^\n]{0,60}/i);
  grab(/оренд[аи][^\n]{0,60}(?:рок|рік)[^\n]{0,20}/i);
  grab(/оренд(?:на)?\s+плат[аи][^\n]{0,60}/i);
  grab(/цільов[еі]\s+призначенн[яю][^\n]{0,60}/i);
  grab(/обмеженн[я"][^\n]{0,60}/i);
  grab(/сейсмічн[^\n]{0,30}/i);
  grab(/рік\s+побудови[^\n]{0,20}/i);
  grab(/фундамент[^\n]{0,40}/i);
  grab(/перекритт[яю][^\n]{0,40}/i);
  grab(/залізничн[^\n]{0,40}/i);
  grab(/поновленн[яю]\s+строку[^\n]{0,40}/i);
  if(notable.length){
    const notes=document.querySelector('textarea[name=notes]');
    if(notes){
      const block='[З довідки — перевірте]:\n• '+notable.join('\n• ');
      notes.value = notes.value.trim() ? notes.value.trim()+'\n\n'+block : block;
      markToVerify(notes);
      done.push('ключові дані довідки → коментар ('+notable.length+')');
    }
    // комерційні деталі (оренда/НГО/плата) — окремо в "Інші комерційні умови"
    const terms=document.querySelector('textarea[name=otherTerms]');
    const commercial=notable.filter(x=>/оренд|плат|нго|володіння|поновленн/i.test(x));
    if(terms && commercial.length && !terms.value.trim()){
      terms.value='[З довідки — перевірте]: '+commercial.join('; ');
      markToVerify(terms);
    }
  }

  return done;
}
/* ---------- прикріплені файли (єдине сховище) ---------- */
const MAX_FILES = 10, MAX_ONE = 50*1024*1024, MAX_TOTAL = 150*1024*1024;
let attachments = []; // {id, file, name, size, type}

function humanSize(b){ return b>1048576 ? (b/1048576).toFixed(1)+' МБ' : Math.round(b/1024)+' КБ'; }
function totalSize(){ return attachments.reduce((s,a)=>s+a.size,0); }

function renderFiles(){
  const box=document.getElementById('fileList');
  if(!box) return;
  if(!attachments.length){ box.innerHTML='<span class="help">Ще нічого не прикріплено.</span>'; return; }

  const fileIcon=(a)=>{
    const n=(a.name||'').toLowerCase();
    if(a.type.includes('pdf')||n.endsWith('.pdf')) return {emoji:'📄', tag:'PDF', bg:'#fdecec'};
    if(n.endsWith('.doc')||n.endsWith('.docx')) return {emoji:'📝', tag:'DOC', bg:'#eaf1fd'};
    if(n.endsWith('.xls')||n.endsWith('.xlsx')) return {emoji:'📊', tag:'XLS', bg:'#eafaf0'};
    if(a.type.startsWith('video')) return {emoji:'🎬', tag:'ВІДЕО', bg:'#f0ecfd'};
    return {emoji:'📎', tag:'ФАЙЛ', bg:'#eef1f7'};
  };

  const tiles = attachments.map(a=>{
    // мініатюра для фото
    if(a.type.startsWith('image')){
      if(!a.preview){ try{ a.preview=URL.createObjectURL(a.file); }catch{ a.preview=''; } }
      const thumb = a.preview
        ? `<div class="thumb" style="background-image:url('${a.preview}')"></div>`
        : `<div class="thumb ph">🖼</div>`;
      return `<div class="file-tile">
        ${thumb}
        <button type="button" class="rm" title="Прибрати" onclick="removeFile('${a.id}')">✕</button>
        <div class="ft-meta"><span class="ft-name" title="${a.name}">${a.name}</span><span class="ft-size">${humanSize(a.size)}</span></div>
      </div>`;
    }
    const ic=fileIcon(a);
    return `<div class="file-tile">
      <div class="thumb ph" style="background:${ic.bg}"><span class="ic-emoji">${ic.emoji}</span><span class="ic-tag">${ic.tag}</span></div>
      <button type="button" class="rm" title="Прибрати" onclick="removeFile('${a.id}')">✕</button>
      <div class="ft-meta"><span class="ft-name" title="${a.name}">${a.name}</span><span class="ft-size">${humanSize(a.size)}</span></div>
    </div>`;
  }).join('');

  box.innerHTML = `<div class="file-tiles">${tiles}</div>` +
    `<div class="help" style="margin-top:8px">Разом: ${attachments.length}/${MAX_FILES} файлів · ${humanSize(totalSize())} / 150 МБ</div>`;
}
function removeFile(id){
  const a=attachments.find(x=>x.id===id);
  if(a && a.preview){ try{ URL.revokeObjectURL(a.preview); }catch{} }
  attachments=attachments.filter(a=>a.id!==id);
  renderFiles(); saveDraft(false);
}

function addFiles(fileList, {ocr}={}){
  const incoming=[...fileList];
  for(const f of incoming){
    if(attachments.length>=MAX_FILES){ addMsg(`Максимум ${MAX_FILES} файлів — «${f.name}» не додано.`,'ai'); continue; }
    if(f.size>MAX_ONE){ addMsg(`Файл «${f.name}» більший за 50 МБ — не додано.`,'ai'); continue; }
    if(totalSize()+f.size>MAX_TOTAL){ addMsg(`Перевищено 150 МБ загалом — «${f.name}» не додано.`,'ai'); continue; }
    const id='f'+Date.now()+Math.random().toString(36).slice(2,6);
    attachments.push({id, file:f, name:f.name, size:f.size, type:f.type||''});
    if(ocr) dispatchExtract(f);
  }
  renderFiles();
  saveDraft(false);
}

/* Діспетчер: за типом файлу обираємо парсер (усе безкоштовно, з CDN). */
function dispatchExtract(f){
  const name=(f.name||'').toLowerCase();
  const type=f.type||'';
  if(/^image\//.test(type)) return runOcr(f);
  if(type==='application/pdf' || name.endsWith('.pdf')) return readPdf(f);
  if(name.endsWith('.docx')) return readDocx(f);
  if(name.endsWith('.xlsx') || name.endsWith('.xls')) return readXlsx(f);
  if(type.startsWith('video/')){
    addMsg(`Відео «${f.name}» прикріплено. Його переглянуть на платформі — з відео дані автоматично не витягуються.`,'ai');
    return;
  }
  addMsg(`Файл «${f.name}» прикріплено (тип не розпізнається для автозаповнення). Він піде на платформу як вкладення.`,'ai');
}

/* Після витягнутого тексту з будь-якого документа — спільний конвеєр заповнення. */
function applyExtractedText(text, sourceName){
  const clean=(text||'').replace(/\u00a0/g,' ').replace(/[ \t]+/g,' ').trim();
  if(clean.length<6 || !ocrLooksMeaningful(clean)){
    addMsg(`У «${sourceName}» не знайшов придатного для автозаповнення тексту. Файл прикріплено.`,'ai');
    return;
  }
  addMsg('Витягнув із «'+sourceName+'»: '+clean.replace(/\s+/g,' ').slice(0,200)+(clean.length>200?'…':''),'ai');
  fillSource='photo';
  const filled=extractFields(clean);
  fillSource='text';
  if(filled.length){
    validationVisible=true; normalizePrice(); autoGeo();
    const { reqLeft }=refresh();
    addMsg('Заповнив із документа (позначено «перевірте»): '+filled.join(', ')+'.'+(reqLeft?` Залишилось обов'язкових: ${reqLeft}.`:' Усі обов\'язкові заповнено ✅'),'ai');
    document.querySelector('.field.miss-req, .field.from-photo')?.scrollIntoView({behavior:'smooth',block:'center'});
  } else {
    // навіть якщо поля не знайшли — кладемо текст у коментар, щоб не втратити
    const notes=document.querySelector('textarea[name=notes]');
    if(notes && !notes.value.trim()){ notes.value='[З документа «'+sourceName+'»]: '+clean.slice(0,1500); refresh(); }
    addMsg('Однозначних полів не знайшов, але зберіг текст документа в «Відомі недоліки / коментар». Перевірте.','ai');
  }
}

/* PDF: pdf.js. Текстовий PDF -> текст напряму; скан -> рендер сторінок + OCR. */
let pdfjsLoading=null;
function loadPdfJs(){
  if(window.pdfjsLib) return Promise.resolve();
  if(pdfjsLoading) return pdfjsLoading;
  pdfjsLoading=new Promise((res,rej)=>{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs';
    s.type='module';
    // pdf.min.mjs експортує як модуль; підвантажуємо через динамічний import нижче
    s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
  return pdfjsLoading;
}
async function readPdf(f){
  addMsg(`Читаю PDF «${f.name}»…`,'ai');
  try{
    const pdfjs = await import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs');
    pdfjs.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs';
    const buf=await f.arrayBuffer();
    const pdf=await pdfjs.getDocument({data:buf}).promise;
    let text='';
    const maxPages=Math.min(pdf.numPages, 15);
    for(let p=1;p<=maxPages;p++){
      const page=await pdf.getPage(p);
      const content=await page.getTextContent();
      text += content.items.map(i=>i.str).join(' ')+'\n';
    }
    text=text.trim();
    if(text.length>=20){ applyExtractedText(text, f.name); return; }
    // мало тексту -> ймовірно скан: рендеримо 1-у сторінку і женемо через OCR
    addMsg('PDF схоже на скан — розпізнаю зображенням (OCR)…','ai');
    const page=await pdf.getPage(1);
    const viewport=page.getViewport({scale:2});
    const canvas=document.createElement('canvas');
    canvas.width=viewport.width; canvas.height=viewport.height;
    await page.render({canvasContext:canvas.getContext('2d'), viewport}).promise;
    await loadTesseract();
    const { data }=await window.Tesseract.recognize(canvas, 'ukr+rus+eng');
    applyExtractedText(data.text||'', f.name);
  }catch(e){
    addMsg('Не вдалося прочитати PDF ('+(e&&e.message||'помилка')+'). Файл прикріплено — його відкриють на платформі.','ai');
  }
}

/* DOCX: розпакування ZIP у браузері -> word/document.xml -> текст. Через JSZip (CDN). */
let jszipLoading=null;
function loadJsZip(){
  if(window.JSZip) return Promise.resolve();
  if(jszipLoading) return jszipLoading;
  jszipLoading=new Promise((res,rej)=>{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
    s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
  return jszipLoading;
}
async function readDocx(f){
  addMsg(`Читаю документ «${f.name}»…`,'ai');
  try{
    await loadJsZip();
    const zip=await window.JSZip.loadAsync(await f.arrayBuffer());
    const xml=await zip.file('word/document.xml')?.async('string');
    if(!xml){ addMsg('Не вдалося прочитати вміст DOCX. Файл прикріплено.','ai'); return; }
    const text=xml.replace(/<w:tab[^>]*\/>/g,' ').replace(/<w:br[^>]*\/>/g,'\n').replace(/<\/w:p>/g,'\n').replace(/<[^>]+>/g,'')
      .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'");
    applyExtractedText(text, f.name);
  }catch(e){
    addMsg('Не вдалося прочитати DOCX ('+(e&&e.message||'помилка')+'). Файл прикріплено.','ai');
  }
}

/* XLSX: SheetJS community (CDN) -> текст усіх клітинок. */
let xlsxLoading=null;
function loadXlsx(){
  if(window.XLSX) return Promise.resolve();
  if(xlsxLoading) return xlsxLoading;
  xlsxLoading=new Promise((res,rej)=>{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
  return xlsxLoading;
}
async function readXlsx(f){
  addMsg(`Читаю таблицю «${f.name}»…`,'ai');
  try{
    await loadXlsx();
    const wb=window.XLSX.read(await f.arrayBuffer(), {type:'array'});
    let text='';
    wb.SheetNames.slice(0,5).forEach(n=>{ text += window.XLSX.utils.sheet_to_csv(wb.Sheets[n])+'\n'; });
    applyExtractedText(text, f.name);
  }catch(e){
    addMsg('Не вдалося прочитати таблицю ('+(e&&e.message||'помилка')+'). Файл прикріплено.','ai');
  }
}

/* OCR фото через tesseract.js (безкоштовно, з CDN). Розпізнаний текст -> екстрактор полів. */
let tesseractLoading=null;
function loadTesseract(){
  if(window.Tesseract) return Promise.resolve();
  if(tesseractLoading) return tesseractLoading;
  tesseractLoading=new Promise((res,rej)=>{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
  return tesseractLoading;
}
// Оцінка «осмисленості» OCR-тексту: частка нормальних слів (кирилиця/латиниця/числа).
function ocrLooksMeaningful(text){
  const words=text.split(/\s+/).filter(Boolean);
  if(words.length<2) return false;
  const good=words.filter(w=>/^[\p{L}\p{N}][\p{L}\p{N}.,’'\-\/²]*$/u.test(w) && w.length>=2).length;
  return good/words.length >= 0.5 && good>=3;
}

async function runOcr(file){
  addMsg(`Читаю текст із фото «${file.name}»…`,'ai');
  try{
    await loadTesseract();
    // ukr+rus+eng — оголошення часто російською; eng для латиниці/цифр
    const { data } = await window.Tesseract.recognize(file, 'ukr+rus+eng');
    const text=(data.text||'').trim();
    const conf = data.confidence || 0;
    // Фото складу/поля зазвичай без тексту -> OCR дає шум. Відсікаємо.
    if(text.length<6 || conf<45 || !ocrLooksMeaningful(text)){
      addMsg('На фото не видно чіткого тексту (схоже на знімок об\'єкта, а не оголошення). Прикріпив як вкладення. Дані краще ввести словами/голосом або скинути скрін оголошення чи PDF.','ai');
      return;
    }
    applyExtractedText(text, file.name);
  }catch(e){
    addMsg('Не вдалося розпізнати фото (OCR). Файл усе одно прикріплено й піде на платформу.','ai');
  }
}

function onAiFile(e){
  addFiles(e.target.files, {ocr:true});
  addMsg('Прикріпив: '+[...e.target.files].map(f=>f.name).join(', ')+'. Фото читаю через OCR; усі файли передам на платформу разом із формою.','ai');
  e.target.value='';
}
// Секція «Фото, відео та документи» — той самий список, без OCR-спаму (фото об'єкта, не оголошення)
function onMainFile(e){
  addFiles(e.target.files, {ocr:false});
  e.target.value='';
}
/* голос */
let rec=null, recging=false;
function toggleRec(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ addMsg('Голосове введення не підтримується цим браузером. У проді — Whisper на сервері.','ai'); return; }
  const btn=document.getElementById('micBtn');
  if(recging){ rec.stop(); return; }
  rec=new SR(); rec.lang='uk-UA'; rec.interimResults=false;
  rec.onstart=()=>{ recging=true; btn.classList.add('rec'); };
  rec.onend=()=>{ recging=false; btn.classList.remove('rec'); };
  rec.onresult=(ev)=>{ const txt=ev.results[0][0].transcript; document.getElementById('aiText').value=txt; addMsg('🎤 '+txt,'user'); askAI(); };
  rec.start();
}

/* ---------- підсвітка / прогрес ---------- */
// Підсвітка вмикається лише після спроби відправки / AI-автозаповнення.
// До того форма «чиста»: жодних червоно-жовтих рамок і підписів під полями.
let validationVisible = false;

function refresh(){
  const fields=[...document.querySelectorAll('.field[data-req],.field[data-want]')].filter(f=>!f.closest('.hidden'));
  let total=0, filled=0, reqLeft=0, wantLeft=0;
  fields.forEach(f=>{
    const ctrl=f.querySelector('input,select,textarea');
    if(!ctrl) return;
    const has = ctrl.type==='checkbox' ? [...f.querySelectorAll('input:checked')].length>0 : !!ctrl.value.trim();
    const isReq=f.hasAttribute('data-req');
    total++; if(has) filled++;
    f.classList.remove('miss-req','miss-want');
    if(!has){
      if(isReq) reqLeft++; else wantLeft++;
      // Кольорову рамку показуємо тільки коли валідація активна.
      if(validationVisible) f.classList.add(isReq ? 'miss-req' : 'miss-want');
    }
  });
  const pct = total? Math.round(filled/total*100):0;
  const progFill=document.getElementById('progFill'); if(progFill) progFill.style.width=pct+'%';
  const progText=document.getElementById('progText');
  if(progText) progText.innerHTML=`Заповнено ${pct}% · <span>обов'язкових залишилось: ${reqLeft}</span>`;
  // Оновлюємо бічну легенду-лічильник (один раз, збоку — без підписів під кожним полем).
  const legend=document.getElementById('legendCounts');
  if(legend) legend.innerHTML =
    `<span class="lg lg-req">🔴 обов'язкових: ${reqLeft}</span>`+
    `<span class="lg lg-want">🟡 бажаних: ${wantLeft}</span>`;
  return { reqLeft, wantLeft };
}

/* ---------- збереження / відправка ---------- */
function collect(){
  const fd=new FormData(document.getElementById('proposal'));
  const obj={};
  for(const [k,v] of fd.entries()){ if(obj[k]){ obj[k]=[].concat(obj[k],v);} else obj[k]=v; }
  return obj;
}
function saveDraft(manual){
  localStorage.setItem('lh_draft', JSON.stringify(collect()));
  const st=document.getElementById('saveState');
  st.textContent = 'Чернетка збережена · '+new Date().toLocaleTimeString('uk-UA');
  if(manual) flash(st);
}
function flash(el){ el.style.color='var(--ok)'; setTimeout(()=>el.style.color='',900); }
function submitForm(){
  saveDraft(false);
  validationVisible = true; // з цього моменту показуємо червоно-жовті рамки
  const { reqLeft } = refresh();
  if(reqLeft){
    alert('Форму збережено. Залишилось обов\'язкових полів: '+reqLeft+'. Дозаповніть їх (можна через AI-панель), потім відправте.');
    document.querySelector('.field.miss-req')?.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  // Пакет для платформи: поля + список вкладень (файли передаються як FormData у проді).
  const payload = { fields: collect(), attachments: attachments.map(a=>({name:a.name,size:a.size,type:a.type})) };
  console.log('[Logistics Hub] payload ->', payload);
  const fileNote = attachments.length ? ` Вкладень: ${attachments.length} (${humanSize(totalSize())}) — підуть на платформу разом із формою.` : '';
  // у проді — POST (FormData з файлами) на приймач у закритому контурі -> платформа logistics-hub
  alert('Готово! Форму збережено і відправлено (демо).'+fileNote+' У проді дані й файли підуть на платформу Logistics Hub.');
}

/* автозбереження + відстеження змін */
function initAuto(){
  document.getElementById('proposal').addEventListener('input', ()=>{ refresh(); clearTimeout(window._ad); window._ad=setTimeout(()=>saveDraft(false),1200); });
  document.getElementById('proposal').addEventListener('change', ()=>{ refresh(); saveDraft(false); });
  document.querySelector('input[name=geo]').addEventListener('input', function(){ this.dataset.touched='1'; });
  // ручна правка нормалізованої вартості — не перетирати автоматично
  document.querySelector('input[name=priceNorm]').addEventListener('input', function(){ this.dataset.touched='1'; });
  document.querySelector('input[name=priceRaw]').addEventListener('input', function(){
    const n=document.querySelector('input[name=priceNorm]'); if(n) delete n.dataset.touched; // новий ввід — знову авто
  });
}
function restore(){
  const raw=localStorage.getItem('lh_draft'); if(!raw) return;
  try{
    const obj=JSON.parse(raw);
    if(obj.objectType){ document.querySelector('select[name=objectType]').value=obj.objectType; onTypeChange(); }
    Object.entries(obj).forEach(([k,v])=>{
      const el=document.querySelector(`[name="${k}"]`);
      if(el && el.type!=='file' && !Array.isArray(v)){ el.value=v; }
    });
    onDealChange(); normalizePrice(); geoButtons();
  }catch(e){}
}

function clearDraft(){
  if(!confirm('Очистити чернетку і почати з чистої форми?')) return;
  localStorage.removeItem('lh_draft');
  location.reload();
}

/* ---------- аналіз оточення через OpenStreetMap (безкоштовно, Overpass API) ---------- */
// fetch із жорстким таймаутом (щоб кнопка не зависала, якщо сервіс мовчить).
function fetchWithTimeout(url, opts, ms){
  const ctrl=new AbortController();
  const id=setTimeout(()=>ctrl.abort(), ms);
  return fetch(url, {...(opts||{}), signal:ctrl.signal}).finally(()=>clearTimeout(id));
}
async function analyzeEnvironment(){
  const region=document.querySelector('select[name=region]').value.trim();
  const city=document.querySelector('input[name=city]').value.trim();
  const addr=document.querySelector('input[name=address]').value.trim();
  const box=document.getElementById('envResult');
  const btn=document.getElementById('envBtn');
  if(!city && !addr){ box.classList.remove('hidden'); box.textContent='Спершу введіть населений пункт (і бажано адресу) — тоді проаналізую, що поруч.'; return; }
  box.classList.remove('hidden'); box.classList.remove('warn');
  box.textContent='Шукаю координати та аналізую оточення (OpenStreetMap)… Це займає до ~20 секунд.';
  if(btn){ btn.disabled=true; btn.textContent='⏳ Аналізую…'; }
  try{
    // 1) геокодимо адресу через Nominatim (таймаут 8 с)
    const q=[addr,city,region?region+' область':'','Україна'].filter(Boolean).join(', ');
    let nd=[];
    try{
      const nres=await fetchWithTimeout('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=uk&countrycodes=ua&q='+encodeURIComponent(q), {}, 8000);
      if(nres.ok) nd=await nres.json();
    }catch(_){}
    // fallback: якщо повна адреса не знайшлась — пробуємо тільки місто
    if(!nd.length && city){
      try{
        const nres2=await fetchWithTimeout('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=uk&countrycodes=ua&q='+encodeURIComponent(city+', Україна'), {}, 8000);
        if(nres2.ok) nd=await nres2.json();
      }catch(_){}
    }
    if(!nd.length){
      box.classList.add('warn');
      box.textContent='Не вдалося визначити координати за адресою (OpenStreetMap). Перевірте написання адреси/міста або впишіть оточення вручну.';
      return;
    }
    const lat=parseFloat(nd[0].lat), lon=parseFloat(nd[0].lon);
    // 2) Overpass: небезпечні/значущі об'єкти в радіусі 800 м. Пробуємо кілька дзеркал.
    const r=800;
    const query=`[out:json][timeout:25];(
      nwr["man_made"="works"](around:${r},${lat},${lon});
      nwr["amenity"="fuel"](around:${r},${lat},${lon});
      nwr["landuse"="industrial"](around:${r},${lat},${lon});
      nwr["military"](around:${r},${lat},${lon});
      nwr["power"="substation"](around:${r},${lat},${lon});
      nwr["shop"="wholesale"](around:${r},${lat},${lon});
    );out center 40;`;
    const mirrors=[
      'https://overpass-api.de/api/interpreter',
      'https://overpass.kumi.systems/api/interpreter',
      'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
    ];
    let od=null, lastErr=null;
    for(const url of mirrors){
      try{
        const ores=await fetchWithTimeout(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:query}, 12000);
        if(!ores.ok){ lastErr='HTTP '+ores.status; continue; }
        od=await ores.json();
        if(od) break;
      }catch(e){ lastErr=(e && e.name==='AbortError')?'таймаут':(e && e.message); }
    }
    if(!od){
      box.classList.add('warn');
      box.textContent='Сервіс аналізу (Overpass) тимчасово недоступний'+(lastErr?` (${lastErr})`:'')+'. Спробуйте за хвилину або впишіть оточення вручну.';
      return;
    }
    const found={};
    (od.elements||[]).forEach(el=>{
      const t=el.tags||{};
      if(t.amenity==='fuel') found['АЗС / заправка']=(found['АЗС / заправка']||0)+1;
      else if(t.military) found['військовий об\'єкт']=(found['військовий об\'єкт']||0)+1;
      else if(t.power==='substation') found['розподільча підстанція']=(found['розподільча підстанція']||0)+1;
      else if(t.man_made==='works'||t.landuse==='industrial') found['промислове виробництво']=(found['промислове виробництво']||0)+1;
      else if(t.shop==='wholesale') found['логістика/опт']=(found['логістика/опт']||0)+1;
    });
    const keys=Object.keys(found);
    const gmapsNote=` <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}" target="_blank" rel="noopener">переглянути точку</a>`;
    if(!keys.length){
      box.innerHTML='У радіусі ~800 м потенційно небезпечних об\'єктів OpenStreetMap не знайдено. Перевірте вручну (дані OSM можуть бути неповні).'+gmapsNote;
      return;
    }
    box.innerHTML='За даними OpenStreetMap (~800 м) поруч: '+keys.map(k=>`${k} (${found[k]})`).join(', ')+
      '. Позначив відповідні чекбокси — перевірте й уточніть відстані. Дані OSM орієнтовні.'+gmapsNote;
    const map={'АЗС / заправка':'АЗС / заправка','військовий об\'єкт':'Військове виробництво або військовий об\'єкт','розподільча підстанція':'Розподільча підстанція','промислове виробництво':'Завод або інше промислове виробництво'};
    keys.forEach(k=>{ const label=map[k]; if(!label) return; const cb=[...document.querySelectorAll('input[name=danger]')].find(c=>c.value===label); if(cb && !cb.checked){ cb.checked=true; } });
    refresh();
  }catch(e){
    box.classList.add('warn');
    box.textContent='Помилка аналізу оточення: '+(e && e.message ? e.message : 'невідома')+'. Впишіть оточення вручну.';
  }finally{
    if(btn){ btn.disabled=false; btn.textContent='🛰️ Проаналізувати оточення'; }
  }
}

/* Довідкова карта руйнувань на локації (зовнішнє безкоштовне посилання). */
function openDamageMap(){
  const city=document.querySelector('input[name=city]').value.trim();
  const region=document.querySelector('select[name=region]').value.trim();
  const q=encodeURIComponent([city,region,'Україна'].filter(Boolean).join(', '));
  // deepstatemap — публічна карта; відкриваємо з пошуком локації
  window.open('https://deepstatemap.live/#6/'+q, '_blank', 'noopener');
}

/* старт */
fillRegions(); fillDangers(); initAuto(); restore(); refresh(); geoButtons(); renderFiles();
