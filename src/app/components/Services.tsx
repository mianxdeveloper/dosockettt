import { useState } from "react";
import { ArrowUpRight, ChevronUp, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";

const AVATAR = "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5ODE5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const SCULPTURE = "https://images.unsplash.com/photo-1651443428704-477074136d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3RhdHVlJTIwc2N1bHB0dXJlJTIwYXJ0fGVufDF8fHx8MTc3NDk4MTk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const faqs = [
  { q: "01. What is your core UX & branding process?", a: "We start with deep discovery, move to strategic wireframing, then visual design, and finally rigorous testing. Our process is iterative and collaborative." },
  { q: "02. Can you redesign our enterprise software?", a: "Absolutely. We specialize in transforming complex legacy systems into intuitive, modern interfaces that improve user efficiency." },
  { q: "03. Which solution is best for me, Custom or CMS?", a: "It depends on your scalability needs. For marketing sites, Framer/Webflow is great. For web apps, custom React development is preferred." },
  { q: "04. Do you work with startups?", a: "Yes, we love working with ambitious startups. We have specific packages designed to help MVPs get to market quickly with high impact." },
  { q: "05. Need coding to edit my site?", a: "Not if we build it on Webflow or Framer. We hand over a fully editable CMS so your marketing team can make changes without code." },
];

export function Services() {
  const { openContact } = useApp();
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="services" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-3">
          <span className="inline-block rounded-full px-4 py-1.5" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
            FAQ
          </span>
        </div>

        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5.5vw, 64px)", lineHeight: 1.1, color: "var(--text-white)" }}>
            Helping You <span style={{ fontStyle: "italic" }}>Understand</span>
          </h2>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5.5vw, 64px)", lineHeight: 1.1, color: "var(--text-white)" }}>
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          {/* Left card */}
          <div className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--dark-surface) 0%, var(--dark-bg) 100%)", border: "1px solid var(--border-subtle)", minHeight: 420 }}>
            <div className="flex -space-x-2 mb-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--dark-surface)" }}>
                  <ImageWithFallback src={AVATAR} alt="team" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-white)", lineHeight: 1.3 }}>
                Tailored Digital Solutions Start Here
              </h3>

              <button
                onClick={() => openContact("Book a Call")}
                className="flex items-center gap-2 mt-6 justify-center w-full cursor-pointer group"
                style={{ background: "none", border: "none" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--neon-lime-glow)]" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)" }}>
                  <ArrowUpRight size={20} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--text-white)" }}>
                  Book a Call
                </span>
              </button>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden" style={{ maxHeight: 180 }}>
              <ImageWithFallback src={SCULPTURE} alt="Sculpture" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>

          {/* Right accordion */}
          <div>
            {faqs.map((f, i) => (
              <div key={i} className="transition-all duration-200" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <button
                  className="w-full flex justify-between items-center py-5 cursor-pointer text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{ background: "none", border: "none" }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: open === i ? "var(--neon-lime)" : "var(--text-white)", transition: "color 200ms" }}>
                    {f.q}
                  </span>
                  <span className="shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200" style={{ color: open === i ? "var(--neon-lime)" : "var(--text-muted)", background: open === i ? "rgba(200,255,0,0.1)" : "transparent" }}>
                    {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? 200 : 0 }}>
                  <p className="pb-5 pr-8" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
