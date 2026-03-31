import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";

const IMG = "https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbiUyMG1lZXRpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc3NDk4MTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function About() {
  const { scrollTo } = useApp();

  return (
    <section id="about" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start mb-16">
          <button
            onClick={() => scrollTo("about")}
            className="inline-block rounded-full px-4 py-1.5 mt-2 shrink-0 cursor-pointer"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic", border: "none" }}
          >
            About Us
          </button>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.3, color: "var(--text-white)", maxWidth: 650 }}>
            We build innovative <span style={{ fontStyle: "italic" }}>software solutions</span> that empower businesses to thrive in a digital-first world. Founded on the belief that technology.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl p-7 cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)]"
              onClick={() => scrollTo("work")}
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px, 5vw, 56px)", color: "var(--text-white)", lineHeight: 1.1 }}>
                $1.2B
              </div>
              <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>
                • Reach of <span style={{ color: "var(--text-white)" }}>User's Using the Platform Now</span>
              </p>
            </div>

            <div
              className="rounded-2xl p-7 cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)]"
              onClick={() => scrollTo("testimonials")}
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px, 5vw, 56px)", color: "var(--text-white)", lineHeight: 1.1, fontStyle: "italic" }}>
                $89%
              </div>
              <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>
                • Average Client Retention of Rate
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border-subtle)" }}>
            <ImageWithFallback src={IMG} alt="Team meeting" className="w-full h-full object-cover" style={{ minHeight: 400 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
