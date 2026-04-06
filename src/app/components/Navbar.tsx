import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Twitter, Dribbble, Instagram, Linkedin, ChevronDown, Layers, Palette, Rocket, Laptop, Code, Megaphone } from "lucide-react";
import { useApp } from "../App";

const menuLinks = [
  { label: "Home", target: "/" },
  { label: "Services", target: "services", hasDropdown: true },
  { label: "About Us", target: "/about" },
  { label: "Projects", target: "work" },
  { label: "Pricing", target: "/pricing" },
  { label: "Blogs", target: "blog" },
];

const serviceCategories = [
  {
    title: "DESIGN",
    subtitle: "UI/UX & Creative Visuals",
    icon: Palette,
    links: ["UI/UX Design", "Brand Identity Design", "Graphic Design", "Motion Design & Animation"]
  },
  {
    title: "DEVELOPMENT",
    subtitle: "Web & Mobile Solutions",
    icon: Code,
    links: ["Web Design & Development", "eCommerce Development", "Landing Page Development", "Mobile App Design & Development", "Website Maintenance & Support", "Competitor Research & Analysis"]
  },
  {
    title: "DIGITAL MARKETING",
    subtitle: "Growth & Strategy",
    icon: Megaphone,
    links: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Paid Advertising (Google Ads, Meta Ads)", "Content Marketing & Copywriting", "Email Marketing", "Digital Strategy"]
  }
];

const socials = [
  { icon: Twitter, label: "X", url: "https://twitter.com" },
  { icon: Dribbble, label: "Dribbble", url: "https://dribbble.com" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
];

export function Navbar() {
  const { openContact, scrollTo } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openMobile]);

  const handleNavClick = (target: string) => {
    setOpenMobile(false);
    setActiveDropdown(null);
    if (target === "contact") {
      openContact("Let's Talk");
    } else if (target === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        window.scrollTo(0, 0);
      }
    } else if (target.startsWith("/")) {
      if (location.pathname === target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(target);
        window.scrollTo(0, 0);
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollTo(target), 300);
      } else {
        setTimeout(() => scrollTo(target), 100);
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          willChange: "transform, opacity",
          fontFamily: "var(--font-main)",
          borderBottomLeftRadius: scrolled ? "24px" : "0px",
          borderBottomRightRadius: scrolled ? "24px" : "0px",
        }}
      >
        <div className={`w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between relative transition-all duration-300 ${scrolled ? 'h-[64px] lg:h-[76px]' : 'h-[80px] lg:h-[100px]'}`}>

          {/* Logo - Left */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-1.5 cursor-pointer z-10 shrink-0"
            style={{ fontWeight: 800, fontSize: "clamp(20px, 2vw, 24px)", color: "#fff", background: "none", border: "none", fontFamily: "var(--font-main)" }}
          >
            Dosocket
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] inline-block" />
          </button>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full">
            <ul className="flex items-center gap-8 h-full">
              {menuLinks.map((link) => (
                <li
                  key={link.label}
                  className="h-full flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.target)}
                    className="flex items-center gap-1.5 text-[16px] font-medium transition-colors duration-200 cursor-pointer h-full relative"
                    style={{
                      color: "#fff",
                      background: "none",
                      border: "none",
                      fontFamily: "var(--font-main)"
                    }}
                  >
                    <span className="hover:text-[#C8FF00] transition-colors">{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180 text-[#C8FF00]" : "text-white/70"}`} />
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[1000px] max-w-[90vw] p-8 rounded-2xl shadow-2xl overflow-hidden cursor-default"
                          style={{
                            background: "rgba(15,15,15,0.98)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            fontFamily: "var(--font-main)"
                          }}
                        >
                          <div className="grid grid-cols-3 gap-6">
                            {serviceCategories.map((cat, idx) => {
                              const IconDef = cat.icon;
                              return (
                                <div key={idx} className="flex flex-col group/col">
                                  <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#C8FF00] transition-colors duration-300 group-hover/col:bg-[#C8FF00] group-hover/col:text-black">
                                        <IconDef size={20} />
                                      </div>
                                      <h3 className="text-white flex items-center gap-2 font-semibold text-[17px] hover:text-[#C8FF00] transition-colors cursor-pointer group m-0">
                                        {cat.title}
                                      </h3>
                                    </div>
                                    <p className="text-white/50 text-[13px] m-0 leading-relaxed pl-[52px] -mt-1">{cat.subtitle}</p>
                                  </div>
                                  <div className="flex flex-col gap-2 pl-[52px]">
                                    {cat.links.map((sub, i) => (
                                      <button
                                        key={i}
                                        onClick={() => handleNavClick("services")}
                                        className="text-left text-white/70 hover:text-[#C8FF00] hover:bg-white/5 py-2 px-3 -mx-3 rounded-md transition-all text-[14px] bg-transparent border-none appearance-none cursor-pointer flex items-center justify-between group/link"
                                      >
                                        {sub}
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button & Mobile Toggle - Right */}
          <div className="flex items-center gap-4 z-10 shrink-0">
            <button
              onClick={() => handleNavClick("contact")}
              className="hidden lg:inline-flex items-center justify-center rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "#C8FF00",
                color: "#000",
                fontWeight: 600,
                fontSize: 15,
                border: "none",
                fontFamily: "var(--font-main)"
              }}
            >
              Let's Talk
            </button>

            <button
              onClick={() => setOpenMobile(!openMobile)}
              className="lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer transition-all duration-200"
              style={{
                background: openMobile ? "#C8FF00" : "rgba(255,255,255,0.05)",
                color: openMobile ? "#000" : "#fff",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {openMobile ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(5px)",
          opacity: openMobile ? 1 : 0,
          pointerEvents: openMobile ? "auto" : "none",
        }}
        onClick={() => setOpenMobile(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full z-[70] flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] lg:hidden"
        style={{
          width: "min(400px, 85vw)",
          background: "#0a0a0a",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          transform: openMobile ? "translateX(0)" : "translateX(-100%)",
          fontFamily: "var(--font-main)"
        }}
      >
        <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-white/5">
          <button onClick={() => handleNavClick("/")} className="flex items-center gap-1.5 cursor-pointer bg-transparent border-none">
            <span style={{ fontWeight: 800, fontSize: 20, color: "#fff", fontFamily: "var(--font-main)" }}>Dosocket</span>
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] inline-block" />
          </button>
          <button
            onClick={() => setOpenMobile(false)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-white/5 text-white hover:bg-[#C8FF00] hover:text-black transition-colors border-none"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
          {menuLinks.map((link, idx) => (
            <div key={idx} className="flex flex-col">
              <button
                onClick={() => {
                  if (link.hasDropdown && activeDropdown !== link.label) {
                    setActiveDropdown(link.label);
                  } else if (link.hasDropdown && activeDropdown === link.label) {
                    setActiveDropdown(null);
                  } else {
                    handleNavClick(link.target);
                  }
                }}
                className="w-full flex items-center justify-between py-4 border-b border-white/10 text-left transition-colors cursor-pointer"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: activeDropdown === link.label ? "#C8FF00" : "#fff",
                  background: "none",
                  borderStyle: "none none solid none",
                  fontFamily: "var(--font-main)"
                }}
              >
                <span className="hover:text-[#C8FF00] transition-colors">{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                )}
              </button>
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pt-4"
                    >
                      {serviceCategories.map((cat, i) => {
                        const IconDef = cat.icon;
                        return (
                          <div key={i} className="pl-4 border-l border-white/10 mb-2">
                            <div className="flex items-center gap-2 mb-2">
                              <IconDef size={16} className="text-[#C8FF00]" />
                              <p className="text-white/90 font-semibold m-0 text-[16px]">{cat.title}</p>
                            </div>
                            <div className="flex flex-col gap-1 items-start pl-6">
                              {cat.links.map((sub, j) => (
                                <button
                                  key={j}
                                  onClick={() => handleNavClick("services")}
                                  className="text-left text-white/50 text-[14px] hover:text-[#C8FF00] bg-transparent border-none py-1.5 cursor-pointer transition-colors"
                                >
                                  {sub}
                                </button>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="mt-8">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full rounded-full py-4 text-black font-semibold text-[16px] transition-transform hover:scale-[1.02] cursor-pointer"
              style={{ background: "#C8FF00", border: "none", fontFamily: "var(--font-main)" }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-white/10">
          <p className="text-white/40 text-[13px] mb-4 uppercase tracking-wider m-0">Follow Us</p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#C8FF00] hover:text-black bg-white/5 text-white/70"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}