import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useApp } from "../App";

const sectionMap: Record<string, string> = {
  "Home": "hero",
  "About": "about",
  "About Us": "about",
  "Services": "services",
  "Project": "work",
  "Work": "work",
  "Blogs": "blog",
  "Blog": "blog",
  "Contact Us": "contact-section",
  "Pricing": "services",
  "Careers": "about",
};

const companyLinks = ["Home", "About", "Services", "Project", "Blogs", "Contact Us"];
const serviceLinks = ["UI/UX Design", "Web Design", "Logo & Branding", "Webflow Design", "Framer Design", "Content Creation", "Landing Page"];
const industryLinks = ["Fintech Industry", "Healthcare & Fitness Industry", "Edtech Industry", "E-Commerce Industry", "Company Deck", "Real Estate"];

const socials = [
  { icon: Twitter, label: "X", url: "https://twitter.com" },
  { icon: Facebook, label: "Facebook", url: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
];

export function Footer() {
  const { scrollTo, openContact, showToast } = useApp();

  const handleFooterLink = (label: string) => {
    const target = sectionMap[label];
    if (target) {
      scrollTo(target);
    } else {
      showToast(`${label} — Coming soon!`);
    }
  };

  return (
    <footer id="contact-section" style={{ background: "var(--dark-bg)" }}>
      {/* Top nav links */}
      <div className="py-5" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-end gap-8 flex-wrap">
          {["About Us", "Work", "Contact Us", "Pricing", "Careers"].map((l) => (
            <button
              key={l}
              onClick={() => l === "Contact Us" ? openContact("Contact Us") : handleFooterLink(l)}
              className="transition-colors duration-200 hover:text-[var(--neon-lime)] cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", background: "none", border: "none" }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-1 mb-4 cursor-pointer"
              style={{ background: "none", border: "none" }}
            >
              <span style={{ color: "var(--neon-lime)", fontSize: 10 }}>✦</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--text-white)" }}>Pixelency</span>
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
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--neon-lime)] hover:text-black"
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
                className="block py-1 transition-colors hover:text-[var(--neon-lime)] cursor-pointer"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: "4px 0", textAlign: "left" }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)" }}>Services</h4>
            {serviceLinks.map((l) => (
              <button
                key={l}
                onClick={() => { scrollTo("services"); showToast(`${l} — View our services`); }}
                className="block py-1 transition-colors hover:text-[var(--neon-lime)] cursor-pointer"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: "4px 0", textAlign: "left" }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Specialized Industry */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)" }}>Specialized industry</h4>
            {industryLinks.map((l) => (
              <button
                key={l}
                onClick={() => showToast(`${l} — Portfolio coming soon!`)}
                className="block py-1 transition-colors hover:text-[var(--neon-lime)] cursor-pointer"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: "4px 0", textAlign: "left" }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span style={{ fontFamily: "var(--font-body)", color: "var(--text-faint)", fontSize: 13 }}>
            © 2010-2025 <span style={{ color: "var(--neon-lime)" }}>Pixelency</span>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
