import { useState, useEffect } from "react";
import { Menu, X, Home, ClipboardList, Tag, FolderOpen, Briefcase, MessageCircle, BookOpen, Twitter, Dribbble, Instagram, Linkedin } from "lucide-react";
import { useApp } from "../App";

const menuLinks = [
  { label: "Home", icon: Home, target: "hero" },
  { label: "About Us", icon: ClipboardList, target: "about" },
  { label: "Pricing", icon: Tag, target: "services" },
  { label: "Projects", icon: FolderOpen, target: "work" },
  { label: "Services", icon: Briefcase, target: "services" },
  { label: "Contact", icon: MessageCircle, target: "contact" },
  { label: "Blogs", icon: BookOpen, target: "blog" },
];

const socials = [
  { icon: Twitter, label: "X", url: "https://twitter.com" },
  { icon: Dribbble, label: "Dribbble", url: "https://dribbble.com" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
];

export function Navbar() {
  const { openContact, scrollTo } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (target: string) => {
    setOpen(false);
    if (target === "contact") {
      openContact("Get Started");
    } else {
      setTimeout(() => scrollTo(target), 100);
    }
  };

  const rows: (typeof menuLinks[number] | null)[][] = [];
  for (let i = 0; i < menuLinks.length; i += 2) {
    rows.push([menuLinks[i], menuLinks[i + 1] ?? null]);
  }

  return (
    <>
      {/* Top bar */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-[60px]">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{
              background: open ? "#C8FF00" : "transparent",
              color: open ? "#000" : "#fff",
              borderRadius: 6,
            }}
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2} />}
          </button>

          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-1.5 cursor-pointer"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", background: "none", border: "none" }}
          >
            Dosocket
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] inline-block" />
          </button>

          <button
            onClick={() => openContact("Get Started")}
            className="hidden sm:inline-flex items-center cursor-pointer rounded-full px-5 py-2 transition-all duration-150 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]"
            style={{ background: "#C8FF00", color: "#000", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 14, border: "none" }}
          >
            Get Started →
          </button>
          <div className="w-10 sm:hidden" />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.55)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full z-[70] flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
        style={{
          width: "min(660px, 88vw)",
          background: "#0a0a0a",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Header row */}
        <div
          className="flex items-center gap-4 px-5 shrink-0"
          style={{ height: 60, borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer shrink-0"
            style={{ background: "#C8FF00", color: "#000", borderRadius: 6, border: "none" }}
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-2 ml-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="1" y="1" width="20" height="20" rx="4" stroke="#C8FF00" strokeWidth="1.5" />
              <path d="M7 11c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>Agenz</span>
            <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 4px" }}>|</span>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: "#666" }}>based in UK</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-10 flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] bg-[#C8FF00]" style={{ borderRadius: 1 }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#C8FF00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Menu
            </span>
          </div>

          <div style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, overflow: "hidden" }}>
            {rows.map((row, ri) => (
              <div key={ri} className="flex" style={{ borderBottom: ri < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                {row[0] && (() => {
                  const Icon0 = row[0].icon;
                  const target0 = row[0].target;
                  return (
                    <button
                      onClick={() => handleNavClick(target0)}
                      className="flex-1 flex items-center gap-3 px-5 py-[18px] transition-colors duration-200 hover:bg-[#C8FF00]/[0.07] cursor-pointer text-left"
                      style={{
                        borderRight: "1px solid rgba(255,255,255,0.07)",
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 15,
                        color: "#ccc",
                        background: "none",
                        border: "none",
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "rgba(255,255,255,0.07)",
                      }}
                    >
                      <Icon0 size={18} style={{ color: "#C8FF00", opacity: 0.8 }} />
                      {row[0].label}
                    </button>
                  );
                })()}
                {row[1] ? (() => {
                  const Icon1 = row[1].icon;
                  const target1 = row[1].target;
                  return (
                    <button
                      onClick={() => handleNavClick(target1)}
                      className="flex-1 flex items-center gap-3 px-5 py-[18px] transition-colors duration-200 hover:bg-[#C8FF00]/[0.07] cursor-pointer text-left"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 15,
                        color: "#ccc",
                        background: "none",
                        border: "none",
                      }}
                    >
                      <Icon1 size={18} style={{ color: "#C8FF00", opacity: 0.8 }} />
                      {row[1].label}
                    </button>
                  );
                })() : (
                  <div className="flex-1" />
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.5vw, 42px)", lineHeight: 1.15, color: "#fff" }}>
              Let's Explore
            </h3>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.5vw, 42px)", lineHeight: 1.15, color: "#C8FF00" }}>
              more Agenz
            </h3>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-[6px] h-[6px] bg-[#C8FF00]" style={{ borderRadius: 1 }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#C8FF00", letterSpacing: "0.03em" }}>
                Social Media
              </span>
            </div>
            <div className="flex gap-3">
              {socials.map((s) => {
                const SIcon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#C8FF00] hover:text-black"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#777" }}
                  >
                    <SIcon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative corner triangle */}
        <div
          className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(200,255,0,0.05) 0%, transparent 60%)",
            clipPath: "polygon(0 100%, 0 20%, 80% 100%)",
          }}
        />
      </aside>
    </>
  );
}
