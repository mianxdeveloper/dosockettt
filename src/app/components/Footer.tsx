import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../App";

// Import your logo - adjust path if necessary based on your folder structure
import LogoImg from "/Logo.svg";

const companyLinks = ["Home", "About", "Services", "Portfolio", "Contact Us"];
const serviceLinks = [
  { label: "Design", route: "/design" },
  { label: "Development", route: "/development" },
  { label: "Digital Marketing", route: "/digital-marketing" }
];

const socials = [
  { icon: Twitter, label: "X", url: "https://x.com/dosocketagency" },
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/DosocketAgency/" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/dosocketagency/" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/dosocket-agency" },
];

export function Footer() {
  const { scrollTo, openContact } = useApp();
  const navigate = useNavigate();

  const handleFooterLink = (label: string) => {
    switch (label) {
      case "Home":
        navigate("/");
        window.scrollTo(0, 0);
        break;
      case "About":
      case "About Us":
      case "Team":
        navigate("/about");
        window.scrollTo(0, 0);
        break;
      case "Services":
        navigate("/");
        setTimeout(() => scrollTo("services"), 100);
        break;
      case "Work":
      case "Portfolio":
      case "Project":
        navigate("/projects");
        window.scrollTo(0, 0);
        break;
      case "Pricing":
        navigate("/pricing");
        window.scrollTo(0, 0);
        break;
      case "Contact Us":
        scrollTo("contact-section");
        break;
      default:
        break;
    }
  };

  return (
    <footer id="contact-section" style={{ background: "var(--dark-bg)" }}>
      {/* Top nav links */}
      <div className="py-5" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-end gap-8 flex-wrap">
          {["About Us", "Portfolio", "Contact Us", "Pricing", "Team"].map((l) => (
            <button
              key={l}
              onClick={() => l === "Contact Us" ? openContact("Contact Us") : handleFooterLink(l)}
              className="transition-all duration-300 hover:text-[var(--neon-lime)] hover:scale-105 cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", background: "none", border: "none" }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
          {/* Brand & Logo */}
          <div>
            <button
              onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
              className="flex items-center mb-6 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img
                src={LogoImg}
                alt="Dosocket Logo"
                className="h-8 lg:h-9 w-auto object-contain"
              />
            </button>

            <p className="mb-8" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6, maxWidth: 300 }}>
              Whether you're ready to start a project or just exploring ideas, we're here to help.
            </p>

            <div className="mt-auto">
              <div className="mb-3" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>Follow Us On</div>
              <div className="flex gap-2.5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C8FF00] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(200,255,0,0.4)]"
                      style={{ background: "var(--dark-surface-2)", color: "var(--text-white)" }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)" }}>Company</h4>
            {companyLinks.map((l) => (
              <button
                key={l}
                onClick={() => l === "Contact Us" ? openContact("Contact Us") : handleFooterLink(l)}
                className="block py-1 transition-all duration-300 hover:text-[var(--neon-lime)] hover:translate-x-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: "4px 0", textAlign: "left" }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)" }}>Services</h4>
            {serviceLinks.map((s) => (
              <button
                key={s.label}
                onClick={() => { navigate(s.route); window.scrollTo(0, 0); }}
                className="block py-1 transition-all duration-300 hover:text-[var(--neon-lime)] hover:translate-x-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: "4px 0", textAlign: "left" }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span style={{ fontFamily: "var(--font-body)", color: "var(--text-faint)", fontSize: 13 }}>
            © 2024-2026 <span style={{ color: "var(--neon-lime)" }}>Dosocket</span>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}