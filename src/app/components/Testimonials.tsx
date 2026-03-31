import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";

const AVATAR = "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5ODE5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const testimonials = [
  { name: "Valentine Syumka", role: "E-commerce Business Owner", quote: "I'm extremely satisfied working with Pixelency. The design quality was top-notch, and they delivered everything on time. Their customer service was also very friendly & professional. I would definitely love to work with them again in the future." },
  { name: "Saiful Talukdar", role: "Startup Founder", quote: "The team at Pixelency transformed our entire digital presence. From branding to development, every detail was handled with care and precision. Our conversion rate increased by 40% after the redesign." },
  { name: "Aminul Islam", role: "Tech Lead at FinCorp", quote: "Working with this agency has been a game changer. Their technical expertise and creative vision helped us build a platform that our users love. The attention to detail is remarkable." },
  { name: "Tonmoy Hasan", role: "Marketing Director", quote: "Exceptional work from start to finish. The team understood our vision perfectly and delivered beyond expectations. The new website has significantly improved our brand perception in the market." },
];

export function Testimonials() {
  const { showToast } = useApp();
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section id="testimonials" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
          {/* Left */}
          <div className="flex flex-col">
            <span className="inline-block rounded-full px-4 py-1.5 mb-4 self-start" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
              Testimonial
            </span>

            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Real Stories from—
            </h2>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Beloved Clients
            </h2>

            <p className="mt-4 mb-8" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>
              See how businesses just like yours are leveling up with a little help from our AI magic!
            </p>

            {/* Navigation dots */}
            <div className="flex items-center gap-2 mb-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    width: activeIdx === i ? 28 : 10,
                    height: 10,
                    borderRadius: 5,
                    background: activeIdx === i ? "var(--neon-lime)" : "var(--text-dim)",
                    border: "none",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveIdx(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10 disabled:opacity-30"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", background: "none" }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveIdx(Math.min(testimonials.length - 1, activeIdx + 1))}
                disabled={activeIdx === testimonials.length - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10 disabled:opacity-30"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", background: "none" }}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Read All Stories */}
            <button
              onClick={() => { setShowAll(!showAll); showToast(showAll ? "Showing top stories" : "Showing all client stories"); }}
              className="flex items-center gap-2 rounded-full px-3 py-2 self-start cursor-pointer transition-all duration-200 hover:bg-white/5"
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)" }}
            >
              <div className="flex -space-x-2">
                {["linear-gradient(135deg, #f97316, #ea580c)", "linear-gradient(135deg, #a78bfa, #6d28d9)", "linear-gradient(135deg, #34d399, #059669)"].map((bg, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2" style={{ background: bg, borderColor: "var(--dark-surface)" }} />
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--text-white)" }}>
                {showAll ? "Show Less" : "Read All Stories"}
              </span>
              <div className="w-7 h-7 rounded-full flex items-center justify-center ml-1" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)" }}>
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {displayed.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:border-[var(--border-hover)]"
                style={{
                  background: "var(--dark-surface)",
                  border: activeIdx === i ? "1px solid var(--border-hover)" : "1px solid var(--border-subtle)",
                  transform: activeIdx === i ? "scale(1.01)" : "scale(1)",
                }}
                onClick={() => setActiveIdx(i)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <ImageWithFallback src={AVATAR} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)" }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, lineHeight: "0.8", color: "var(--neon-lime)" }}>"</div>
                <p className="mt-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--text-white)", fontSize: 14, lineHeight: 1.7 }}>
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
