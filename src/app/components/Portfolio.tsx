import { useState } from "react";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";

const projects = [
  {
    title: "Fintech Mobile App",
    desc: "We design clean, intuitive, and engaging user interfaces using modern tools like Figma and Adobe XD—ensuring.",
    tags: ["Mobile App Design", "Fintech", "Banking"],
    img: "https://images.unsplash.com/photo-1738563710982-6ebe69cd5b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vY2t1cCUyMGRhcmslMjBjb25jcmV0ZXxlbnwxfHx8fDE3NzQ5ODE5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDesc: "A comprehensive fintech mobile application designed for seamless banking experiences. We created an intuitive interface that simplifies complex financial operations, making digital banking accessible to everyone. The app features biometric authentication, real-time notifications, and a clean dashboard.",
  },
  {
    title: "Product Branding",
    desc: "Complete brand identity and packaging design for a premium consumer product launch.",
    tags: ["Branding", "Packaging", "Product Design"],
    img: "https://images.unsplash.com/photo-1606389682798-d265ff6600df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJheSUyMGNhbiUyMGRhcmslMjBwcm9kdWN0fGVufDF8fHx8MTc3NDk4MTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDesc: "A full branding overhaul for a premium spray paint company. From logo redesign to packaging mockups and brand guidelines — we delivered a cohesive visual identity that elevated the brand in a competitive market.",
  },
  {
    title: "E-commerce Dashboard",
    desc: "Full-stack e-commerce dashboard with real-time analytics and inventory management.",
    tags: ["Web App", "Dashboard", "Analytics"],
    img: "https://images.unsplash.com/photo-1596648568250-75769da61a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkYXJrJTIwc3R1ZGlvJTIwbnVtYmVyfGVufDF8fHx8MTc3NDk4MTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDesc: "A powerful e-commerce management dashboard built with React and Node.js. Features include real-time sales analytics, inventory tracking, order management, and automated reporting. The dark-themed UI provides a professional experience for business owners.",
  },
  {
    title: "Logistics Platform",
    desc: "End-to-end logistics and supply chain management platform for enterprise clients.",
    tags: ["Enterprise", "Logistics", "Platform"],
    img: "https://images.unsplash.com/photo-1773653724410-6f9b4ef1a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGxvZ2lzdGljcyUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzQ5ODE5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDesc: "A comprehensive logistics platform handling fleet management, route optimization, and real-time tracking. Built for enterprise scale with microservices architecture, the platform reduced delivery times by 35% for our client.",
  },
];

export function Portfolio() {
  const { openContact } = useApp();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div>
            <span className="inline-block rounded-full px-4 py-1.5 mb-4" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
              Our Project
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Let's Create Something
            </h2>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, color: "var(--text-white)" }}>
              Amazing!
            </h2>
          </div>
          <div className="flex flex-col justify-end items-start lg:items-end gap-4">
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, maxWidth: 340, textAlign: "right" }}>
              We design clean, intuitive, and engaging user interfaces using modern tools like Figma and Adobe XD—ensuring.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openContact("Let's Talk")}
                className="cursor-pointer rounded-full px-5 py-2.5 transition-all duration-150 hover:scale-105 hover:shadow-[0_0_20px_var(--neon-lime-glow)]"
                style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, border: "none" }}
              >
                Let's Talk
              </button>
              <button
                onClick={() => openContact("Start a Project")}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", background: "none" }}
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 pointer-events-none select-none hidden lg:block" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 200, color: "rgba(255,255,255,0.03)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            WORK
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {projects.map((p, i) => (
              <div
                key={i}
                className="mb-12 cursor-pointer group"
                style={{ marginTop: i % 2 !== 0 && i > 0 ? 60 : 0 }}
                onClick={() => setSelectedProject(i)}
              >
                <div className="rounded-xl overflow-hidden mb-5 relative" style={{ aspectRatio: i % 2 === 0 ? "4/3" : "16/10" }}>
                  <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)" }}>
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--text-white)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6, maxWidth: 400 }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full px-4 py-1.5" style={{ border: "1px solid var(--border-subtle)", color: "var(--text-muted)", fontSize: 12, fontFamily: "var(--font-body)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <>
          <div className="fixed inset-0 z-[100]" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={() => setSelectedProject(null)} />
          <div
            className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[700px] rounded-2xl overflow-hidden"
            style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)", boxShadow: "0 25px 80px rgba(0,0,0,0.6)", animation: "fadeUp 0.3s ease" }}
          >
            <div className="relative" style={{ height: 280 }}>
              <ImageWithFallback src={projects[selectedProject].img} alt={projects[selectedProject].title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{ background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", backdropFilter: "blur(4px)" }}
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[selectedProject].tags.map((t) => (
                  <span key={t} className="rounded-full px-3 py-1" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontSize: 12, fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--text-white)" }}>
                {projects[selectedProject].title}
              </h3>
              <p className="mt-3 mb-6" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>
                {projects[selectedProject].fullDesc}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => { setSelectedProject(null); openContact(`Discuss: ${projects[selectedProject!].title}`); }}
                  className="cursor-pointer rounded-full px-6 py-2.5 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_var(--neon-lime-glow)]"
                  style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, border: "none" }}
                >
                  Start Similar Project
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="cursor-pointer rounded-full px-6 py-2.5 transition-all duration-200 hover:bg-white/5"
                  style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, background: "none" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
