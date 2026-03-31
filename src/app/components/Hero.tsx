import React from "react";
import { ArrowUpRight } from "lucide-react";
// import phoneImg from "figma:asset/9c5c33c3f84102e1ecd8729165d9330032e9ba16.png";
import { useApp } from "../App";

export function Hero() {
  const { openContact, scrollTo } = useApp();

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--dark-bg)", minHeight: "100vh" }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(200,255,0,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, var(--neon-lime-subtle) 0%, transparent 70%)",
        }}
      />
      <svg
        className="absolute bottom-[30%] left-[3%] pointer-events-none opacity-20"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M10 110 L60 10 L110 80"
          stroke="var(--text-muted)"
          strokeWidth="1"
        />
        <path
          d="M20 100 L70 20 L100 70"
          stroke="var(--text-muted)"
          strokeWidth="0.5"
        />
      </svg>

      <div className="max-w-[1240px] mx-auto px-6 pt-28 pb-8 relative z-10">
        <div className="relative">
          {/* Spinning badge */}
          <div className="absolute top-0 right-0 lg:right-8 hidden md:flex items-center justify-center">
            <div
              className="w-[100px] h-[100px] relative"
              style={{ animation: "spin 12s linear infinite" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.06em",
                    fill: "var(--text-white)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <textPath href="#circlePath">
                    Best Software Development •
                  </textPath>
                </text>
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: "spin 12s linear infinite reverse" }}
              >
                <button
                  onClick={() => openContact("Book a Consultation")}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                  style={{ background: "var(--neon-lime)", border: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="4" r="2.5" fill="var(--dark-bg)" />
                    <path
                      d="M4 14c0-2.2 1.8-4 4-4s4 1.8 4 4"
                      stroke="var(--dark-bg)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div>
            <h1
              className="opacity-0"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 1.0,
                color: "var(--text-white)",
                animation: "fadeUp 0.7s ease forwards",
              }}
            >
              Branding
            </h1>
            <h1
              className="opacity-0"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(56px, 8.5vw, 105px)",
                lineHeight: 1.0,
                color: "var(--neon-lime)",
                fontStyle: "italic",
                animation: "fadeUp 0.7s ease forwards",
                animationDelay: "0.15s",
                marginLeft: "clamp(20px, 4vw, 80px)",
              }}
            >
              UI Design
            </h1>
            <h1
              className="opacity-0"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 1.0,
                color: "var(--text-white)",
                animation: "fadeUp 0.7s ease forwards",
                animationDelay: "0.3s",
                marginLeft: "clamp(40px, 8vw, 160px)",
              }}
            >
              Development
            </h1>
          </div>
        </div>

        {/* Below headline */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-8">
          <div className="max-w-md">
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-muted)",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Easily connect your SEO-optimized{" "}
              <br className="hidden sm:block" />
              Content &nbsp;—&nbsp;{" "}
              <button
                onClick={() => scrollTo("about")}
                className="cursor-pointer"
                style={{
                  color: "var(--neon-lime)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  background: "none",
                  border: "none",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                }}
              >
                Helping you stay Consistent
              </button>
              ,<br />
              Save time, and grow faster.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <button
                onClick={() => openContact("Let's Talk")}
                className="cursor-pointer rounded-full px-5 py-2.5 transition-all duration-150 hover:scale-105 hover:shadow-[0_0_20px_var(--neon-lime-glow)]"
                style={{
                  background: "var(--neon-lime)",
                  color: "var(--dark-bg)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "none",
                }}
              >
                Let's Talk
              </button>
              <button
                onClick={() => scrollTo("work")}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-white)",
                  background: "none",
                }}
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                "linear-gradient(135deg, #4ade80, #166534)",
                "linear-gradient(135deg, #facc15, #a16207)",
                "linear-gradient(135deg, #60a5fa, #1e40af)",
              ].map((bg, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2"
                  style={{ background: bg, borderColor: "var(--dark-bg)" }}
                />
              ))}
              <div
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
                style={{
                  background: "var(--dark-surface)",
                  borderColor: "var(--dark-bg)",
                  color: "var(--neon-lime)",
                  fontSize: 12,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}
              >
                +
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "var(--text-white)",
                }}
              >
                We have 15k+ Customers
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                World-wide
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center mt-12 relative">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] h-[55%] rounded-t-2xl"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #111 100%)",
              boxShadow: "0 -4px 60px rgba(0,0,0,0.5)",
            }}
          />
          <img
            src="#"
            alt="App mockup"
            className="relative z-10 w-full max-w-[600px] object-contain"
            style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.7))" }}
          />
        </div>
      </div>
    </section>
  );
}
