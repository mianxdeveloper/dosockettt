import { useApp } from "../App";

const partners = [
  { name: "ccpayment", url: "https://ccpayment.com" },
  { name: "MintySwap", url: "https://mintyswap.com" },
];

export function Partners() {
  const { showToast, openContact } = useApp();

  return (
    <section id="partners" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div>
            <span className="inline-block rounded-full px-4 py-1.5 mb-4" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
              Partnerships
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Into trusting
            </h2>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--neon-lime)", fontStyle: "italic" }}>
              —Partnerships
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-center justify-center min-h-[100px] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-white/[0.02]"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full" style={{ background: "var(--text-dim)" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-white)", fontSize: 16 }}>
                    {p.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <a
            href="https://blockworks.co"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-6 flex items-center justify-center min-h-[200px] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-white/[0.02]"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--text-white)", fontSize: 18 }}>
              ▎Blockworks
            </span>
          </a>

          <button
            onClick={() => openContact("Partner with Opal")}
            className="rounded-2xl p-6 flex flex-col justify-between min-h-[200px] cursor-pointer text-left transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "var(--neon-lime)", border: "none" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-black" />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--dark-bg)", fontSize: 16 }}>Opal</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--dark-bg)", fontSize: 13, lineHeight: 1.5, opacity: 0.8 }}>
                I'm extremely satisfied working with Pixelency. The design quality was top-notch everything.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="rounded-full px-3 py-1" style={{ background: "rgba(0,0,0,0.1)", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--dark-bg)" }}>Mobile App</span>
              <span className="rounded-full px-3 py-1 flex items-center gap-1" style={{ background: "rgba(0,0,0,0.1)", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--dark-bg)" }}>🇬🇧 UK</span>
            </div>
          </button>

          <a
            href="https://gradguide.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-6 flex items-center justify-center min-h-[200px] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-white/[0.02]"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 18 }}>🎓</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-white)", fontSize: 16 }}>Gradguide</span>
            </div>
          </a>

          <button
            onClick={() => showToast("Visiting newnew partner page")}
            className="rounded-2xl p-6 flex items-center justify-center min-h-[200px] cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-white/[0.02]"
            style={{ border: "1px solid var(--border-subtle)", background: "none" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--text-dim)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--text-dim)" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-white)", fontSize: 16 }}>newnew</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
