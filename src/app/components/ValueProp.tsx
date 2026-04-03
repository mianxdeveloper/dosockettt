import { useState } from "react";
import { Globe, Triangle, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";

const tabs = ["Strategy", "Design", "Development"];

const tabServices = [
  [
    { icon: Globe, label: "Landing Page", desc: "We create stunning, conversion-focused landing pages that capture attention and drive results. From wireframe to launch — pixel-perfect." },
    { icon: Triangle, label: "Mobile App Development", desc: "We develop modern, user-friendly, and high-performance mobile applications for both Android and iOS. From UI/UX — We deliver end-to-end app solutions." },
    { icon: Code, label: "Web Development", desc: "Full-stack web development with modern frameworks. We build scalable, performant web applications tailored to your business needs." },
  ],
  [
    { icon: Globe, label: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed with your users in mind. We follow design thinking principles to create experiences people love." },
    { icon: Triangle, label: "Brand Identity", desc: "Comprehensive brand identity packages including logo design, color systems, typography, and brand guidelines that tell your unique story." },
    { icon: Code, label: "Graphic Design", desc: "Eye-catching visual content for digital and print. Social media graphics, presentations, marketing materials and more." },
  ],
  [
    { icon: Globe, label: "Frontend Development", desc: "Modern frontend development with React, Vue, and Angular. We build responsive, accessible, and performant user interfaces." },
    { icon: Triangle, label: "Backend Development", desc: "Robust backend systems with Node.js, Python, and Go. RESTful APIs, microservices, and cloud-native architectures." },
    { icon: Code, label: "DevOps & Cloud", desc: "Cloud infrastructure, CI/CD pipelines, and deployment automation. AWS, GCP, and Azure solutions for scalable applications." },
  ],
];

const PHONE_IMG = "https://images.unsplash.com/photo-1738563710982-6ebe69cd5b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vY2t1cCUyMGRhcmslMjBjb25jcmV0ZXxlbnwxfHx8fDE3NzQ5ODE5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function ValueProp() {
  const { openContact } = useApp();
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState(1);

  const services = tabServices[activeTab];

  return (
    <section id="value" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-3">
          <span className="inline-block rounded-full px-4 py-1.5" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
            Our Service
          </span>
        </div>

        <div className="text-center mb-8">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.1, color: "var(--text-white)" }}>
            Smart <span style={{ fontStyle: "italic" }}>Solutions</span> —
          </h2>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.1, color: "var(--text-white)" }}>
            Real Results.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-3 mb-14">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => { setActiveTab(i); setExpandedIdx(1); }}
              className="cursor-pointer rounded-full px-6 py-2.5 transition-all duration-200"
              style={{
                background: i === activeTab ? "var(--neon-lime)" : "transparent",
                color: i === activeTab ? "var(--dark-bg)" : "var(--text-muted)",
                border: i === activeTab ? "1px solid var(--neon-lime)" : "1px solid var(--border-subtle)",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)" }}>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isOpen = expandedIdx === i;
              return (
                <div key={i} className="mb-1">
                  <button
                    onClick={() => setExpandedIdx(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-3 py-4 px-5 rounded-xl transition-all duration-200 cursor-pointer text-left"
                    style={{
                      background: isOpen ? "rgba(200,255,0,0.06)" : "transparent",
                      border: isOpen ? "1px solid var(--border-hover)" : "1px solid transparent",
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)" }}>
                      <Icon size={18} />
                    </div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-white)" }}>
                      {s.label}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center ml-auto shrink-0 transition-all duration-200"
                      style={{ background: isOpen ? "var(--neon-lime)" : "transparent", color: isOpen ? "var(--dark-bg)" : "var(--text-muted)", border: isOpen ? "none" : "1px solid var(--border-subtle)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        {isOpen ? (
                          <path d="M3 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                          <path d="M3 7h8M7 3v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                      </svg>
                    </div>
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? 120 : 0 }}>
                    <p className="px-5 pb-4 mt-1" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6, maxWidth: 440 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative flex items-end justify-center p-6 lg:p-8" style={{ background: "var(--dark-surface-2)" }}>
            <ImageWithFallback src={PHONE_IMG} alt="iPhone mockup" className="w-full max-w-[400px] object-contain rounded-xl" style={{ maxHeight: 450 }} />
          </div>
        </div>

        <div className="text-center mt-8">
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14 }}>
            Save your precious time for finding a solution.
          </p>
          <button
            onClick={() => openContact("Contact Us")}
            className="cursor-pointer hover:text-[var(--neon-lime)] transition-colors"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-white)", fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3, background: "none", border: "none" }}
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
