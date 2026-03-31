import { useApp } from "../App";

export function FooterCTA() {
  const { openContact } = useApp();

  return (
    <section className="py-20" style={{ background: "var(--dark-bg)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <p className="mb-2" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14 }}>
              Looking for <span style={{ color: "var(--neon-lime)" }}>Logistics Support?</span>
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Let's <span style={{ color: "var(--neon-lime)", fontStyle: "italic" }}>Build Something</span>
            </h2>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Great Together
            </h2>
          </div>
          <button
            onClick={() => openContact("Get in Touch")}
            className="cursor-pointer rounded-full px-7 py-3 transition-all duration-150 hover:scale-105 hover:shadow-[0_0_24px_var(--neon-lime-glow)] shrink-0"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, border: "none" }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
