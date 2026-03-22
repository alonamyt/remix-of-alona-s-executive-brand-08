import { useState, useEffect } from "react";
import ardLogo from "@/assets/ard-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Про нас", href: "#about" },
    { label: "Проєкти", href: "#achievements" },
    { label: "Команда", href: "#team-magic" },
    { label: "Історія", href: "#history-success" },
    { label: "Контакти", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-accent/40 bg-primary/96 backdrop-blur-md shadow-[0_10px_35px_-20px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-primary/85 via-primary/45 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={ardLogo} alt="AR&D" className="h-8 w-auto" />
          <span className="hidden sm:inline-block font-display text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
            Department
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/72 hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-5 h-px bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-accent/30 bg-primary/96 px-6 pb-6 backdrop-blur-md animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-base font-medium text-white/78 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
