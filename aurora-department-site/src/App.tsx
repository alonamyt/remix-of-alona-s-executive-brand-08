import { useEffect, useState, type FormEvent } from "react";
import logo from "./assets/ard-logo-white.png";
import logoDay from "./assets/project/день/Group 23.png";
import auroraLogo from "./assets/aurora-white-subtitle.png";
import auroraLogoDay from "./assets/project/день/aurora.png";
import voinalovychPhoto from "./assets/войналович.jpg";
import communityForbesImage from "./assets/community-forbes-article.jpg";
import communityStudentsImage from "./assets/community-students-rd.jpg";
import teamCollabImage from "./assets/team-collab.jpg";
import conferenceNetworkingImage from "./assets/conference-networking.jpg";
import auroraAiPlatformVisual from "./assets/project/Aurora AI Platform.png";
import heroOrbitVisual from "./assets/project/golovna3.png";
import heroOrbitVisualDay from "./assets/project/день/golovnad.png";
import conversionTrackingVisual from "./assets/project/conversion tracking2.png";
import conversionTrackingVisualNight from "./assets/project/conversion tracking3.png";
import conversionTrackingVisualDay from "./assets/project/день/conversion tracking3d.png";
import generatorControlVisual from "./assets/project/Generator control system2.png";
import generatorControlVisualDay from "./assets/project/день/Generator control systemd.png";
import marketConsultingIcon from "./assets/project/icon1.png";
import marketBuildIcon from "./assets/project/icon2.png";
import marketReadyIcon from "./assets/project/icon3.png";
import marketConsultingIconDay from "./assets/project/день/icon1d.png";
import marketBuildIconDay from "./assets/project/день/icon2d.png";
import marketReadyIconDay from "./assets/project/день/icon3d.png";
import consultingTrainingVisual from "./assets/project/навчання.png";
import consultingTrainingVisualDay from "./assets/project/день/навчання.png";
import consultingStrategyVisual from "./assets/project/консалтинг2.png";
import consultingStrategyVisualDay from "./assets/project/день/консалтингd.png";
import consultingProcessVisual from "./assets/project/процеси.png";
import consultingProcessVisualDay from "./assets/project/день/процесиd.png";
import turnkeyDevelopmentVisual from "./assets/project/розробка.png";
import turnkeyDevelopmentVisualDay from "./assets/project/день/розробкаd.png";
import smartWikiVisual from "./assets/project/Smart Wiki.png";
import smartWikiVisualDay from "./assets/project/день/Smart Wikid.png";
import vehicleDetectionVisual from "./assets/project/Vehicle detection system2.png";
import vehicleDetectionVisualDay from "./assets/project/день/Vehicle detection systemd.png";
import auroraAiPlatformVisualDay from "./assets/project/день/Aurora AI Platformd.png";
import cherednykPhoto from "./assets/project/команда/чередник 2.png";
import sabaniukPhoto from "./assets/project/команда/сабанюк.png";
import adamovPhoto from "./assets/project/команда/adamov_upscaled.jpg";
import horbunovPhoto from "./assets/project/команда/горбунов.png";
import borodaiPhoto from "./assets/project/команда/Бородай Ірина.png";
import beshliahaPhoto from "./assets/project/команда/БешлягаСергій.png";
import daliukPhoto from "./assets/project/команда/далюк.png";
import chipenkoPhoto from "./assets/project/команда/чипенко2.jpg";
import kutniakPhoto from "./assets/project/команда/кутняк.png";
import kovalenkoPhoto from "./assets/project/команда/коваленко.png";
import koshelievPhoto from "./assets/project/команда/кошелєв.png";
import kustreiukPhoto from "./assets/project/команда/кустреюк.png";
import kucherenkoPhoto from "./assets/project/команда/кучеренко.jpg";
import lukashenkoPhoto from "./assets/project/команда/лукашенко поліна 2.png";
import mahlovanaPhoto from "./assets/project/команда/магльована.png";
import mandrykPhoto from "./assets/project/команда/мандрик софія.png";
import matiitsovPhoto from "./assets/project/команда/матійцов.png";
import bozhkoPhoto from "./assets/project/команда/божко ольга.png";
import bozhenkoPhoto from "./assets/project/команда/Боженко Едуард.png";
import diabinaPhoto from "./assets/project/команда/дябіна марина.png";
import krakovychPhoto from "./assets/project/команда/кракович борислав.png";
import medarPhoto from "./assets/project/команда/медар кирило.png";
import nikonovaPhoto from "./assets/project/команда/ніконова анастасія.png";
import onopriienkoPhoto from "./assets/project/команда/онопрієнко дарина.png";
import panovPhoto from "./assets/project/команда/панов дмитро.png";
import palamarchukPhoto from "./assets/project/команда/паламарчук.png";
import perekhrestPhoto from "./assets/project/команда/ПерехрестЛюдмила.png";
import pidopryhoraPhoto from "./assets/project/команда/підопригора.png";
import popovPhoto from "./assets/project/команда/попов іван.jpg";
import shopskaPhoto from "./assets/project/команда/шопська анастасія.png";
import voroninPhoto from "./assets/project/команда/воронін станіслав.png";
import mytrofanovaPhoto from "./assets/project/команда/митрофанова.png";

type Language = "ua" | "en";
type ThemeMode = "night" | "day";
type ViewMode = "public" | "internal";
type TeamMember = {
  name: string;
  role: string;
  note?: string;
};

type LightboxItem = {
  src: string;
  title: string;
  subtitle?: string;
};

type TeamBranch = {
  label: string;
  members: TeamMember[];
};

type TeamRole = {
  title: string;
  direction: string;
  text: string;
  members?: TeamMember[];
  branches?: TeamBranch[];
  featured?: boolean;
};

type LocaleContent = {
    nav: {
      projects: string;
      consulting: string;
      build: string;
      team: string;
      community: string;
      contact: string;
    };
  header: { department: string; language: string; theme: string; day: string; night: string };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    stats: Array<{ value: string; label: string }>;
    notes: string[];
    editorialLabel: string;
    editorialTitle: string;
    editorialText: string;
    signals: Array<{ label: string; value: string }>;
    stages: { signal: string; system: string; impact: string };
    modules: {
      input: { label: string; title: string; text: string };
      engine: { label: string; title: string; text: string };
      output: { label: string; title: string; text: string };
    };
    meter: string;
    photoInsight: { label: string; title: string };
    captions: Array<{ index: string; title: string; text: string }>;
    beacons: string[];
    brandWord: string;
    forces: { ai: string; humanity: string; system: string };
    fusionLabel: string;
    projectionLabel: string;
    targetLabel: string;
  };
  manifesto: {
    kicker: string;
    title: string;
    text: string;
    columns: Array<{ title: string; text: string }>;
    numbers: {
      eyebrow: string;
      title: string;
      note: string;
      items: Array<{ value: string; label: string }>;
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      title: string;
      category: string;
      categoryLabel: string;
      description: string;
      metric: string;
      metricLabel: string;
      points: string[];
      outcome: string;
      market: string;
      availabilityLabel?: string;
      availabilityTone?: "internal" | "commercial";
    }>;
  };
  market: {
    eyebrow: string;
    title: string;
    text: string;
    offers: Array<{
      title: string;
      text: string;
      detailTitle: string;
      detailText: string;
      panels: Array<{
        eyebrow: string;
        title: string;
        items: Array<{ lead: string; text: string }>;
      }>;
    }>;
  };
  team: {
    eyebrow: string;
    title: string;
    text: string;
    leaderLabel: string;
    leader: {
      name: string;
      role: string;
      focus: string;
      skills: string[];
    };
    roles: TeamRole[];
  };
  impact: {
    eyebrow: string;
    title: string;
    text: string;
    metrics: Array<{ value: string; label: string }>;
    timeline: Array<{ year: string; title: string; text: string }>;
  };
  community: {
    eyebrow: string;
    title: string;
    text: string;
    events: Array<{ title: string; text: string; meta: string; href?: string; linkLabel?: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Array<{ label: string; value: string; href: string; hint: string }>;
  };
};

type HeroExpoSceneProps = {
  hero: LocaleContent["hero"];
  theme: ThemeMode;
};

const internalAccounts = [
  {
    login: "a.mytrofanova",
    password: "Pasha2026",
  },
] as const;

function HeroExpoScene({ hero }: HeroExpoSceneProps) {
  return (
    <svg
      className="expo-hero-svg"
      viewBox="0 0 900 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="expoFloor" x1="450" y1="360" x2="450" y2="680" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(19,31,62,0)" />
          <stop offset="0.35" stopColor="#111d3f" />
          <stop offset="1" stopColor="#0a1228" />
        </linearGradient>
        <linearGradient id="expoPanel" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#223866" />
          <stop offset="1" stopColor="#111d3e" />
        </linearGradient>
        <linearGradient id="expoTrim" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#9df7eb" />
          <stop offset="1" stopColor="#6c79ff" />
        </linearGradient>
        <linearGradient id="expoHuman" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f8fcff" />
          <stop offset="0.55" stopColor="#d3ebff" />
          <stop offset="1" stopColor="#6ae3d6" />
        </linearGradient>
        <linearGradient id="expoCrowd" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#edf5ff" />
          <stop offset="1" stopColor="#516ea8" />
        </linearGradient>
        <linearGradient id="expoBeam" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="rgba(97,230,214,0.32)" />
          <stop offset="0.65" stopColor="rgba(126,107,255,0.18)" />
          <stop offset="1" stopColor="rgba(255,210,74,0.06)" />
        </linearGradient>
        <radialGradient id="expoPortalGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290 206) rotate(90) scale(108)">
          <stop stopColor="#ffffff" />
          <stop offset="0.22" stopColor="#ffd24a" stopOpacity="0.92" />
          <stop offset="0.46" stopColor="#66e9db" stopOpacity="0.4" />
          <stop offset="0.72" stopColor="#7e6bff" stopOpacity="0.26" />
          <stop offset="1" stopColor="#7e6bff" stopOpacity="0" />
        </radialGradient>
        <filter id="expoSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <g className="expo-svg-architecture">
        <path d="M86 94H814V158H86V94Z" className="expo-svg-rig" />
        <path d="M112 140H792" className="expo-svg-rig-line" />
        <path d="M88 210H406V404H88V210Z" className="expo-svg-panel-frame" />
        <path d="M104 226H390V388H104V226Z" className="expo-svg-panel-screen" />
        <circle cx="247" cy="307" r="96" fill="url(#expoPortalGlow)" />
        <circle cx="247" cy="307" r="78" className="expo-svg-portal-ring" />
        <circle cx="247" cy="307" r="54" className="expo-svg-portal-ring expo-svg-portal-ring-alt" />
        <circle cx="247" cy="307" r="24" className="expo-svg-portal-core" />

        <path d="M612 180H794V338H612V180Z" className="expo-svg-panel-frame" />
        <path d="M626 194H780V324H626V194Z" className="expo-svg-panel-screen expo-svg-panel-screen-side" />
        <path d="M654 234C684 210 728 212 754 240C726 254 694 280 668 312C648 294 642 258 654 234Z" className="expo-svg-side-wave" />

        <path d="M598 392H782V468H598V392Z" className="expo-svg-booth" />
        <path d="M84 470L450 360L816 470V672H84V470Z" fill="url(#expoFloor)" />
        <path d="M84 470L450 360L816 470" className="expo-svg-floor-edge" />
        <path d="M150 534L450 418L750 534" className="expo-svg-floor-grid" />
        <path d="M208 570L450 476L692 570" className="expo-svg-floor-grid" />
        <path d="M280 606L450 540L620 606" className="expo-svg-floor-grid" />
      </g>

      <g className="expo-svg-lighting">
        <path d="M126 96L148 210" className="expo-svg-light-ray" />
        <path d="M202 96L220 216" className="expo-svg-light-ray" />
        <path d="M282 96L300 222" className="expo-svg-light-ray" />
        <path d="M620 96L640 214" className="expo-svg-light-ray" />
        <path d="M700 96L718 218" className="expo-svg-light-ray" />
      </g>

      <g className="expo-svg-ui">
        <rect x="88" y="124" width="236" height="34" rx="17" className="expo-svg-chip" />
        <text x="206" y="146" textAnchor="middle" className="expo-svg-chip-text">{hero.fusionLabel}</text>

        <rect x="616" y="118" width="114" height="88" rx="20" className="expo-svg-info-card expo-svg-info-card-ai" />
        <text x="636" y="144" className="expo-svg-label">{hero.forces.ai}</text>
        <text x="636" y="176" className="expo-svg-card-title">Nodes</text>
        <circle cx="708" cy="162" r="18" className="expo-svg-mini-orb" />

        <rect x="726" y="396" width="120" height="88" rx="20" className="expo-svg-info-card expo-svg-info-card-system" />
        <text x="746" y="422" className="expo-svg-label">{hero.forces.system}</text>
        <text x="746" y="454" className="expo-svg-card-title">{hero.modules.engine.title}</text>

        <rect x="90" y="544" width="152" height="72" rx="24" className="expo-svg-pedestal" />
        <text x="114" y="586" className="expo-svg-card-title expo-svg-card-title-small">{hero.modules.input.title}</text>

        <rect x="670" y="548" width="152" height="72" rx="24" className="expo-svg-pedestal expo-svg-pedestal-output" />
        <text x="694" y="590" className="expo-svg-card-title expo-svg-card-title-small">{hero.modules.output.title}</text>
      </g>

      <g className="expo-svg-camera-system">
        <g className="expo-svg-camera">
          <rect x="92" y="314" width="74" height="42" rx="16" className="expo-svg-camera-body" />
          <circle cx="118" cy="335" r="11" className="expo-svg-camera-lens" />
          <circle cx="147" cy="329" r="5" className="expo-svg-camera-led" />
          <rect x="124" y="354" width="10" height="82" rx="5" className="expo-svg-camera-mount" />
        </g>

        <path d="M128 356L342 420L296 598L112 560Z" fill="url(#expoBeam)" className="expo-svg-capture-fill" />
        <path d="M128 356L342 420L296 598L112 560Z" className="expo-svg-capture-outline" />
        <path d="M146 398L320 450" className="expo-svg-capture-grid" />
        <path d="M138 440L312 492" className="expo-svg-capture-grid" />
        <path d="M130 484L304 536" className="expo-svg-capture-grid" />
        <path d="M122 528L296 582" className="expo-svg-capture-grid" />
        <text x="162" y="390" className="expo-svg-label">{hero.projectionLabel}</text>
      </g>

      <g className="expo-svg-crowd">
        <g transform="translate(158 0) scale(0.92)">
          <ellipse cx="0" cy="604" rx="28" ry="8" className="expo-svg-shadow" />
          <circle cx="0" cy="456" r="18" className="expo-svg-person-head" />
          <path d="M-26 484C-18 470 18 470 26 484L34 546C30 570 22 594 12 620H0L-8 578L-18 620H-30C-18 592 -12 570 -10 546L-26 484Z" className="expo-svg-person-body" />
        </g>
        <g transform="translate(236 6) scale(1.02)">
          <ellipse cx="0" cy="604" rx="30" ry="9" className="expo-svg-shadow" />
          <circle cx="0" cy="448" r="19" className="expo-svg-person-head" />
          <path d="M-28 478C-18 462 18 462 28 478L38 548C34 574 24 600 12 624H0L-8 584L-18 624H-32C-18 598 -12 572 -10 548L-28 478Z" className="expo-svg-person-body" />
        </g>
        <g transform="translate(524 4) scale(0.82)">
          <ellipse cx="0" cy="604" rx="25" ry="7" className="expo-svg-shadow" />
          <circle cx="0" cy="462" r="16" className="expo-svg-person-head" />
          <path d="M-24 490C-16 476 16 476 24 490L32 548C29 568 20 592 10 620H0L-8 584L-16 620H-28C-16 592 -10 570 -9 548L-24 490Z" className="expo-svg-person-body expo-svg-person-body-dim" />
        </g>
        <g transform="translate(718 0) scale(0.88)">
          <ellipse cx="0" cy="604" rx="26" ry="8" className="expo-svg-shadow" />
          <circle cx="0" cy="456" r="17" className="expo-svg-person-head" />
          <path d="M-24 484C-15 470 15 470 24 484L33 544C30 568 22 592 10 620H0L-7 582L-16 620H-29C-17 592 -11 570 -10 544L-24 484Z" className="expo-svg-person-body expo-svg-person-body-dim" />
        </g>
      </g>

      <g className="expo-svg-subject">
        <ellipse cx="222" cy="616" rx="34" ry="10" className="expo-svg-shadow expo-svg-shadow-strong" />
        <circle cx="222" cy="474" r="18" className="expo-svg-person-head expo-svg-person-head-lit" />
        <path d="M194 502C206 484 238 484 250 502L262 560C258 582 248 604 236 630H224L216 592L204 630H190C202 604 210 582 210 560L194 502Z" className="expo-svg-person-body expo-svg-person-body-lit" />
        <path d="M190 520L254 520" className="expo-svg-target-lock" />
        <path d="M222 488V554" className="expo-svg-target-lock" />
      </g>

      <g className="expo-svg-hero-figure" transform="translate(0 8)">
        <ellipse cx="678" cy="612" rx="58" ry="15" className="expo-svg-shadow expo-svg-shadow-hero" />
        <path d="M646 566L710 566L726 594L628 594L646 566Z" className="expo-svg-plinth" />
        <ellipse cx="678" cy="566" rx="58" ry="14" className="expo-svg-plinth-top" />

        <ellipse cx="678" cy="264" rx="30" ry="36" fill="url(#expoHuman)" />
        <path d="M660 294H696V314C696 322 688 330 678 330C668 330 660 322 660 314V294Z" fill="url(#expoHuman)" />
        <path d="M632 324C642 302 714 302 724 324L730 412C724 450 710 476 696 510H680L670 458L660 510H642C654 474 664 448 666 412L632 324Z" fill="url(#expoHuman)" />
        <path d="M638 336C620 358 612 392 610 430L624 430C630 396 638 372 650 350Z" fill="url(#expoHuman)" />
        <path d="M718 338C734 360 742 394 744 430H730C724 396 716 372 704 350Z" fill="url(#expoHuman)" />
        <path d="M662 508C654 536 652 566 650 598H666C670 568 674 540 680 514Z" fill="url(#expoHuman)" />
        <path d="M694 508C702 536 704 566 706 598H690C686 568 682 540 676 514Z" fill="url(#expoHuman)" />
        <circle cx="660" cy="266" r="5" className="expo-svg-figure-ear" />
        <circle cx="696" cy="266" r="5" className="expo-svg-figure-ear" />
        <circle cx="678" cy="380" r="16" className="expo-svg-figure-core" />
      </g>

      <g className="expo-svg-copy-lockup">
        <text x="106" y="248" className="expo-svg-label">{hero.editorialLabel}</text>
        <text x="106" y="274" className="expo-svg-screen-title">{hero.editorialTitle}</text>
        <text x="644" y="620" className="expo-svg-label">{hero.targetLabel}</text>
      </g>

      <g filter="url(#expoSoftGlow)">
        <circle cx="678" cy="380" r="44" className="expo-svg-bloom" />
      </g>
    </svg>
  );
}

function HeroValueVisual({ hero }: HeroExpoSceneProps) {
  return (
    <div className="hero-value-shell">
      <svg
        className="hero-value-svg"
        viewBox="0 0 900 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="valuePanel" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#1c274c" />
            <stop offset="1" stopColor="#0d1734" />
          </linearGradient>
          <linearGradient id="valueGold" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fff0a6" />
            <stop offset="0.55" stopColor="#ffd54a" />
            <stop offset="1" stopColor="#b98512" />
          </linearGradient>
          <linearGradient id="valueCyan" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7cf6ea" />
            <stop offset="1" stopColor="#3f7cff" />
          </linearGradient>
          <linearGradient id="valueShell" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#ffffff" />
            <stop offset="0.48" stopColor="#e8f2ff" />
            <stop offset="1" stopColor="#b9d8ff" />
          </linearGradient>
          <linearGradient id="valueJoint" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#10192f" />
            <stop offset="1" stopColor="#243a68" />
          </linearGradient>
          <linearGradient id="valueFace" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#f9fcff" />
            <stop offset="1" stopColor="#d9ecff" />
          </linearGradient>
          <linearGradient id="valueBeam" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgba(124,246,234,0.82)" />
            <stop offset="0.52" stopColor="rgba(255,213,74,0.92)" />
            <stop offset="1" stopColor="rgba(126,107,255,0.82)" />
          </linearGradient>
          <radialGradient id="valueCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(468 334) rotate(90) scale(132)">
            <stop stopColor="#ffffff" />
            <stop offset="0.18" stopColor="#fff0a6" />
            <stop offset="0.42" stopColor="#ffd54a" stopOpacity="0.9" />
            <stop offset="0.7" stopColor="#7cf6ea" stopOpacity="0.28" />
            <stop offset="1" stopColor="#7cf6ea" stopOpacity="0" />
          </radialGradient>
          <filter id="valueGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <g className="hero-value-backdrop">
          <path d="M88 112H812" className="hero-value-rig" />
          <path d="M86 540L470 420L814 540" className="hero-value-floor" />
          <path d="M142 578L470 472L736 578" className="hero-value-floor hero-value-floor-soft" />
          <path d="M208 618L470 534L660 618" className="hero-value-floor hero-value-floor-soft" />
        </g>

        <g className="hero-value-sources">
          <g transform="translate(74 146)">
            <rect x="0" y="0" width="178" height="124" rx="30" fill="url(#valuePanel)" className="hero-value-card" />
            <text x="24" y="28" className="hero-value-tag">retail analytics</text>
            <rect x="26" y="44" width="86" height="54" rx="18" className="hero-value-store" />
            <path d="M44 62H94" className="hero-value-store-line" />
            <path d="M70 44V98" className="hero-value-store-line hero-value-store-line-soft" />
            <circle cx="130" cy="70" r="12" className="hero-value-person-head" />
            <path d="M116 86C122 76 138 76 144 86L148 118H112L116 86Z" className="hero-value-person-body" />
            <path d="M14 56L32 56M14 56L14 74M164 56L146 56M164 56L164 74M14 108L32 108M14 108L14 90M164 108L146 108M164 108L164 90" className="hero-value-capture-corners" />
          </g>

          <g transform="translate(104 318)">
            <rect x="0" y="0" width="196" height="132" rx="32" fill="url(#valuePanel)" className="hero-value-card hero-value-card-alt" />
            <text x="24" y="30" className="hero-value-tag">logistics access</text>
            <path d="M28 90H110" className="hero-value-lane" />
            <path d="M36 52H80L92 68H128V108H28V68H36V52Z" className="hero-value-truck" />
            <circle cx="54" cy="108" r="9" className="hero-value-wheel" />
            <circle cx="102" cy="108" r="9" className="hero-value-wheel" />
            <path d="M148 44V108" className="hero-value-gate" />
            <path d="M148 58H174" className="hero-value-barrier" />
            <path d="M150 78L182 60" className="hero-value-route" />
          </g>

          <g transform="translate(204 520)">
            <rect x="0" y="0" width="182" height="96" rx="28" fill="url(#valuePanel)" className="hero-value-card" />
            <text x="24" y="30" className="hero-value-tag">energy resilience</text>
            <circle cx="42" cy="58" r="8" className="hero-value-node hero-value-node-live" />
            <circle cx="90" cy="48" r="8" className="hero-value-node hero-value-node-live" />
            <circle cx="140" cy="66" r="8" className="hero-value-node" />
            <path d="M42 58L90 48L140 66" className="hero-value-grid-link" />
            <path d="M98 44L110 58H100L110 74" className="hero-value-bolt" />
          </g>
        </g>

        <g className="hero-value-flow">
          <path d="M252 208C318 214 364 248 420 300" className="hero-value-flow-line hero-value-flow-line-one" />
          <path d="M300 376C350 368 392 344 430 324" className="hero-value-flow-line hero-value-flow-line-two" />
          <path d="M386 570C418 536 436 494 452 420" className="hero-value-flow-line hero-value-flow-line-three" />
        </g>

        <g className="hero-value-core-cluster">
          <circle cx="468" cy="334" r="138" fill="url(#valueCore)" />
          <circle cx="468" cy="334" r="118" className="hero-value-core-ring hero-value-core-ring-one" />
          <circle cx="468" cy="334" r="92" className="hero-value-core-ring hero-value-core-ring-two" />
          <ellipse cx="468" cy="554" rx="132" ry="34" className="hero-value-platform-shadow" />
          <rect x="384" y="492" width="168" height="116" rx="24" className="hero-value-podium-front" />
          <rect x="400" y="478" width="136" height="34" rx="17" className="hero-value-podium-top" />
          <path d="M404 504H532" className="hero-value-podium-rim" />
          <text x="468" y="162" textAnchor="middle" className="hero-value-chip">{hero.fusionLabel}</text>

          <g className="hero-value-human-stage">
            <ellipse cx="468" cy="500" rx="58" ry="18" className="hero-value-human-contact-shadow" />
            <path d="M468 214C436 214 416 238 416 272C416 293 424 313 440 330C448 339 452 348 452 356C452 361 456 364 460 364H476C480 364 484 361 484 356C484 348 488 339 496 330C512 313 520 293 520 272C520 238 500 214 468 214Z" className="hero-value-human-head-shell" />
            <path d="M444 246C449 234 458 228 468 228C478 228 487 234 492 246C496 256 498 267 498 279C498 295 493 310 486 321C481 329 475 334 468 334C461 334 455 329 450 321C443 310 438 295 438 279C438 267 440 256 444 246Z" className="hero-value-human-face" />
            <path d="M468 229C478 229 486 235 492 246C495 255 497 267 497 278C497 294 492 307 486 317C480 325 474 329 468 329V229Z" className="hero-value-human-face-shadow" />
            <path d="M448 356C454 348 482 348 488 356L496 376H440L448 356Z" className="hero-value-human-neck" />
            <path d="M452 364H484L488 380H448L452 364Z" className="hero-value-human-collar-core" />
            <ellipse cx="428" cy="276" rx="14" ry="18" className="hero-value-human-ear-shell" />
            <ellipse cx="508" cy="276" rx="14" ry="18" className="hero-value-human-ear-shell" />
            <ellipse cx="428" cy="276" rx="7" ry="9" className="hero-value-human-ear-core" />
            <ellipse cx="508" cy="276" rx="7" ry="9" className="hero-value-human-ear-core" />
            <circle cx="416" cy="392" r="14" className="hero-value-human-joint" />
            <circle cx="520" cy="392" r="14" className="hero-value-human-joint" />
            <path d="M410 378C422 346 514 346 526 378L532 446C528 470 518 494 504 514C494 528 482 536 468 538C454 536 442 528 432 514C418 494 408 470 404 446L410 378Z" className="hero-value-human-torso" />
            <path d="M434 388C442 374 494 374 502 388L506 428C502 448 492 468 480 484H456C444 468 434 448 430 428L434 388Z" className="hero-value-human-core-plate" />
            <path d="M450 480C456 474 480 474 486 480L494 514C488 526 478 532 468 534C458 532 448 526 442 514L450 480Z" className="hero-value-human-pelvis" />
            <path d="M410 388C390 404 378 430 380 458C388 466 398 466 404 460C404 434 410 412 426 394L410 388Z" className="hero-value-human-upper-arm-left" />
            <path d="M526 388C546 404 558 430 556 458C548 466 538 466 532 460C532 434 526 412 510 394L526 388Z" className="hero-value-human-upper-arm-right" />
            <path d="M380 458C376 484 376 510 382 534C390 540 400 540 406 532C404 508 406 484 412 462L380 458Z" className="hero-value-human-lower-arm-left" />
            <path d="M556 458C560 484 560 510 554 534C546 540 536 540 530 532C532 508 530 484 524 462L556 458Z" className="hero-value-human-lower-arm-right" />
            <path d="M382 534C384 544 392 552 401 553C410 550 414 542 412 534C404 530 390 530 382 534Z" className="hero-value-human-hand-left" />
            <path d="M554 534C552 544 544 552 535 553C526 550 522 542 524 534C532 530 546 530 554 534Z" className="hero-value-human-hand-right" />
            <path d="M446 270C450 266 456 266 460 270" className="hero-value-human-eye-left" />
            <path d="M476 270C480 266 486 266 490 270" className="hero-value-human-eye-right" />
            <path d="M468 274V294" className="hero-value-human-nose-line" />
            <path d="M456 304C462 309 474 309 480 304" className="hero-value-human-mouth-line" />
            <path d="M440 398C452 404 484 404 496 398" className="hero-value-human-bust-line" />
            <path d="M450 430C456 440 480 440 486 430" className="hero-value-human-waist-line" />
            <circle cx="418" cy="288" r="18" className="hero-value-force hero-value-force-ai" />
            <circle cx="550" cy="286" r="18" className="hero-value-force hero-value-force-system" />
            <circle cx="402" cy="426" r="18" className="hero-value-force hero-value-force-human" />
            <path d="M436 296L450 320M532 296L490 322M412 416L446 370" className="hero-value-force-link" />
            <circle cx="520" cy="232" r="14" className="hero-value-heart-node" />
            <path d="M514 232C514 227 518 224 522 224C526 224 530 227 530 232C530 238 524 242 522 244C520 242 514 238 514 232Z" className="hero-value-heart-mark" />
          </g>
        </g>

        <g className="hero-value-outputs">
          <path d="M550 334C606 320 650 290 690 236" className="hero-value-beam hero-value-beam-one" />
          <path d="M546 362C610 388 664 430 714 500" className="hero-value-beam hero-value-beam-two" />

          <g transform="translate(622 114)">
            <rect x="0" y="0" width="198" height="252" rx="34" fill="url(#valuePanel)" className="hero-value-tower" />
            <text x="28" y="34" className="hero-value-tag">customer experience</text>
            <path d="M30 174H168" className="hero-value-counter" />
            <circle cx="72" cy="118" r="18" className="hero-value-person-head" />
            <path d="M52 138C60 124 84 124 92 138L98 172H46L52 138Z" className="hero-value-person-body" />
            <circle cx="134" cy="108" r="16" className="hero-value-person-head hero-value-person-head-lit" />
            <path d="M116 126C122 114 144 114 150 126L156 170H110L116 126Z" className="hero-value-person-body hero-value-person-body-lit" />
            <path d="M90 154C100 146 112 146 122 154" className="hero-value-service-arc" />
            <circle cx="108" cy="76" r="24" className="hero-value-service-ring" />
            <path d="M98 76L106 84L120 66" className="hero-value-service-check" />
            <path d="M44 208H154" className="hero-value-bar hero-value-bar-one" />
            <path d="M44 230H122" className="hero-value-bar hero-value-bar-two" />
          </g>

          <g transform="translate(612 446)">
            <rect x="0" y="0" width="216" height="140" rx="30" fill="url(#valuePanel)" className="hero-value-card hero-value-card-output" />
            <text x="26" y="30" className="hero-value-tag">time for service</text>
            <circle cx="58" cy="82" r="26" className="hero-value-clock-face" />
            <path d="M58 82V68M58 82L70 88" className="hero-value-clock-hand" />
            <rect x="108" y="56" width="72" height="14" rx="7" className="hero-value-bar hero-value-bar-three" />
            <rect x="108" y="82" width="54" height="14" rx="7" className="hero-value-bar hero-value-bar-two" />
            <rect x="108" y="108" width="88" height="14" rx="7" className="hero-value-bar hero-value-bar-one" />
            <path d="M32 116C58 102 78 100 98 104" className="hero-value-service-arc" />
          </g>
        </g>

        <g className="hero-value-copy">
          <g transform="translate(332 566)">
            <rect x="0" y="0" width="146" height="72" rx="24" className="hero-value-caption-card" />
            <text x="22" y="24" className="hero-value-tag">{hero.captions[0]?.index}</text>
            <text x="22" y="48" className="hero-value-caption-title">{hero.captions[0]?.title}</text>
          </g>
          <g transform="translate(490 566)">
            <rect x="0" y="0" width="146" height="72" rx="24" className="hero-value-caption-card" />
            <text x="22" y="24" className="hero-value-tag">{hero.captions[1]?.index}</text>
            <text x="22" y="48" className="hero-value-caption-title">{hero.captions[1]?.title}</text>
          </g>
          <g transform="translate(648 566)">
            <rect x="0" y="0" width="146" height="72" rx="24" className="hero-value-caption-card" />
            <text x="22" y="24" className="hero-value-tag">{hero.captions[2]?.index}</text>
            <text x="22" y="48" className="hero-value-caption-title">{hero.captions[2]?.title}</text>
          </g>
        </g>

        <g filter="url(#valueGlow)">
          <circle cx="468" cy="334" r="56" className="hero-value-core-bloom" />
        </g>
      </svg>
    </div>
  );
}

function HeroSignatureVisual({ hero, theme }: HeroExpoSceneProps) {
  const heroVisual = theme === "day" ? heroOrbitVisualDay : heroOrbitVisual;

  return (
    <div className="hero-live-shell">
      <div className="hero-live-stage">
        <div
          className="hero-live-backfill"
          style={{ backgroundImage: `url(${heroVisual})` }}
          aria-hidden="true"
        />
        <img src={heroVisual} alt={hero.photoInsight.title} className="hero-live-image" />
        <svg
          className="hero-live-overlay"
          viewBox="0 0 900 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="heroLiveOrbitStroke" x1="136" y1="520" x2="782" y2="172" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffd86d" />
              <stop offset="0.34" stopColor="#72e8ff" />
              <stop offset="0.68" stopColor="#6881ff" />
              <stop offset="1" stopColor="#ffd86d" />
            </linearGradient>
            <linearGradient id="heroLiveLinkStroke" x1="454" y1="344" x2="720" y2="164" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(107,216,255,0.14)" />
              <stop offset="0.54" stopColor="rgba(111,219,255,0.88)" />
              <stop offset="1" stopColor="rgba(255,216,109,0.82)" />
            </linearGradient>
            <linearGradient id="heroLiveBeamStroke" x1="454" y1="344" x2="712" y2="188" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(243, 216, 148, 0.04)" />
              <stop offset="0.18" stopColor="rgba(160, 228, 255, 0.42)" />
              <stop offset="0.52" stopColor="rgba(241, 198, 96, 0.88)" />
              <stop offset="1" stopColor="rgba(233, 176, 65, 0.12)" />
            </linearGradient>
            <radialGradient id="heroLiveCoreHalo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(454 344) rotate(90) scale(162)">
              <stop stopColor="#eefcff" />
              <stop offset="0.16" stopColor="#7de2ff" stopOpacity="0.94" />
              <stop offset="0.42" stopColor="#607dff" stopOpacity="0.42" />
              <stop offset="0.72" stopColor="#ffd86d" stopOpacity="0.16" />
              <stop offset="1" stopColor="#72e8ff" stopOpacity="0" />
            </radialGradient>
            <filter id="heroLiveSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <g className="hero-live-overlay-back">
            <ellipse cx="454" cy="346" rx="334" ry="218" className="hero-live-orbit hero-live-orbit-outer" />
            <ellipse cx="454" cy="346" rx="262" ry="166" className="hero-live-orbit hero-live-orbit-mid" />
            <ellipse cx="454" cy="346" rx="140" ry="92" className="hero-live-orbit hero-live-orbit-inner" />

            <path d="M454 344C410 300 332 232 250 184" className="hero-live-link hero-live-link-retail" />
            <path d="M454 344C526 296 604 234 694 182" className="hero-live-link hero-live-link-generators" />
            <path d="M454 344C540 374 622 422 702 500" className="hero-live-link hero-live-link-recruiting" />
            <path d="M454 344C390 384 318 438 226 494" className="hero-live-link hero-live-link-wiki" />
          </g>

          <g className="hero-live-overlay-beams">
            <path d="M454 344C410 300 332 232 250 184" className="hero-live-beam-glow hero-live-beam-retail" />
            <path d="M454 344C526 296 604 234 694 182" className="hero-live-beam-glow hero-live-beam-generators" />
            <path d="M454 344C540 374 622 422 702 500" className="hero-live-beam-glow hero-live-beam-recruiting" />
            <path d="M454 344C390 384 318 438 226 494" className="hero-live-beam-glow hero-live-beam-wiki" />
            <path d="M454 344C410 300 332 232 250 184" className="hero-live-beam hero-live-beam-retail" />
            <path d="M454 344C526 296 604 234 694 182" className="hero-live-beam hero-live-beam-generators" />
            <path d="M454 344C540 374 622 422 702 500" className="hero-live-beam hero-live-beam-recruiting" />
            <path d="M454 344C390 384 318 438 226 494" className="hero-live-beam hero-live-beam-wiki" />
          </g>

          <g className="hero-live-overlay-fields" filter="url(#heroLiveSoftGlow)">
            <ellipse cx="252" cy="186" rx="92" ry="40" className="hero-live-module-field hero-live-module-field-retail" />
            <ellipse cx="692" cy="182" rx="90" ry="38" className="hero-live-module-field hero-live-module-field-generators" />
            <ellipse cx="220" cy="500" rx="104" ry="44" className="hero-live-module-field hero-live-module-field-wiki" />
            <ellipse cx="700" cy="506" rx="102" ry="42" className="hero-live-module-field hero-live-module-field-recruiting" />
            <ellipse cx="454" cy="344" rx="148" ry="108" className="hero-live-module-field hero-live-module-field-core" />
          </g>

          <g className="hero-live-overlay-core">
            <circle cx="454" cy="344" r="148" fill="url(#heroLiveCoreHalo)" className="hero-live-svg-core-halo" />
            <circle cx="454" cy="344" r="96" className="hero-live-svg-core-ring hero-live-svg-core-ring-outer" />
            <circle cx="454" cy="344" r="64" className="hero-live-svg-core-ring hero-live-svg-core-ring-mid" />
            <circle cx="454" cy="344" r="34" className="hero-live-svg-core-ring hero-live-svg-core-ring-inner" />
            <path d="M424 344H484M454 314V374" className="hero-live-svg-core-cross" />
          </g>

        </svg>
        <div className="hero-live-vignette" />
        <div className="hero-live-shimmer hero-live-shimmer-one" />
        <div className="hero-live-core-glow" />
        <div className="hero-live-core-pulse hero-live-core-pulse-one" />
        <div className="hero-live-core-pulse hero-live-core-pulse-two" />
        <div className="hero-live-scan hero-live-scan-one" />
      </div>
    </div>
  );
}

function renderMarketIcon(index: number, theme: ThemeMode) {
  const imageMap =
    theme === "day"
      ? [marketConsultingIconDay, marketBuildIconDay, marketReadyIconDay]
      : [marketConsultingIcon, marketBuildIcon, marketReadyIcon];
  const altMap = ["Консалтинг", "Розробка під ключ", "Готові рішення"];

  return (
    <div className="market-card-icon market-card-icon-image-shell" aria-hidden="true">
      <img src={imageMap[index] ?? imageMap[0]} alt={altMap[index] ?? altMap[0]} className="market-card-icon-image" />
    </div>
  );
}

const content: Record<Language, LocaleContent> = {
  ua: {
    nav: {
      projects: "Продукти",
      consulting: "Консалтинг",
      build: "Розробка",
      team: "Команда",
      community: "Спільнота",
      contact: "Контакти",
    },
    header: { department: "Департамент", language: "Мова", theme: "Режим", day: "День", night: "Ніч" },
    hero: {
      eyebrow: "R&D департамент Аврора",
      title: "Створюємо середовище, у якому Аврора росте швидше й посилює свою перевагу",
      text: "",
      primary: "Дивитися продукти",
      secondary: "Обговорити партнерство",
      stats: [
        { value: "2019", label: "робота команди R&D з 2019" },
        { value: "12+", label: "запущених продуктів" },
        { value: "24/7", label: "фокус на досвіді" },
      ],
      notes: ["Швидший ріст", "Швидші рішення", "Ринковий потенціал"],
      editorialLabel: "Продуктовий сигнал",
      editorialTitle: "Технології, що допомагають Аврора рости швидше",
      editorialText:
        "Ми створюємо не просто внутрішні інструменти, а середовище для зростання компанії. Найсильніші рішення, перевірені в Аврора, згодом можуть ставати окремими продуктами для зовнішнього ринку.",
      signals: [
        { label: "Зростання", value: "швидший ріст Аврора" },
        { label: "Швидкість + сервіс", value: "швидші рішення, людяний сервіс" },
        { label: "Потенціал ринку", value: "продукти, готові до масштабу" },
        { label: "Продуктове мислення", value: "кожне рішення стартує з цінності для людини та бізнесу" },
        { label: "Сервісний дизайн", value: "дивимося на повний шлях користувача від першого дотику до щоденної взаємодії" },
        { label: "Інженерна зрілість", value: "будуємо системи, які масштабуються, витримують навантаження й підтримують ріст" },
      ],
      stages: { signal: "сигнал", system: "система", impact: "ефект" },
      modules: {
        input: {
          label: "вхід",
          title: "Сигнали",
          text: "Потреби, точки тертя, ідеї та бізнес-цілі.",
        },
        engine: {
          label: "ядро",
          title: "Прискорення",
          text: "Продуктова логіка, сервісний дизайн та інженерна глибина.",
        },
        output: {
          label: "вихід",
          title: "Перевага",
          text: "Швидкість, зростання, кращий сервіс і системи, готові до масштабу.",
        },
      },
      meter: "ритм росту",
      photoInsight: { label: "поле переваги", title: "Рух, який прискорює Аврора" },
      captions: [
        {
          index: "01",
          title: "Зростання",
          text: "Продукти, що допомагають Аврора швидше набирати бізнес-оберти.",
        },
        {
          index: "02",
          title: "Сервіс",
          text: "Системи, що роблять компанію швидшою, яснішою та людянішою.",
        },
        {
          index: "03",
          title: "Перевага",
          text: "Технології, які бізнес відчуває як реальну операційну силу.",
        },
      ],
      beacons: ["швидший ріст", "людяний сервіс", "готовність до ринку"],
      brandWord: "АВРОРА",
      forces: { ai: "ШІ", humanity: "Людяність", system: "Система" },
      fusionLabel: "ШІ + людяність + система",
      projectionLabel: "світло переваги",
      targetLabel: "людина + бізнес",
    },
    manifesto: {
      kicker: "Візія / маніфест",
      title:
        "Ми не просто автоматизуємо процеси. Ми створюємо середовище, у якому компанія росте швидше, сервіс працює людяніше, а технології стають відчутною перевагою Аврора.",
      text:
        "Сайт має презентувати департамент як команду, що прискорює бізнес Аврора, формує нову якість досвіду й закладає основу для майбутніх продуктів, які можуть масштабуватися поза межі компанії.",
      columns: [
        {
          title: "Продуктове мислення",
          text: "Кожне рішення стартує з цінності для людини та бізнесу, а не з набору технічних задач.",
        },
        {
          title: "Сервісний дизайн",
          text: "Дивимося на повний шлях користувача: від першого дотику до щоденної взаємодії з сервісом.",
        },
        {
          title: "Інженерна зрілість",
          text: "Будуємо системи, які масштабуються, витримують навантаження й стають стійкою опорою для росту.",
        },
      ],
      numbers: {
        eyebrow: "Цифри",
        title: "Ми в цифрах",
        note: "Ключові цифри департаменту станом на зараз.",
        items: [
          { value: "7", label: "років розвитку напряму" },
          { value: "35 чол", label: "команда департаменту" },
          { value: "XXXX+", label: "активних користувачів і команд у контурі рішень" },
          { value: "XX+", label: "продуктових та операційних сценаріїв" },
          { value: "XX+", label: "напрямів, де рішення дають бізнес-ефект" },
        ],
      },
    },
    projects: {
      eyebrow: "Флагманські продукти",
      title: "Портфель продуктів, що прискорюють Аврора сьогодні й можуть масштабуватися назовні завтра",
      text:
        "Це не каталог задач. Тут ми спершу показуємо цінність для бізнесу й людей, а вже потім пояснюємо, яким продуктом і функціоналом вона досягається.",
      items: [
        {
          title: "Система підрахунку зовнішньої конверсії",
          category: "retail analytics",
          categoryLabel: "Ритейл-аналітика",
          description:
            "Аналізує зовнішній трафік та конверсію у відвідування і покупки на базі відеоаналітики та алгоритмів машинного навчання.",
          metric: "31.05%",
          metricLabel: "видима конверсія у воронці",
          outcome: "Для рітейлу: від відеоспостереження до зростання продажів.",
          market: "Інструмент виміру впливу реклами, локацій і потоків на реальну конверсію.",
          points: [
            "зниження неефективних витрат, зокрема на аутсорс",
            "збільшення продажів через оптимізацію маркетингу",
            "прозора аналітика ефективності точок",
          ],
        },
        {
          title: "Система детекції автомобілів",
          category: "logistics access control",
          categoryLabel: "Контроль логістичного доступу",
          description:
            "Автоматично виявляє транспорт, розпізнає номерні знаки та керує шлагбаумами. Система допомагає управляти логістичними потоками та рампами завантаження.",
          metric: "24/7",
          metricLabel: "контроль критичного доступу",
          outcome: "Розпізнавання номерів та керування доступом для логістики.",
          market: "Повна автоматизація контролю в'їзду та виїзду.",
          points: [
            "оптимізація трафіку і черговості розвантаження",
            "зменшення простоїв та підвищення безпеки",
            "детекція номерів, транспорт і паркінг",
          ],
        },
        {
          title: "Система контролю генераторів",
          category: "energy resilience",
          categoryLabel: "Енергостійкість",
          description:
            "Моніторить стан генераторів, веде точний облік відпрацьованих мотогодин та відслідковує роботу обладнання в реальному часі.",
          metric: "1795",
          metricLabel: "генераторів у єдиному контурі",
          outcome: "Надійність енергозабезпечення та оптимізація витрат.",
          market: "Планування ТО та функції безпеки.",
          points: [
            "зниження витрат і ризиків простоїв торгових точок",
            "підвищення надійності роботи магазинів",
          ],
        },
        {
          title: "Аврора AI Platform",
          category: "ai orchestration platform",
          categoryLabel: "Платформа оркестрації ШІ",
          description:
            "Єдина екосистема для конфігурації, швидкого запуску та масштабування AI-рішень: асистентів, агентів та інструментів.",
          metric: "1 платформа",
          metricLabel: "роль платформи",
          outcome: "Швидке впровадження без розгортання інфраструктури.",
          market: "Зниження вартості розробки завдяки уніфікації.",
          points: [
            "централізоване управління AI у всіх підрозділах",
            "асистенти, агенти та інструменти в єдиному контурі",
            "масштабування рішень без дублювання підходів",
          ],
        },
        {
          title: "Smart Wiki",
          category: "genai knowledge assistant",
          categoryLabel: "Асистент знань на базі генеративного ШІ",
          description:
            "Допомагає працівникам швидко знаходити відповіді щодо внутрішніх правил і операційної роботи. Надає інструкції з вбудованими картинками, схемами та фото через GenAI.",
          metric: "GenAI",
          metricLabel: "швидкий доступ до знань",
          outcome: "AI-асистент для співробітників складу і магазину.",
          market: "Швидкий доступ до знань та процесів за допомогою GenAI.",
          points: [
            "зменшення часу на пошук інформації",
            "зниження кількості помилок у процесах",
            "швидший онбординг нових працівників",
          ],
        },
      ],
    },
    market: {
      eyebrow: "Комерційні рішення",
      title: "Внутрішні технології Аврора, упаковані в чіткі рішення для зовнішнього ринку",
      text:
        "Ми пропонуємо не абстрактні послуги, а три зрозумілі формати співпраці: консалтинг, індивідуальну розробку та готові перевірені рішення, які вже працюють у мережі «Аврора».",
      offers: [
        {
          title: "Консалтинг",
          text: "Експертиза в управлінні змінами, налаштуванні процесів та роботі з даними.",
          detailTitle: "Консалтинг",
          detailText: "Ключові напрямки експертизи та трансформації бізнесу.",
          panels: [
            {
              eyebrow: "Навчання",
              title: "Розвиток компетенцій",
              items: [
                { lead: "Проєктне управління", text: "Методології PMBOK, Agile, Scrum, Kanban." },
                { lead: "Бізнес-аналіз", text: "Виявлення вимог, документування, робота зі стейкхолдерами." },
                { lead: "Процесний аналіз", text: "Аудит стану (AS-IS) та проєктування (TO-BE)." },
              ],
            },
            {
              eyebrow: "Консалтинг",
              title: "Стратегія та тактика",
              items: [
                { lead: "Стратегічний рівень", text: "Побудова офісів управління проєктами (PMO), портфельне управління." },
                { lead: "Тактичний рівень", text: "Супровід проєктних команд, менторинг керівників." },
                { lead: "Впровадження змін", text: "Change Management і підтримка переходу до нових підходів." },
              ],
            },
            {
              eyebrow: "Процеси",
              title: "Оптимізація та автоматизація",
              items: [
                { lead: "Опис процесів", text: "Створення регламентів та карт процесів." },
                { lead: "Моделювання BPMN", text: "Візуалізація логіки виконання робіт для прозорості." },
                { lead: "Автоматизація", text: "Перехід від ручної праці до цифрових інструментів." },
              ],
            },
          ],
        },
        {
          title: "Розробка під ключ",
          text: "Кастомні продукти з глибокою доменною експертизою в сфері рітейлу.",
          detailTitle: "Розробка під ключ",
          detailText: "Створення індивідуальних продуктів з глибоким розумінням специфіки рітейлу.",
          panels: [
              {
                eyebrow: "Індивідуальна",
                title: "розробка",
                items: [
                  { lead: "Discovery Phase", text: "Глибокий аналіз проблематики та формування візії продукту." },
                  { lead: "MVP & Scaling", text: "Від швидкої перевірки гіпотез (PoC) до масштабування рішення." },
                ],
              },
              {
                eyebrow: "Доменна експертиза",
                title: "рітейлу",
                items: [
                  { lead: "Operations", text: "Магазини, склади, РЦ, логістика «останньої милі»." },
                  { lead: "Tech & Data", text: "E-commerce, ціноутворення, BI-аналітика та AI/ML рішення." },
                ],
              },
              {
                eyebrow: "Інтеграції та",
                title: "якість",
                items: [
                  { lead: "Architecture", text: "Побудова API, ESB та надійна інтеграція з існуючими системами." },
                  { lead: "Security & SLA", text: "Кібербезпека, захист даних та підтримка 24/7 критичних сервісів." },
                ],
              },
          ],
        },
        {
          title: "Готові рішення",
          text: "Battle-tested продукти, що використовуються в мережі «Аврора» і доступні клієнтам.",
          detailTitle: "Готові рішення",
          detailText: "Продукти, перевірені в операційній роботі Аврора і готові до швидкого запуску у партнера.",
          panels: [
            {
              eyebrow: "Запуск",
              title: "Без старту з нуля",
              items: [
                { lead: "Battle-tested основа", text: "Продукти вже використовуються всередині великої ритейл-мережі." },
                { lead: "Швидший go-live", text: "Старт для клієнта швидший, ніж кастомна розробка з нуля." },
              ],
            },
            {
              eyebrow: "Адаптація",
              title: "Під процеси партнера",
              items: [
                { lead: "Інтеграції", text: "Можливість адаптації під бізнес-процеси та ІТ-контур партнера." },
                { lead: "Сервісна модель", text: "Підтримка формату співпраці, який відповідає масштабу й задачі." },
              ],
            },
            {
              eyebrow: "Операційна",
              title: "Практика Аврора",
              items: [
                { lead: "Не лабораторний концепт", text: "Опора на реальну операційну практику Аврора, а не на лабораторні концепти." },
                { lead: "Готовність до масштабу", text: "Рішення побудовані з урахуванням реального навантаження." },
              ],
            },
          ],
        },
      ],
    },
    team: {
      eyebrow: "Команда, що створює магію",
      title: "Команда, що поєднує стратегію, реалізацію та розвиток продуктів",
      text:
        "У центрі сайту має бути не перелік посад, а відчуття сильної команди з чіткими ролями, довірою та реальною зоною впливу.",
      leaderLabel: "Ключове ядро",
      leader: {
        name: "Олександр Войналович",
        role: "R&D директор",
        focus: "Департамент інновацій та проєктного управління",
        skills: ["Стратегія", "Продукти", "Розвиток", "Системне мислення"],
      },
      roles: [
        {
          title: "Чередник Олександр",
          direction: "Керівник відділу досліджень і розробок",
          text: "",
          members: [
            { name: "Бешляга Сергій", role: "Розробник" },
            { name: "Далюк Анна", role: "Проєктний менеджер" },
            { name: "Попов Іван", role: "Розробник" },
            { name: "Перехрест Людмила", role: "Аналітик" },
            { name: "Чипенко Олена", role: "Product Owner" },
          ],
        },
        {
          title: "Бородай Ірина",
          direction: "Керівниця відділу бізнес-аналізу",
          text: "",
          members: [
            { name: "Панов Дмитро", role: "Бізнес-аналітик" },
            { name: "Магльована Марія", role: "Аналітик" },
            { name: "Паламарчук Олександра", role: "Спеціалістка з ЕДО" },
          ],
        },
        {
          title: "Кучеренко Євгенія",
          direction: "Керівниця офісу управління проєктами та процесами",
          text: "",
          branches: [
            {
              label: "Офіс управління проєктами",
              members: [
                { name: "Ніконова Анастасія", role: "Адміністратор проєктного офісу" },
                { name: "Горбунов Віктор", role: "Проєктний менеджер" },
                { name: "Кустреюк Олександр", role: "Керівник програми проєктів по діджиталізації документообігу" },
                { name: "Кутняк Юлія", role: "Проєктна менеджерка" },
                { name: "Адамов Володимир", role: "Проєктний менеджер" },
                { name: "Кошелєв Ілля", role: "Проєктний менеджер" },
              ],
            },
            {
              label: "Офіс управління процесами",
	              members: [
	                { name: "Божко Ольга", role: "Архітекторка процесів" },
	                { name: "Підопригора Юлія", role: "Менеджер процесів" },
	                { name: "Матійцов Ростислав", role: "Процесний аналітик" },
	                { name: "Дябіна Марина", role: "Процесний аналітик" },
	                { name: "Коваленко Олександра", role: "Процесний аналітик" },
	                { name: "Воронін Станіслав", role: "Процесний аналітик" },
	              ],
            },
          ],
        },
        {
          title: "Сабанюк Олександр",
          direction: "Керівник AVRORA AI Lab",
          text: "",
          members: [
            { name: "Боженко Едуард", role: "Operations Manager" },
            { name: "Кракович Борислав", role: "Розробник AI-рішень" },
            { name: "Медар Кирило", role: "Розробник AI-рішень, інтерн" },
            { name: "Мандрик Софія", role: "Фахівець інформаційних технологій, інтерн" },
            { name: "Лукашенко Поліна", role: "Фахівець інформаційних технологій, інтерн" },
            { name: "Шопська Анастасія", role: "Фахівець інформаційних технологій, інтерн" },
            { name: "Онопрієнко Дарина", role: "Фахівець інформаційних технологій, інтерн" },
          ],
        },
        {
          title: "Митрофанова Альона",
          direction: "Заступник директора департаменту по розвитку продуктів",
          text: "",
          featured: true,
        },
      ],
    },
    impact: {
      eyebrow: "Історія та масштаб",
      title: "Від старту департаменту до внутрішнього технологічного бренду Аврора",
      text:
        "Це не просто хронологія. Це шлях від команди-ініціативи до продуктового ядра, яке відчутно впливає на компанію щодня.",
      metrics: [
        { value: "2019", label: "робота команди R&D з 2019" },
        { value: "12+", label: "продуктів у портфелі" },
        { value: "2 аудиторії", label: "співробітники та клієнти" },
      ],
      timeline: [
        {
          year: "Серпень 2019",
          title: "Робота команди R&D з 2019",
          text: "Формується окрема команда, що бере на себе продуктову й інноваційну траєкторію компанії.",
        },
        {
          year: "2021",
          title: "Перші масштабовані рішення",
          text: "З'являються продукти, які виходять за межі локальних задач і впливають на щоденну роботу великої кількості людей.",
        },
        {
          year: "2023",
          title: "Портфель і системність",
          text: "Команда переходить від окремих ініціатив до цілісної продуктової архітектури.",
        },
        {
          year: "2025",
          title: "Видимий масштаб",
          text: "Продукти стають частиною ширшого сервісного та операційного досвіду Аврора.",
        },
      ],
    },
    community: {
      eyebrow: "Публічність та спільнота",
      title: "Експертиза, яку видно не лише всередині компанії",
      text:
        "Реальні виступи, галузеві події й розвиток молодих талантів показують департамент як сильний голос Аврора у професійній спільноті та середовищі майбутніх продуктів.",
      events: [
        {
          title: "Forbes AI Summit, Львів",
          text: "На Forbes AI Summit команда Аврора показала, що штучний інтелект для нас уже не майбутнє, а сьогодення. Олександр Войналович розповів, як GenAI та Computer Vision уже працюють у магазинах і бек-офісі: AI-асистенти підтримують команди, аналітика трафіку пришвидшує рішення, а автоматизація зменшує рутину, підвищує точність і покращує сервіс.",
          meta: "Forbes Ukraine / 27.11.2025 / Олександр Войналович / GenAI + Computer Vision",
          href: "https://forbes.ua/innovations/shvidki-innovatsii-tse-batl-yak-vprovaditi-shi-bez-sprotivu-pratsivnikiv-i-zvidki-brati-idei-dlya-rozrobok-dosvid-avrora-nova-i-ukrsibbanku-16122025-34864",
          linkLabel: "Перейти на Forbes і дивитися панель",
        },
        {
          title: "Retail Expo 2025",
          text: `На RETAIL EXPO 2025 ми говорили про те, як «Аврора» змінює ритейл завдяки технологіям і людяності.

🔷 R&D директор Олександр Войналович презентував, як ми інтегруємо штучний інтелект у щоденну роботу (асистент для клієнтів та співробітників, аналітика трафіку)

🔶 Директорка з персоналу Ольга Правда взяла участь у ключовій дискусії про відповідальний ритейл, де розповіла, як ми створюємо безпечне середовище, підтримуємо психологічну стійкість команд і адаптуємо HR-ініціативи до різних ролей у компанії. Турбота про людей, емпатійна комунікація, інклюзивність у ритейлі.

Ми будуємо ритейл, де технології підсилюють людину, а цінності формують досвід - для команди, клієнтів і суспільства.`,
          meta: "Retail Expo 2025 / Олександр Войналович / AI + людяність у ритейлі",
        },
        {
          title: "RAU Workshop",
          text: "Платформа Retail Association of Ukraine, 11 вересня 2025, Kyiv Hall. Олександр Войналович був серед спікерів панелі про цифрову трансформацію фізичних магазинів і практичні зміни в офлайн-ритейлі.",
          meta: "Retail Association of Ukraine / 11.09.2025 / Kyiv Hall / Олександр Войналович",
          href: "https://rau.ua/news/rau-workshop-2/",
          linkLabel: "Перейти на RAU і подивитися фоторепортаж",
        },
        {
          title: "Студенти в команді R&D",
          text: "Зараз у команді Аврора R&D працюють 4 студенти в межах цієї програми. Вони долучені не до навчальних симуляцій, а до реальних продуктових і дослідницьких задач, які формують майбутню силу команди.",
          meta: "Аврора R&D / 4 студенти / реальна продуктова практика",
          href: "https://www.facebook.com/voinalovych.o/posts/25173397178933144/",
          linkLabel: "Перейти до історії програми",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Почнімо розмову про продукти, сервіс і масштаб",
      text: "Блок для запитів щодо продуктів, партнерств, пілотів і прямого зв'язку з командою.",
      cards: [
        {
          label: "Телефон",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "основний контакт",
        },
        {
          label: "Пошта",
          value: "products@avrora.ua",
          href: "mailto:products@avrora.ua",
          hint: "запити щодо продуктів",
        },
        {
          label: "Пошта",
          value: "partners@avrora.ua",
          href: "mailto:partners@avrora.ua",
          hint: "партнерства й пілоти",
        },
        {
          label: "Пошта",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "команда й медіа",
        },
      ],
    },
  },
  en: {
    nav: {
      projects: "Products",
      consulting: "Consulting",
      build: "Development",
      team: "Team",
      community: "Community",
      contact: "Contacts",
    },
    header: { department: "Department", language: "Language", theme: "Mode", day: "Day", night: "Night" },
    hero: {
      eyebrow: "Avrora R&D Department",
      title: "We create an environment where Avrora grows faster and strengthens its advantage",
      text: "",
      primary: "See products",
      secondary: "Discuss partnership",
      stats: [
        { value: "2019", label: "R&D team active since 2019" },
        { value: "12+", label: "products launched" },
        { value: "24/7", label: "experience focus" },
      ],
      notes: ["Faster growth", "Faster execution", "Market potential"],
      editorialLabel: "Product signal",
      editorialTitle: "Technology that helps Avrora grow faster",
      editorialText:
        "We build more than internal tooling. We create an environment for company growth first, and the strongest solutions can later evolve into standalone market offerings.",
      signals: [
        { label: "Growth", value: "faster Avrora growth" },
        { label: "Speed + service", value: "faster decisions, more human service" },
        { label: "Market potential", value: "products ready to scale outward" },
        { label: "Product thinking", value: "every solution starts from value for people and the business" },
        { label: "Service design", value: "we look at the full user journey from the first touchpoint to everyday use" },
        { label: "Engineering maturity", value: "we build systems that scale, handle load, and support growth" },
      ],
      stages: { signal: "signal", system: "system", impact: "impact" },
      modules: {
        input: {
          label: "input",
          title: "Signals",
          text: "Ideas, needs, friction points, and business goals.",
        },
        engine: {
          label: "engine",
          title: "Acceleration",
          text: "Product logic, service design, and engineering depth.",
        },
        output: {
          label: "output",
          title: "Advantage",
          text: "Growth, speed, better service, and systems ready for scale.",
        },
      },
      meter: "growth rhythm",
      photoInsight: { label: "advantage field", title: "Avrora momentum in motion" },
      captions: [
        {
          index: "01",
          title: "Growth",
          text: "Products that help Avrora accelerate business momentum.",
        },
        {
          index: "02",
          title: "Service",
          text: "Systems that make the company faster, clearer, and more human.",
        },
        {
          index: "03",
          title: "Advantage",
          text: "Technology transformed into an operational edge the business can feel.",
        },
      ],
      beacons: ["faster growth", "human service", "market-ready systems"],
      brandWord: "AVRORA",
      forces: { ai: "AI", humanity: "Humanity", system: "System" },
      fusionLabel: "AI + humanity + system",
      projectionLabel: "advantage beam",
      targetLabel: "people + business",
    },
    manifesto: {
      kicker: "Vision / manifesto",
      title:
        "We do not just automate processes. We create an environment where the company grows faster, service feels more human, and technology becomes a tangible Avrora advantage.",
      text:
        "The site should present the department as a team accelerating Avrora's business, shaping a better quality of experience, and building the foundation for products that can later scale beyond the company.",
      columns: [
        {
          title: "Product thinking",
          text: "Every solution starts from value for people and the business, not from a list of technical tasks.",
        },
        {
          title: "Service design",
          text: "We look at the full user journey, from the first touchpoint to everyday interaction with a service.",
        },
        {
          title: "Engineering maturity",
          text: "We build systems that scale, handle load, and become a resilient base for growth.",
        },
      ],
      numbers: {
        eyebrow: "Numbers",
        title: "Us in numbers",
        note: "Key department metrics as of now.",
        items: [
          { value: "7", label: "years of building the R&D direction" },
          { value: "35 people", label: "department team" },
          { value: "XXXX+", label: "active users and teams supported by the solutions" },
          { value: "XX+", label: "product and operational scenarios covered" },
          { value: "XX+", label: "business areas where the products create impact" },
        ],
      },
    },
    projects: {
      eyebrow: "Flagship products",
      title: "A portfolio of products accelerating Avrora today and ready to scale outward tomorrow",
      text:
        "This is not a task catalog. We start with value for the business and people first, then explain which product and functionality make that value real.",
      items: [
        {
          title: "External conversion tracking system",
          category: "retail analytics",
          categoryLabel: "Retail analytics",
          description:
            "Analyzes external traffic and conversion into visits and purchases using video analytics and machine-learning algorithms.",
          metric: "31.05%",
          metricLabel: "visible funnel conversion",
          outcome: "For retail: from video surveillance to sales growth.",
          market: "A measurement tool for the impact of advertising, locations, and people flow on real conversion.",
          points: [
            "reduces ineffective spending, including outsourcing costs",
            "increases sales through marketing optimization",
            "transparent analytics of store performance",
          ],
        },
        {
          title: "Vehicle detection system",
          category: "logistics access control",
          categoryLabel: "Logistics access control",
          description:
            "Automatically detects vehicles, recognizes license plates, and controls barriers. The system helps manage logistics flows and loading docks.",
          metric: "24/7",
          metricLabel: "critical access control",
          outcome: "License-plate recognition and access control for logistics.",
          market: "Full automation of entry and exit control.",
          points: [
            "traffic and unloading-sequence optimization",
            "less downtime and stronger security",
            "plate detection, vehicles, and parking",
          ],
        },
        {
          title: "Generator control system",
          category: "energy resilience",
          categoryLabel: "Energy resilience",
          description:
            "Monitors generator status, keeps accurate records of engine hours, and tracks equipment performance in real time.",
          metric: "1795",
          metricLabel: "generators in one control layer",
          outcome: "Reliable power continuity and cost optimization.",
          market: "Maintenance planning and safety functions.",
          points: [
            "reduced costs and downtime risks for retail locations",
            "higher reliability of store operations",
          ],
        },
        {
          title: "Avrora AI Platform",
          category: "ai orchestration platform",
          categoryLabel: "AI orchestration platform",
          description:
            "A unified ecosystem for configuring, rapidly launching, and scaling AI solutions: assistants, agents, and tools.",
          metric: "1 platform",
          metricLabel: "platform role",
          outcome: "Fast deployment without infrastructure rollout.",
          market: "Lower development cost through standardization.",
          points: [
            "centralized AI management across all departments",
            "assistants, agents, and tools in one system",
            "solution scale without duplicated approaches",
          ],
        },
        {
          title: "Smart Wiki",
          category: "genai knowledge assistant",
          categoryLabel: "GenAI knowledge assistant",
          description:
            "Helps employees quickly find answers about internal rules and day-to-day operations. Provides instructions with built-in images, diagrams, and photos through GenAI.",
          metric: "GenAI",
          metricLabel: "fast access to knowledge",
          outcome: "AI assistant for warehouse and store employees.",
          market: "Fast access to knowledge and processes through GenAI.",
          points: [
            "less time spent searching for information",
            "fewer process errors",
            "faster onboarding for new employees",
          ],
        },
      ],
    },
    market: {
      eyebrow: "Commercial solutions",
      title: "Avrora’s internal technologies, packaged into clear solutions for the external market",
      text:
        "We offer not abstract services, but three clear collaboration formats: consulting, turnkey product development, and battle-tested solutions already used across Avrora.",
      offers: [
        {
          title: "Consulting",
          text: "Expertise in change management, process setup, and data-driven transformation.",
          detailTitle: "Consulting",
          detailText: "Core tracks of expertise and business transformation.",
          panels: [
            {
              eyebrow: "Capability",
              title: "Development",
              items: [
                { lead: "Project management", text: "PMBOK, Agile, Scrum, and Kanban methodologies." },
                { lead: "Business analysis", text: "Requirements discovery, documentation, and stakeholder work." },
                { lead: "Process analysis", text: "AS-IS assessment and TO-BE design." },
              ],
            },
            {
              eyebrow: "Consulting",
              title: "Strategy & tactics",
              items: [
                { lead: "Strategic level", text: "PMO setup and portfolio management." },
                { lead: "Tactical level", text: "Support for project teams and leadership mentoring." },
                { lead: "Change rollout", text: "Change management and transition support." },
              ],
            },
            {
              eyebrow: "Processes",
              title: "Optimization & automation",
              items: [
                { lead: "Process mapping", text: "Creation of regulations and process maps." },
                { lead: "BPMN modeling", text: "Visualizing work logic for clarity and alignment." },
                { lead: "Automation", text: "Moving from manual work to digital instruments." },
              ],
            },
          ],
        },
        {
          title: "Turnkey development",
          text: "Custom products built with deep domain expertise in retail operations.",
          detailTitle: "Turnkey development",
          detailText: "Custom product creation with a deep understanding of retail specifics.",
          panels: [
            {
              eyebrow: "Custom",
              title: "Development",
              items: [
                { lead: "Discovery phase", text: "Deep problem analysis and product vision definition." },
                { lead: "MVP & scaling", text: "From PoC and hypothesis testing to solution rollout." },
              ],
            },
            {
              eyebrow: "Retail domain",
              title: "Expertise",
              items: [
                { lead: "Operations", text: "Stores, warehouses, distribution centers, and last-mile logistics." },
                { lead: "Tech & data", text: "E-commerce, pricing, BI analytics, and AI/ML solutions." },
              ],
            },
            {
              eyebrow: "Integration &",
              title: "Quality",
              items: [
                { lead: "Architecture", text: "API, ESB, and reliable integration with existing systems." },
                { lead: "Security & SLA", text: "Cybersecurity, data protection, and 24/7 support for critical services." },
              ],
            },
          ],
        },
        {
          title: "Ready-made solutions",
          text: "Battle-tested products already used across Avrora and available to clients.",
          detailTitle: "Ready-made solutions",
          detailText: "Products proven in Avrora’s operations and ready for faster partner launch.",
          panels: [
            {
              eyebrow: "Launch",
              title: "Without starting from zero",
              items: [
                { lead: "Battle-tested base", text: "Already used inside a large retail network." },
                { lead: "Faster go-live", text: "Client launch is faster than custom development from scratch." },
              ],
            },
            {
              eyebrow: "Adaptation",
              title: "To partner processes",
              items: [
                { lead: "Integrations", text: "Adaptation to business processes and IT landscape." },
                { lead: "Service model", text: "Support for a collaboration model that fits the partner’s scale and need." },
              ],
            },
            {
              eyebrow: "Avrora",
              title: "Operational practice",
              items: [
                { lead: "Not a lab concept", text: "Built on real Avrora operating practice, not lab-only ideas." },
                { lead: "Ready for scale", text: "Designed with real operational load in mind." },
              ],
            },
          ],
        },
      ],
    },
    team: {
      eyebrow: "The team creating the momentum",
      title: "A team that connects strategy, delivery, and product growth",
      text:
        "The center of the site should feel like a strong team with trust, clear ownership, and visible influence, not just a list of roles.",
      leaderLabel: "Core leadership",
      leader: {
        name: "Oleksandr Voinalovych",
        role: "R&D Director",
        focus: "Innovation and Project Management Department",
        skills: ["Strategy", "Products", "Growth", "Systems thinking"],
      },
      roles: [
        {
          title: "Oleksandr Cherednyk",
          direction: "Head of Research and Development",
          text: "",
          members: [
            { name: "Beshliaha Serhii", role: "Developer" },
            { name: "Daliuk Anna", role: "Project Manager" },
            { name: "Popov Ivan", role: "Developer" },
            { name: "Perekhrest Liudmyla", role: "Analyst" },
            { name: "Chypenko Olena", role: "Product Owner" },
          ],
        },
        {
          title: "Iryna Borodai",
          direction: "Head of Business Analysis",
          text: "",
          members: [
            { name: "Panov Dmytro", role: "Business Analyst" },
            { name: "Mahlovana Mariia", role: "Analyst" },
            { name: "Palamarchuk Oleksandra", role: "EDI Specialist" },
          ],
        },
        {
          title: "Yevheniia Kucherenko",
          direction: "Head of Project and Process Management Office",
          text: "",
          branches: [
            {
              label: "Project Management Office",
              members: [
                { name: "Nikonova Anastasiia", role: "Project Office Administrator" },
                { name: "Horbunov Viktor", role: "Project Manager" },
                { name: "Kustreiuk Oleksandr", role: "Head of Digital Document Management Program" },
                { name: "Kutniak Yuliia", role: "Project Manager" },
                { name: "Adamov Volodymyr", role: "Project Manager" },
                { name: "Kosheliev Illia", role: "Project Manager" },
              ],
            },
            {
              label: "Process Management Office",
	              members: [
	                { name: "Bozhko Olha", role: "Process Architect" },
	                { name: "Pidopryhora Yuliia", role: "Process Manager" },
	                { name: "Matiitsov Rostyslav", role: "Process Analyst" },
	                { name: "Diabina Maryna", role: "Process Analyst" },
	                { name: "Kovalenko Oleksandra", role: "Process Analyst" },
	                { name: "Voronin Stanislav", role: "Process Analyst" },
	              ],
            },
          ],
        },
        {
          title: "Oleksandr Sabaniuk",
          direction: "Head of AVRORA AI Lab",
          text: "",
          members: [
            { name: "Bozhenko Eduard", role: "Operations Manager" },
            { name: "Krakovych Boryslav", role: "AI Solutions Developer" },
            { name: "Medar Kyrylo", role: "AI Solutions Developer, Intern" },
            { name: "Mandryk Sofiia", role: "Information Technology Specialist, Intern" },
            { name: "Lukashenko Polina", role: "Information Technology Specialist, Intern" },
            { name: "Shopska Anastasiia", role: "Information Technology Specialist, Intern" },
            { name: "Onopriienko Daryna", role: "Information Technology Specialist, Intern" },
          ],
        },
        {
          title: "Alona Mytrofanova",
          direction: "Deputy Department Director for Product Development",
          text: "",
          featured: true,
        },
      ],
    },
    impact: {
      eyebrow: "Story and scale",
      title: "From department launch to Avrora's internal technology brand",
      text:
        "This is more than a timeline. It is the path from initiative team to product core that influences the company every day.",
      metrics: [
        { value: "2019", label: "R&D team active since 2019" },
        { value: "12+", label: "products in portfolio" },
        { value: "2 audiences", label: "employees and customers" },
      ],
      timeline: [
        {
          year: "August 2019",
          title: "R&D team active since 2019",
          text: "A dedicated team takes responsibility for the company's product and innovation trajectory.",
        },
        {
          year: "2021",
          title: "First scalable solutions",
          text: "Products appear that go beyond local tasks and begin to influence daily work for many people.",
        },
        {
          year: "2023",
          title: "Portfolio and system thinking",
          text: "The team moves from isolated initiatives to a coherent product architecture.",
        },
        {
          year: "2025",
          title: "Visible scale",
          text: "Products become part of Avrora's broader service and operational experience.",
        },
      ],
    },
    community: {
      eyebrow: "Public presence and community",
      title: "Expertise that is visible beyond the company itself",
      text:
        "Talks, industry events, and the development of emerging talent position the department as a visible Avrora voice in the professional community and in the space of future products.",
      events: [
        {
          title: "Forbes AI Summit, Lviv",
          text: "At Forbes AI Summit, Avrora showed that AI is not a future concept for us but part of today's retail operations. Oleksandr Voinalovych shared how GenAI and Computer Vision already work across stores and back office: AI assistants support teams, traffic analytics speeds up decisions, and automation reduces routine, improves accuracy, and elevates service.",
          meta: "Forbes Ukraine / 27.11.2025 / Oleksandr Voinalovych / GenAI + Computer Vision",
          href: "https://forbes.ua/innovations/shvidki-innovatsii-tse-batl-yak-vprovaditi-shi-bez-sprotivu-pratsivnikiv-i-zvidki-brati-idei-dlya-rozrobok-dosvid-avrora-nova-i-ukrsibbanku-16122025-34864",
          linkLabel: "Open Forbes and watch the panel",
        },
        {
          title: "Retail Expo 2025",
          text: "At RETAIL EXPO 2025, we spoke about how Avrora is reshaping retail through technology and human-centered service. Our R&D director Oleksandr Voinalovych presented how we integrate artificial intelligence into daily work: customer assistants help people quickly find what they need, AI supports employees in complex situations, and traffic analytics helps plan staffing better and improve the shopper experience. In parallel, HR director Olha Pravda joined a key discussion on responsible retail and shared how we build a safe environment, support the psychological resilience of teams, and adapt HR initiatives to different roles across the company. The focus was on care for people, empathetic communication, preserving a coherent corporate culture even in times of crisis, and inclusivity in retail, from accessible spaces to service experiences that consider everyone’s needs. We are building a retail model where technology strengthens people and values shape the experience for teams, customers, and society.",
          meta: "Retail Expo 2025 / Oleksandr Voinalovych / AI + human-centered retail",
        },
        {
          title: "RAU Workshop",
          text: "Retail Association of Ukraine platform, September 11, 2025, Kyiv Hall. Oleksandr Voinalovych was among the speakers discussing the digital transformation of physical stores and operational retail change.",
          meta: "Retail Association of Ukraine / 11.09.2025 / Kyiv Hall / Oleksandr Voinalovych",
          href: "https://rau.ua/news/rau-workshop-2/",
          linkLabel: "Open RAU photo report",
        },
        {
          title: "Students in the R&D team",
          text: "Avrora R&D currently includes 4 students through this program. They are involved not in training simulations but in real product and research work that helps shape the team's future strength.",
          meta: "Avrora R&D / 4 students / real product practice",
          href: "https://www.facebook.com/voinalovych.o/posts/25173397178933144/",
          linkLabel: "Open the program story",
        },
      ],
    },
    contact: {
      eyebrow: "Contacts",
      title: "Let's start a conversation about products, service, and scale",
      text: "A direct channel for product inquiries, partnerships, pilots, and team communication.",
      cards: [
        {
          label: "Phone",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "main contact",
        },
        {
          label: "Email",
          value: "products@avrora.ua",
          href: "mailto:products@avrora.ua",
          hint: "product inquiries",
        },
        {
          label: "Email",
          value: "partners@avrora.ua",
          href: "mailto:partners@avrora.ua",
          hint: "partnerships & pilots",
        },
        {
          label: "Email",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "team and media",
        },
      ],
    },
  },
};

const communityImages = [
  communityForbesImage,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258152597.jpg", import.meta.url).href,
  new URL("./assets/RAUWorkshop2025/m81a9652.jpg", import.meta.url).href,
  communityStudentsImage,
];
const retailExpoGallery = [
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258152597.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774257599556.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774257607634.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258384961.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258040755.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258047836.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774257433331.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258379808.jpg", import.meta.url).href,
  new URL("./assets/RETAILEXPO2025/FB_IMG_1774258157051.jpg", import.meta.url).href,
];
const rauWorkshopGallery = [
  new URL("./assets/RAUWorkshop2025/m81a9652.jpg", import.meta.url).href,
  new URL("./assets/RAUWorkshop2025/m81a9531.jpg", import.meta.url).href,
  new URL("./assets/RAUWorkshop2025/m81a9760.jpg", import.meta.url).href,
  new URL("./assets/RAUWorkshop2025/m81a9765-1.jpg", import.meta.url).href,
];
const communityGalleries = [
  [communityForbesImage],
  retailExpoGallery,
  rauWorkshopGallery,
  [communityStudentsImage],
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const getTeamRolePortrait = (title: string) => {
  if (title.includes("Чередник") || title.includes("Cherednyk")) {
    return {
      photo: cherednykPhoto,
      position: "center 20%",
      scale: 1.08,
    };
  }

  if (title.includes("Сабанюк") || title.includes("Sabaniuk")) {
    return {
      photo: sabaniukPhoto,
      position: "center 18%",
      scale: 1.06,
    };
  }

  if (title.includes("Бородай") || title.includes("Borodai")) {
    return {
      photo: borodaiPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  if (title.includes("Митрофанова") || title.includes("Mytrofanova")) {
    return {
      photo: mytrofanovaPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  if (title.includes("Кучеренко") || title.includes("Kucherenko")) {
    return {
      photo: kucherenkoPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  return null;
};

const getTeamMemberPortrait = (name: string) => {
  if (name.includes("Адамов") || name.includes("Adamov")) {
    return {
      photo: adamovPhoto,
      position: "center 18%",
      scale: 1.18,
    };
  }

  if (name.includes("Горбунов") || name.includes("Horbunov")) {
    return {
      photo: horbunovPhoto,
      position: "center 18%",
      scale: 1.12,
    };
  }

  if (name.includes("Далюк") || name.includes("Daliuk")) {
    return {
      photo: daliukPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  if (name.includes("Бешляга") || name.includes("Beshliaha")) {
    return {
      photo: beshliahaPhoto,
      position: "center 18%",
      scale: 1.1,
    };
  }

  if (name.includes("Чипенко") || name.includes("Chipenko")) {
    return {
      photo: chipenkoPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Кошелєв") || name.includes("Kosheliev")) {
    return {
      photo: koshelievPhoto,
      position: "center 18%",
      scale: 1.16,
    };
  }

  if (name.includes("Кустреюк") || name.includes("Kustreiuk")) {
    return {
      photo: kustreiukPhoto,
      position: "center 18%",
      scale: 1.14,
    };
  }

  if (name.includes("Кутняк") || name.includes("Kutniak")) {
    return {
      photo: kutniakPhoto,
      position: "center 16%",
      scale: 1.1,
    };
  }

  if (name.includes("Коваленко") || name.includes("Kovalenko")) {
    return {
      photo: kovalenkoPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Матійцов") || name.includes("Matiitsov")) {
    return {
      photo: matiitsovPhoto,
      position: "center 16%",
      scale: 1.1,
    };
  }

  if (name.includes("Дябіна") || name.includes("Diabina")) {
    return {
      photo: diabinaPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Божко") || name.includes("Bozhko")) {
    return {
      photo: bozhkoPhoto,
      position: "center 14%",
      scale: 1.08,
    };
  }

  if (name.includes("Боженко") || name.includes("Bozhenko")) {
    return {
      photo: bozhenkoPhoto,
      position: "center 14%",
      scale: 1.08,
    };
  }

  if (name.includes("Паламарчук") || name.includes("Palamarchuk")) {
    return {
      photo: palamarchukPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  if (name.includes("Магльована") || name.includes("Mahlovana")) {
    return {
      photo: mahlovanaPhoto,
      position: "center 18%",
      scale: 1.08,
    };
  }

  if (name.includes("Мандрик") || name.includes("Mandryk")) {
    return {
      photo: mandrykPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Лукашенко") || name.includes("Lukashenko")) {
    return {
      photo: lukashenkoPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Ніконова") || name.includes("Nikonova")) {
    return {
      photo: nikonovaPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Перехрест") || name.includes("Perekhrest")) {
    return {
      photo: perekhrestPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Підопригора") || name.includes("Pidopryhora")) {
    return {
      photo: pidopryhoraPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Шопська") || name.includes("Shopska")) {
    return {
      photo: shopskaPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Онопрієнко") || name.includes("Onopriienko")) {
    return {
      photo: onopriienkoPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Кракович") || name.includes("Krakovych")) {
    return {
      photo: krakovychPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Медар") || name.includes("Medar")) {
    return {
      photo: medarPhoto,
      position: "center 14%",
      scale: 1.1,
    };
  }

  if (name.includes("Панов") || name.includes("Panov")) {
    return {
      photo: panovPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Попов") || name.includes("Popov")) {
    return {
      photo: popovPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  if (name.includes("Воронін") || name.includes("Voronin")) {
    return {
      photo: voroninPhoto,
      position: "center 16%",
      scale: 1.08,
    };
  }

  return null;
};

const getConsultingPanelVisual = (index: number, theme: ThemeMode) => {
  switch (index) {
    case 0:
      return {
        src: theme === "day" ? consultingTrainingVisualDay : consultingTrainingVisual,
        alt: "Навчання та розвиток компетенцій",
        position: "center 26%",
      };
    case 1:
      return {
        src: theme === "day" ? consultingStrategyVisualDay : consultingStrategyVisual,
        alt: "Консалтинг, стратегія та тактика",
        position: "center 30%",
      };
    default:
      return {
        src: theme === "day" ? consultingProcessVisualDay : consultingProcessVisual,
        alt: "Оптимізація процесів та автоматизація",
        position: "center 28%",
      };
  }
};

const getProjectScene = (category: string) => {
  switch (category) {
    case "retail analytics":
      return {
        theme: "analytics",
        eyebrow: "signal map",
        chips: ["traffic", "conversion", "retail"],
      };
    case "logistics access control":
      return {
        theme: "logistics",
        eyebrow: "access flow",
        chips: ["plates", "gates", "routing"],
      };
    case "energy resilience":
      return {
        theme: "energy",
        eyebrow: "resilience control",
        chips: ["status", "map", "uptime"],
      };
    case "ai orchestration platform":
      return {
        theme: "platform",
        eyebrow: "ai orchestration",
        chips: ["assistants", "agents", "roles"],
      };
    case "genai knowledge assistant":
      return {
        theme: "wiki",
        eyebrow: "knowledge flow",
        chips: ["genai", "visual answers", "ops"],
      };
    case "internal hr ai platform":
      return {
        theme: "recruiting",
        eyebrow: "internal advantage",
        chips: ["screening", "comms", "talent"],
      };
    default:
      return {
        theme: "platform",
        eyebrow: "product system",
        chips: ["aurora", "product", "scale"],
      };
  }
};

const renderProjectScene = (
  scene: ReturnType<typeof getProjectScene>,
  project: LocaleContent["projects"]["items"][number],
  theme: ThemeMode,
  language: Language
) => {
  const internalAccessLabel = language === "ua" ? "для співробітників департаменту" : "for department employees";

  if (project.category === "retail analytics") {
    return (
      <div className="project-scene-media project-scene-media-analytics">
        <img
          src={theme === "day" ? conversionTrackingVisualDay : conversionTrackingVisualNight}
          alt={project.title}
          className="project-scene-media-image"
        />
      </div>
    );
  }

  if (project.category === "logistics access control") {
    return (
      <div className="project-scene-media project-scene-media-logistics">
        <img
          src={theme === "day" ? vehicleDetectionVisualDay : vehicleDetectionVisual}
          alt={project.title}
          className="project-scene-media-image"
        />
      </div>
    );
  }

  if (project.category === "energy resilience") {
    return (
      <div className="project-scene-media project-scene-media-energy">
        <img
          src={theme === "day" ? generatorControlVisualDay : generatorControlVisual}
          alt={project.title}
          className="project-scene-media-image"
        />
      </div>
    );
  }

  if (project.category === "ai orchestration platform") {
    return (
      <div className="project-scene-media project-scene-media-platform">
        <img
          src={theme === "day" ? auroraAiPlatformVisualDay : auroraAiPlatformVisual}
          alt={project.title}
          className="project-scene-media-image"
        />
      </div>
    );
  }

  if (project.category === "genai knowledge assistant") {
    return (
      <div className="project-scene-media project-scene-media-wiki">
        <img
          src={theme === "day" ? smartWikiVisualDay : smartWikiVisual}
          alt={project.title}
          className="project-scene-media-image"
        />
      </div>
    );
  }

  const shared = (
    <>
      <div className="project-scene-grid" />
      <div className="project-scene-aura" />
      <div className="project-scene-panel project-scene-panel-main">
        <span>{scene.eyebrow}</span>
        <strong>{project.title}</strong>
      </div>
      <div className="project-scene-panel project-scene-panel-side">
        <span>{project.metricLabel}</span>
        <strong>{project.metric}</strong>
      </div>
      <div className="project-scene-chips">
        {scene.chips.map((chip) => (
          <span key={`${project.title}-${chip}`}>{chip}</span>
        ))}
      </div>
    </>
  );

  switch (scene.theme) {
    case "analytics":
      return (
        <>
          {shared}
          <div className="project-illustration project-illustration-analytics">
            <div className="scene-camera" />
            <div className="scene-camera-beam" />
            <div className="scene-storefront">
              <div className="scene-storefront-sign" />
              <div className="scene-storefront-door" />
              <div className="scene-storefront-window scene-storefront-window-one" />
              <div className="scene-storefront-window scene-storefront-window-two" />
            </div>
            <div className="scene-walkway" />
            <div className="scene-person scene-person-one" />
            <div className="scene-person scene-person-two is-entering" />
            <div className="scene-person scene-person-three" />
            <div className="scene-person scene-person-four" />
            <div className="scene-conversion-arc" />
            <div className="scene-conversion-funnel">
              <span />
              <span />
              <span />
            </div>
          </div>
        </>
      );
    case "logistics":
      return (
        <>
          {shared}
          <div className="project-illustration project-illustration-logistics">
            <div className="scene-lane scene-lane-one" />
            <div className="scene-lane scene-lane-two" />
            <div className="scene-gate" />
            <div className="scene-barrier" />
            <div className="scene-truck scene-truck-one" />
            <div className="scene-truck scene-truck-two" />
            <div className="scene-plate-chip scene-plate-chip-one">AA 2481</div>
            <div className="scene-plate-chip scene-plate-chip-two">BX 9034</div>
            <div className="scene-route-node scene-route-node-one" />
            <div className="scene-route-node scene-route-node-two" />
          </div>
        </>
      );
    case "energy":
      return (
        <>
          {shared}
          <div className="project-illustration project-illustration-energy">
            <div className="scene-map-grid" />
            <div className="scene-map-line scene-map-line-one" />
            <div className="scene-map-line scene-map-line-two" />
            <div className="scene-map-point scene-map-point-one is-green" />
            <div className="scene-map-point scene-map-point-two is-green" />
            <div className="scene-map-point scene-map-point-three is-red" />
            <div className="scene-map-point scene-map-point-four is-green" />
            <div className="scene-generator-card">
              <i />
              <i />
              <i />
            </div>
          </div>
        </>
      );
    case "platform":
      return (
        <>
          {shared}
          <div className="project-illustration project-illustration-platform">
            <div className="scene-hub" />
            <div className="scene-hub-ring" />
            <div className="scene-hub-node scene-hub-node-one" />
            <div className="scene-hub-node scene-hub-node-two" />
            <div className="scene-hub-node scene-hub-node-three" />
            <div className="scene-hub-node scene-hub-node-four" />
            <div className="scene-hub-link scene-hub-link-one" />
            <div className="scene-hub-link scene-hub-link-two" />
            <div className="scene-hub-link scene-hub-link-three" />
            <div className="scene-hub-link scene-hub-link-four" />
          </div>
        </>
      );
    case "wiki":
      return (
        <>
          {shared}
          <div className="project-illustration project-illustration-wiki">
            <div className="scene-chat-bubble scene-chat-bubble-question" />
            <div className="scene-chat-bubble scene-chat-bubble-answer" />
            <div className="scene-visual-card scene-visual-card-one" />
            <div className="scene-visual-card scene-visual-card-two" />
            <div className="scene-visual-card scene-visual-card-three" />
          </div>
        </>
      );
    case "recruiting":
    return (
      <>
        {shared}
        <div className="project-illustration project-illustration-recruiting">
          <div className="scene-talent-card scene-talent-card-one" />
          <div className="scene-talent-card scene-talent-card-two" />
          <div className="scene-talent-card scene-talent-card-three" />
          <div className="scene-talent-score scene-talent-score-one">92</div>
          <div className="scene-talent-score scene-talent-score-two">88</div>
          <div className="scene-talent-score scene-talent-score-three">81</div>
          <div className="scene-lock-chip" title={internalAccessLabel} aria-label={internalAccessLabel}>🔒</div>
        </div>
      </>
    );
    default:
      return shared;
  }
};

function App() {
  const [language, setLanguage] = useState<Language>("ua");
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "night";
    const storedTheme = window.localStorage.getItem("aurora-department-theme");
    return storedTheme === "day" || storedTheme === "night" ? storedTheme : "night";
  });
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (typeof window === "undefined") return "public";
    const storedUser = window.sessionStorage.getItem("aurora-internal-user");
    const storedView = window.sessionStorage.getItem("aurora-department-view");
    return storedUser && storedView === "internal" ? "internal" : "public";
  });
  const [internalUser, setInternalUser] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return window.sessionStorage.getItem("aurora-internal-user");
  });
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authLogin, setAuthLogin] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightbox, setLightbox] = useState<{
    items: LightboxItem[];
    index: number;
    variant?: "default" | "portrait";
  } | null>(null);
  const [communitySlides, setCommunitySlides] = useState<Record<string, number>>({});
  const t = content[language];
  const marketShowcaseOrder = [2, 0, 1];
  const featuredTeamRole = t.team.roles.find((role) => role.featured);
  const primaryTeamRoles = t.team.roles.filter((role) => !role.featured);
  const isInternalAuthenticated = Boolean(internalUser);
  const internalUi =
    language === "ua"
      ? {
          history: "Історія департаменту",
          internalEntry: "Внутрішній розділ",
          internalHint: "Схований розділ департаменту",
          loginTitle: "Вхід у внутрішній розділ",
          loginText: "Тимчасовий локальний доступ для співробітників департаменту.",
          loginField: "Логін",
          passwordField: "Пароль",
          cancel: "Скасувати",
          enter: "Увійти",
          wrongCredentials: "Невірний логін або пароль.",
          backToSite: "Повернутись на сайт",
          logout: "Вийти",
          internalEyebrow: "Внутрішній простір AR&D",
          internalTitle: "Команда та історія департаменту в окремому захищеному розділі",
          internalText:
            "Тут зібрано внутрішню структуру команди, фокус ролей і хронологію розвитку департаменту в одному закритому просторі.",
          signedInAs: "Доступ відкрито для",
          lockTooltip: "Відкрити внутрішній розділ",
        }
      : {
          history: "Department history",
          internalEntry: "Internal space",
          internalHint: "Hidden department section",
          loginTitle: "Internal access",
          loginText: "Temporary local access for department members.",
          loginField: "Login",
          passwordField: "Password",
          cancel: "Cancel",
          enter: "Enter",
          wrongCredentials: "Wrong login or password.",
          backToSite: "Back to public site",
          logout: "Log out",
          internalEyebrow: "AR&D internal space",
          internalTitle: "Team and department history in a dedicated protected view",
          internalText:
            "This space brings together the internal team structure, role ownership, and the department timeline in one restricted view.",
          signedInAs: "Access granted for",
          lockTooltip: "Open internal section",
        };

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("aurora-department-theme", theme);

    return () => {
      delete document.body.dataset.theme;
      delete document.documentElement.dataset.theme;
    };
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (internalUser) {
      window.sessionStorage.setItem("aurora-internal-user", internalUser);
    } else {
      window.sessionStorage.removeItem("aurora-internal-user");
    }

    window.sessionStorage.setItem(
      "aurora-department-view",
      currentView === "internal" && internalUser ? "internal" : "public"
    );
  }, [currentView, internalUser]);

  useEffect(() => {
    if (!isInternalAuthenticated && currentView === "internal") {
      setCurrentView("public");
    }
  }, [currentView, isInternalAuthenticated]);

  useEffect(() => {
    const syncBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 720);
    };

    syncBackToTopVisibility();
    window.addEventListener("scroll", syncBackToTopVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncBackToTopVisibility);
    };
  }, []);

  const openGallery = (
    title: string,
    entries: Array<string | LightboxItem>,
    index = 0,
    options?: { variant?: "default" | "portrait" }
  ) => {
    const items = entries.map((entry) =>
      typeof entry === "string"
        ? { src: entry, title }
        : entry
    );

    setLightbox({ items, index, variant: options?.variant ?? "default" });
  };

  const openTeamMemberGallery = (members: TeamMember[], activeName: string) => {
    const items = members.flatMap((member) => {
      const portrait = getTeamMemberPortrait(member.name);
      if (!portrait) return [];

      return [
        {
          src: portrait.photo,
          title: member.name,
          subtitle: member.role,
        },
      ];
    });

    if (!items.length) return;

    const activeIndex = items.findIndex((item) => item.title === activeName);
    openGallery(activeName, items, activeIndex >= 0 ? activeIndex : 0, { variant: "portrait" });
  };

  const moveCommunitySlide = (title: string, images: string[], direction: number) => {
    setCommunitySlides((current) => {
      const currentIndex = current[title] ?? 0;
      const nextIndex = (currentIndex + direction + images.length) % images.length;
      return { ...current, [title]: nextIndex };
    });
  };

  const moveGallery = (direction: number) => {
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex = (current.index + direction + current.items.length) % current.items.length;
      return { ...current, index: nextIndex };
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPublicView = () => {
    setCurrentView("public");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openInternalEntry = () => {
    if (isInternalAuthenticated) {
      setCurrentView("internal");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setAuthError("");
    setAuthPassword("");
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setAuthError("");
    setAuthPassword("");
  };

  const submitInternalAccess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const account = internalAccounts.find(
      (entry) => entry.login === authLogin.trim() && entry.password === authPassword
    );

    if (!account) {
      setAuthError(internalUi.wrongCredentials);
      return;
    }

    setInternalUser(account.login);
    setShowAuthModal(false);
    setAuthError("");
    setAuthPassword("");
    setCurrentView("internal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoutInternalAccess = () => {
    setInternalUser(null);
    setCurrentView("public");
    setShowAuthModal(false);
    setAuthPassword("");
    setAuthLogin("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTeamSection = (sectionId: string) => (
    <section className="section section-dark team-section" id={sectionId}>
      <div className="section-heading section-heading-wide">
        <p className="eyebrow">{t.team.eyebrow}</p>
        <h2>{t.team.title}</h2>
        <p>{t.team.text}</p>
      </div>

      <div className="team-layout">
        <div className="team-topline">
          <article className="leader-card">
            <div className="leader-media">
              <button
                type="button"
                className="leader-photo-frame leader-photo-button"
                onClick={() => openGallery(t.team.leader.name, [voinalovychPhoto], 0, { variant: "portrait" })}
                aria-label={`${t.team.leader.name}: ${language === "ua" ? "відкрити фото" : "open photo"}`}
              >
                <img src={voinalovychPhoto} alt={t.team.leader.name} className="leader-photo" />
              </button>
            </div>
            <div className="leader-copy">
              <h3>{t.team.leader.name}</h3>
              <p className="team-role">{t.team.leader.role}</p>
              <p className="team-focus">{t.team.leader.focus}</p>
              <div className="leader-skills">
                {t.team.leader.skills.map((skill) => (
                  <span className="team-skills" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>

          {featuredTeamRole ? (
            (() => {
              const portrait = getTeamRolePortrait(featuredTeamRole.title);

              return (
            <article className="role-card role-card-featured role-card-solo">
              <div className="role-card-head">
                <div className={`role-avatar${portrait ? " role-avatar-photo" : ""}`} aria-hidden="true">
                  {portrait ? (
                    <button
                      type="button"
                      className="role-avatar-button"
                      onClick={() => openGallery(featuredTeamRole.title, [portrait.photo], 0, { variant: "portrait" })}
                      aria-label={`${featuredTeamRole.title}: ${language === "ua" ? "відкрити фото" : "open photo"}`}
                    >
                    <img
                      className="role-avatar-image role-avatar-image-single"
                      src={portrait.photo}
                      alt=""
                      style={{
                        objectPosition: portrait.position,
                        transform: `scale(${portrait.scale})`,
                      }}
                    />
                    </button>
                  ) : (
                    <span>{getInitials(featuredTeamRole.title)}</span>
                  )}
                </div>
                <div className="role-copy">
                  <h3>{featuredTeamRole.title}</h3>
                  <p className="role-position">{featuredTeamRole.direction}</p>
                  {featuredTeamRole.text ? <p>{featuredTeamRole.text}</p> : null}
                </div>
              </div>
            </article>
              );
            })()
          ) : null}
        </div>

        <div className="role-grid">
          {primaryTeamRoles.map((role) => {
            const portrait = getTeamRolePortrait(role.title);

            return (
            <article
              className={`role-card${role.members?.length || role.branches?.length ? " role-card-team" : " role-card-solo"}${role.branches?.length ? " role-card-branches role-card-wide" : ""}${role.title.includes("Сабанюк") || role.title.includes("Sabaniuk") ? " role-card-ai-lab" : ""}`}
              key={role.title}
            >
              <div className="role-card-head">
                <div className={`role-avatar${portrait ? " role-avatar-photo" : ""}`} aria-hidden="true">
                  {portrait ? (
                    <button
                      type="button"
                      className="role-avatar-button"
                      onClick={() => openGallery(role.title, [portrait.photo], 0, { variant: "portrait" })}
                      aria-label={`${role.title}: ${language === "ua" ? "відкрити фото" : "open photo"}`}
                    >
                      <img
                        className="role-avatar-image role-avatar-image-single"
                        src={portrait.photo}
                        alt=""
                        style={{
                          objectPosition: portrait.position,
                          transform: `scale(${portrait.scale})`,
                        }}
                      />
                    </button>
                  ) : (
                    <span>{getInitials(role.title)}</span>
                  )}
                </div>
                <div className="role-copy">
                  <h3>{role.title}</h3>
                  <p className="role-position">{role.direction}</p>
                  {role.text ? <p>{role.text}</p> : null}
                </div>
              </div>

              {role.members?.length ? (
                <div className="role-members">
                  {role.members.map((member) => {
                    const memberPortrait = getTeamMemberPortrait(member.name);

                    return (
                    <div className="role-member" key={`${role.title}-${member.name}`}>
                      <div className={`role-member-avatar${memberPortrait ? " role-member-avatar-photo" : ""}`} aria-hidden="true">
                        {memberPortrait ? (
                          <button
                            type="button"
                            className="role-member-avatar-button"
                            onClick={() => openTeamMemberGallery(role.members ?? [], member.name)}
                            aria-label={`${member.name}: ${language === "ua" ? "відкрити фото" : "open photo"}`}
                          >
                          <img
                            className="role-member-avatar-image"
                            src={memberPortrait.photo}
                            alt=""
                            style={{
                              objectPosition: memberPortrait.position,
                              transform: `scale(${memberPortrait.scale})`,
                            }}
                          />
                          </button>
                        ) : (
                        <span>{getInitials(member.name)}</span>
                        )}
                      </div>
                      <div className="role-member-copy">
                        <strong>{member.name}</strong>
                        <span>{member.role}</span>
                        {member.note ? <em>{member.note}</em> : null}
                      </div>
                    </div>
                    );
                  })}
                </div>
              ) : null}

              {role.branches?.length ? (
                <div className="role-branches">
                  {role.branches.map((branch) => (
                    <section className="role-branch" key={`${role.title}-${branch.label}`}>
                      <h4>{branch.label}</h4>
                      <div className="role-members">
                        {branch.members.map((member) => {
                          const memberPortrait = getTeamMemberPortrait(member.name);

                          return (
                          <div className="role-member" key={`${role.title}-${branch.label}-${member.name}`}>
                            <div className={`role-member-avatar${memberPortrait ? " role-member-avatar-photo" : ""}`} aria-hidden="true">
                              {memberPortrait ? (
                                <button
                                  type="button"
                                  className="role-member-avatar-button"
                                  onClick={() => openTeamMemberGallery(branch.members, member.name)}
                                  aria-label={`${member.name}: ${language === "ua" ? "відкрити фото" : "open photo"}`}
                                >
                                <img
                                  className="role-member-avatar-image"
                                  src={memberPortrait.photo}
                                  alt=""
                                  style={{
                                    objectPosition: memberPortrait.position,
                                    transform: `scale(${memberPortrait.scale})`,
                                  }}
                                />
                                </button>
                              ) : (
                              <span>{getInitials(member.name)}</span>
                              )}
                            </div>
                            <div className="role-member-copy">
                              <strong>{member.name}</strong>
                              <span>{member.role}</span>
                              {member.note ? <em>{member.note}</em> : null}
                            </div>
                          </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              ) : null}
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );

  const renderImpactSection = (sectionId: string) => (
    <section className="section impact-section section-signal-shell" id={sectionId}>
      <div className="section-heading section-heading-wide">
        <p className="eyebrow eyebrow-dark">{t.impact.eyebrow}</p>
        <h2 className="impact-heading-title">{t.impact.title}</h2>
        <p>{t.impact.text}</p>
      </div>

      <div className="impact-grid">
        <div className="impact-metrics">
          {t.impact.metrics.map((metric) => (
            <article className="numbers-card impact-metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>

        <div className="timeline-editorial">
          {t.impact.timeline.map((item) => (
            <article className="timeline-card" key={`${item.year}-${item.title}`}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="page-shell" data-theme={theme}>
      <header className="topbar">
        <div className="brandmarks">
          <a
            href={currentView === "internal" ? "#internal-top" : "#hero"}
            className="brandmark brandmark-aurora"
            aria-label={language === "ua" ? "Аврора" : "Avrora"}
          >
            <img
              src={theme === "day" ? auroraLogoDay : auroraLogo}
              alt={language === "ua" ? "Аврора" : "Avrora"}
              className="brandmark-aurora-image"
            />
          </a>

          <a href={currentView === "internal" ? "#internal-top" : "#hero"} className="brandmark brandmark-department">
            <img src={theme === "day" ? logoDay : logo} alt="AR&D" className="brandmark-dept-logo" />
          </a>
        </div>

        <div className="topbar-actions">
          <nav className="nav">
            {currentView === "internal" ? (
              <>
                <a href="#internal-team">{t.nav.team}</a>
                <a href="#internal-history">{internalUi.history}</a>
              </>
            ) : (
              <>
                <a href="#projects">{t.nav.projects}</a>
                <a href="#consulting">{t.nav.consulting}</a>
                <a href="#build">{t.nav.build}</a>
                <a href="#community">{t.nav.community}</a>
                <a href="#contact">{t.nav.contact}</a>
              </>
            )}
          </nav>

          {currentView === "internal" ? (
            <button type="button" className="topbar-cta" onClick={goToPublicView}>
              {internalUi.backToSite}
            </button>
          ) : (
            <a href="#contact" className="topbar-cta">
              {t.hero.secondary}
            </a>
          )}

          <div className="theme-switch" aria-label={t.header.theme}>
            <button
              type="button"
              aria-label={t.header.night}
              className={theme === "night" ? "theme-chip theme-chip-night is-active" : "theme-chip theme-chip-night"}
              onClick={() => setTheme("night")}
            >
              <span className="theme-chip-icon theme-chip-icon-moon" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={t.header.day}
              className={theme === "day" ? "theme-chip theme-chip-day is-active" : "theme-chip theme-chip-day"}
              onClick={() => setTheme("day")}
            >
              <span className="theme-chip-icon theme-chip-icon-sun" aria-hidden="true" />
            </button>
          </div>

          <div className="language-switch" aria-label={t.header.language}>
            <button
              type="button"
              className={language === "ua" ? "language-chip is-active" : "language-chip"}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
            <button
              type="button"
              className={language === "en" ? "language-chip is-active" : "language-chip"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        {currentView === "public" ? (
          <>
        <section className="hero editorial-surface" id="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              {t.hero.text ? <p className="hero-text">{t.hero.text}</p> : null}

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">{t.hero.primary}</a>
                <a href="#contact" className="button button-secondary">{t.hero.secondary}</a>
              </div>
            </div>

            <div className="hero-visual-stage">
              <div className="hero-visual-frame hero-visual-frame-premium">
                <div className="growth-engine expo-engine hero-live-engine" aria-hidden="true">
                  <div className="growth-engine-grid" />
                  <div className="growth-engine-aura" />
                  <HeroSignatureVisual hero={t.hero} theme={theme} />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-ledger">
            {t.hero.signals.map((signal) => (
              <article className="hero-ledger-item" key={`${signal.label}-${signal.value}`}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </article>
            ))}
          </div>

          <div className="numbers-band" id="numbers">
            <div className="numbers-heading">
              <span>{t.manifesto.numbers.eyebrow}</span>
              <h3>{t.manifesto.numbers.title}</h3>
              <p>{t.manifesto.numbers.note}</p>
            </div>

            <div className="numbers-grid">
              {t.manifesto.numbers.items.map((item) => (
                <article className="numbers-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section market-section section-signal-shell" id="market">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.market.eyebrow}</p>
            <h2>{t.market.title}</h2>
            <p>{t.market.text}</p>
          </div>

          <div className="market-showcase-grid">
            {marketShowcaseOrder.map((offerIndex) => {
              const offer = t.market.offers[offerIndex];

              if (!offer) return null;

              return (
                <article className={`market-card market-card-visual market-card-theme-${offerIndex + 1}`} key={offer.title}>
                  <div className="market-card-head">
                    {renderMarketIcon(offerIndex, theme)}
                  </div>
                  <h3>{offer.title}</h3>
                  <p className="market-card-summary">{offer.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section projects-section section-signal-shell" id="projects">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
            <p>{t.projects.text}</p>
          </div>

            <div className="project-list">
              {t.projects.items.map((project, index) => (
                (() => {
                  const scene = getProjectScene(project.category);
                  const hasPlainVisual =
                    project.category === "retail analytics" ||
                    project.category === "logistics access control" ||
                    project.category === "energy resilience" ||
                    project.category === "ai orchestration platform" ||
                    project.category === "genai knowledge assistant";

                  return (
                    <article
                      className={`project-card project-card-editorial theme-${scene.theme}${index % 2 === 1 ? " is-reversed" : ""}${hasPlainVisual ? " is-plain-visual-card" : ""}`}
                      key={project.title}
                    >
                      {!hasPlainVisual ? (
                        <div className="project-card-topline">
                          <span>{`0${index + 1}`}</span>
                          <em>{project.categoryLabel}</em>
                        </div>
                      ) : null}

                      <div className="project-card-body">
                        <div className={`project-image-frame${hasPlainVisual ? " is-plain-visual" : ""}`}>
                          {!hasPlainVisual ? (
                            <div className="project-image-signal">
                              <span>{project.categoryLabel}</span>
                              <strong>{project.metric}</strong>
                            </div>
                          ) : null}
                          {project.availabilityLabel ? (
                            <div
                              className={`project-availability-chip is-${project.availabilityTone ?? "commercial"}${project.availabilityTone === "internal" ? " is-icon" : ""}`}
                              title={project.availabilityTone === "internal" ? (language === "ua" ? "для співробітників департаменту" : "for department employees") : undefined}
                              aria-label={project.availabilityTone === "internal" ? (language === "ua" ? "для співробітників департаменту" : "for department employees") : undefined}
                            >
                              {project.availabilityTone === "internal" ? "🔒" : project.availabilityLabel}
                            </div>
                          ) : null}
                          <div className={`project-scene is-${scene.theme}`}>
                          {renderProjectScene(scene, project, theme, language)}
                          </div>
                        </div>

                        <div className="project-content">
                          <h3>{project.title}</h3>

                          <p className="project-outcome">{project.outcome}</p>
                          <p className="project-description">{project.description}</p>
                          <p className="project-market">{project.market}</p>

                          <ul className="project-points">
                            {project.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>

                          <div className="metric-box">
                            <strong>{project.metric}</strong>
                            <span>{project.metricLabel}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })()
              ))}
            </div>
        </section>

        {t.market.offers.slice(0, 2).map((offer, index) => (
          <section
            className={`section market-followup-section section-signal-shell${index === 0 ? " is-consulting-theme" : " is-build-theme"}`}
            id={index === 0 ? "consulting" : "build"}
            key={`${offer.title}-followup`}
          >
            {index === 0 ? (
              <div className="market-consulting-stack">
                <div className="section-heading section-heading-wide market-consulting-heading">
                  <h2>{offer.detailTitle}</h2>
                  <p>{offer.detailText}</p>
                </div>

                <div className="market-panel-list">
                  {offer.panels.map((panel, panelIndex) => {
                    const visual = getConsultingPanelVisual(panelIndex, theme);

                    return (
                      <article
                        className={`market-panel-card market-panel-card-theme-${index + 1}${panelIndex % 2 === 1 ? " is-reversed" : ""}`}
                        key={`${offer.title}-${panel.title}-${panelIndex}`}
                      >
                        <div className="market-panel-media">
                          <img
                            src={visual.src}
                            alt={visual.alt}
                            className="market-panel-media-image"
                            style={{ objectPosition: visual.position }}
                          />
                        </div>

                        <div className="market-panel-content">
                          <h4>{panel.eyebrow}</h4>
                          <p className="market-panel-outcome">{panel.title}</p>
                          <ul className="market-card-list">
                            {panel.items.map((item) => (
                              <li key={`${panel.title}-${item.lead}`}>
                                <strong>{item.lead}</strong>
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="market-detail-section">
                <>
                  <div className="market-detail-intro market-detail-intro-visual">
                    <div className="market-detail-intro-copy">
                      <div className="market-detail-accent" />
                      <h3>{offer.detailTitle}</h3>
                      <p>{offer.detailText}</p>
                    </div>

                    <div className="market-detail-hero-media">
                      <img
                        src={theme === "day" ? turnkeyDevelopmentVisualDay : turnkeyDevelopmentVisual}
                        alt={offer.detailTitle}
                        className="market-detail-hero-image"
                      />
                    </div>
                  </div>

                    <div className="market-detail-grid">
                      {offer.panels.map((panel, panelIndex) => (
                        <article
                          className={`market-detail-card market-card-theme-${index + 1}`}
                          key={`${offer.title}-${panel.title}-${panelIndex}`}
                        >
                          <h4>{`${panel.eyebrow} ${panel.title}`}</h4>
                          <ul className="market-card-list">
                            {panel.items.map((item) => (
                              <li key={`${panel.title}-${item.lead}`}>
                                <strong>{item.lead}</strong>
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </>
              </div>
            )}
          </section>
        ))}

        <section className="section community-section section-signal-shell" id="community">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.community.eyebrow}</p>
            <h2>{t.community.title}</h2>
            <p>{t.community.text}</p>
          </div>

          <div className="community-list">
            {t.community.events.map((event, index) => {
              const hasGallery = communityGalleries[index].length > 1;

              return (
                <article
                  className={`community-card${event.href ? " community-card-featured" : ""}`}
                  key={event.title}
                >
                  <div className="community-media">
                    {hasGallery ? (
                      <div className="community-gallery-layout">
                        {(() => {
                          const currentSlide = communitySlides[event.title] ?? 0;
                          const gallery = communityGalleries[index];
                          const currentImage = gallery[currentSlide];
                          const previewImages = gallery.filter((_, galleryIndex) => galleryIndex !== currentSlide).slice(0, 3);
                          const remainingCount = Math.max(gallery.length - previewImages.length, 0);

                          return (
                            <>
                              <button
                                type="button"
                                className="community-gallery-main"
                                onClick={() => openGallery(event.title, gallery, currentSlide)}
                                aria-label={`${event.title}: відкрити головне фото`}
                              >
                                <img src={currentImage} alt={event.title} className="community-image" />
                              </button>
                              <button
                                type="button"
                                className="community-gallery-inline-nav"
                                onClick={() => moveCommunitySlide(event.title, gallery, 1)}
                                aria-label={`${event.title}: наступне фото`}
                              >
                                Next
                              </button>

                              <div className="community-gallery-strip">
                                {previewImages.map((image, galleryIndex) => (
                                  (() => {
                                    const actualIndex = gallery.findIndex((candidate) => candidate === image);

                                    return (
                                  <button
                                    type="button"
                                    className="community-gallery-thumb"
                                    key={`${event.title}-${actualIndex + 1}`}
                                    onClick={() => setCommunitySlides((current) => ({ ...current, [event.title]: actualIndex }))}
                                    aria-label={`${event.title}: показати фото ${actualIndex + 1}`}
                                  >
                                    <img src={image} alt={`${event.title} ${actualIndex + 1}`} className="community-image" />
                                  </button>
                                    );
                                  })()
                                ))}
                                {remainingCount > 0 ? (
                                  <button
                                    type="button"
                                    className="community-gallery-more"
                                    onClick={() => openGallery(event.title, gallery, currentSlide)}
                                    aria-label={`${event.title}: відкрити всі фото`}
                                  >
                                    <strong>+{remainingCount}</strong>
                                    <span>ще фото</span>
                                  </button>
                                ) : null}
                              </div>
                              <div className="community-gallery-footer">
                                <span className="community-meta">{event.meta}</span>
                                {event.href && event.linkLabel ? (
                                  <a
                                    className="community-link-label"
                                    href={event.href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {event.linkLabel}
                                  </a>
                                ) : null}
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      <img src={communityImages[index]} alt={event.title} className="community-image" />
                    )}
                  </div>
                    <div className="community-copy">
                      <span className="community-meta">{event.meta}</span>
                      <h3>{event.title}</h3>
                      <div className="community-copy-paragraphs">
                        {event.text
                          .split(/\n\s*\n/)
                          .map((paragraph) => paragraph.trim())
                          .filter(Boolean)
                          .map((paragraph, paragraphIndex) => (
                            <p key={`${event.title}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                          ))}
                      </div>
                      {event.href && event.linkLabel ? (
                        <a
                          className="community-link-label"
                        href={event.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {event.linkLabel}
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div className="section-heading contact-heading">
            <p className="eyebrow eyebrow-dark">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className="contact-grid">
            {t.contact.cards.map((card) => (
              <a href={card.href} className="contact-card" key={`${card.label}-${card.value}-${card.hint}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <em>{card.hint}</em>
              </a>
            ))}
          </div>
        </section>
          </>
        ) : (
          <>
            <section className="section internal-portal editorial-surface" id="internal-top">
              <div className="section-heading section-heading-wide internal-portal-heading">
                <p className="eyebrow">{internalUi.internalEyebrow}</p>
                <h2>{internalUi.internalTitle}</h2>
                <p>{internalUi.internalText}</p>
              </div>

              <div className="internal-portal-panel">
                <div className="internal-portal-card">
                  <span>{internalUi.signedInAs}</span>
                  <strong>{internalUser}</strong>
                  <p>{internalUi.internalHint}</p>
                </div>

                <div className="internal-portal-actions">
                  <button type="button" className="button button-secondary" onClick={goToPublicView}>
                    {internalUi.backToSite}
                  </button>
                  <button type="button" className="button button-primary" onClick={logoutInternalAccess}>
                    {internalUi.logout}
                  </button>
                </div>
              </div>
            </section>

            {renderTeamSection("internal-team")}
            {renderImpactSection("internal-history")}
          </>
        )}
      </main>

      {currentView === "public" ? (
        <button
          type="button"
          className={isInternalAuthenticated ? "internal-entry-button is-authorized" : "internal-entry-button"}
          onClick={openInternalEntry}
          aria-label={internalUi.lockTooltip}
          title={internalUi.lockTooltip}
        >
          <span className="internal-entry-button-icon" aria-hidden="true">🔒</span>
          <span className="internal-entry-button-copy">
            <strong>{internalUi.internalEntry}</strong>
            <span>{isInternalAuthenticated ? internalUser : internalUi.internalHint}</span>
          </span>
        </button>
      ) : null}

      <button
        type="button"
        className={showBackToTop ? "scroll-top-button is-visible" : "scroll-top-button"}
        onClick={scrollToTop}
        aria-label={language === "ua" ? "Повернутися на початок" : "Back to top"}
      >
        <span className="scroll-top-button-icon" aria-hidden="true">↑</span>
      </button>

      {showAuthModal ? (
        <div className="auth-modal-backdrop" role="dialog" aria-modal="true" aria-label={internalUi.loginTitle}>
          <form className="auth-modal-card" onSubmit={submitInternalAccess}>
            <div className="auth-modal-copy">
              <p className="eyebrow">{internalUi.internalEntry}</p>
              <h3>{internalUi.loginTitle}</h3>
              <p>{internalUi.loginText}</p>
            </div>

            <label className="auth-modal-field">
              <span>{internalUi.loginField}</span>
              <input
                type="text"
                value={authLogin}
                onChange={(event) => setAuthLogin(event.target.value)}
                autoComplete="username"
                autoFocus
              />
            </label>

            <label className="auth-modal-field">
              <span>{internalUi.passwordField}</span>
              <input
                type="password"
                value={authPassword}
                onChange={(event) => setAuthPassword(event.target.value)}
                autoComplete="current-password"
              />
            </label>

            {authError ? <p className="auth-modal-error">{authError}</p> : null}

            <div className="auth-modal-actions">
              <button type="button" className="button button-secondary" onClick={closeAuthModal}>
                {internalUi.cancel}
              </button>
              <button type="submit" className="button button-primary">
                {internalUi.enter}
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {lightbox ? (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.items[lightbox.index]?.title ?? "Lightbox"}
          onClick={() => setLightbox(null)}
        >
          <div className={`lightbox-shell${lightbox.variant === "portrait" ? " lightbox-shell-portrait" : ""}`} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Закрити перегляд"
            >
              Close
            </button>

            <div className={`lightbox-frame${lightbox.variant === "portrait" ? " lightbox-frame-portrait" : ""}`}>
              {lightbox.items.length > 1 ? (
              <button
                type="button"
                className="lightbox-nav lightbox-nav-prev"
                onClick={() => moveGallery(-1)}
                aria-label="Попереднє фото"
              >
                Prev
              </button>
              ) : null}

              <img
                src={lightbox.items[lightbox.index]?.src}
                alt={lightbox.items[lightbox.index]?.title ?? ""}
                className={`lightbox-image${lightbox.variant === "portrait" ? " lightbox-image-portrait" : ""}`}
              />

              {lightbox.items.length > 1 ? (
              <button
                type="button"
                className="lightbox-nav lightbox-nav-next"
                onClick={() => moveGallery(1)}
                aria-label="Наступне фото"
              >
                Next
              </button>
              ) : null}
            </div>

            <div className="lightbox-meta">
              <div className="lightbox-meta-copy">
                <strong>{lightbox.items[lightbox.index]?.title}</strong>
                {lightbox.items[lightbox.index]?.subtitle ? (
                  <p>{lightbox.items[lightbox.index]?.subtitle}</p>
                ) : null}
              </div>
              <span>{lightbox.index + 1} / {lightbox.items.length}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
