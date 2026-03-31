const items = [
  { text: "UI Animation", accent: false },
  { text: "Illustration Design", accent: false },
  { text: "Branding Design", accent: true },
  { text: "Web Development", accent: false },
  { text: "Mobile App", accent: false },
  { text: "Digital Marketing", accent: false },
  { text: "Logo Design", accent: false },
  { text: "UI/UX Design", accent: false },
];

const icons = ["✳", "✧", "✳", "✧", "✳", "✧", "✳", "✧"];

function TickerContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4 shrink-0">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: item.accent ? "var(--neon-lime)" : "var(--text-muted)",
            }}
          >
            {item.text}
          </span>
          <span
            style={{
              color: item.accent ? "var(--neon-lime)" : "var(--text-dim)",
              fontSize: 18,
            }}
          >
            {icons[i]}
          </span>
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div
      className="w-full overflow-hidden py-5"
      style={{
        background: "var(--dark-bg)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="flex whitespace-nowrap gap-6" style={{ animation: "marquee 30s linear infinite" }}>
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
