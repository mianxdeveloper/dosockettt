import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Palette,
  Layers,
  Rocket,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Figma,
  Layout,
  Cpu,
  PenTool,
  Sparkles,
  Search,
  Activity,
  Move3d,
  MonitorPlay,
  Share2,
  FileText,
  Star,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Zap,
  Award,
  Heart
} from "lucide-react";
import { useApp } from "../App";

const designSections = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Architecture of Experience",
    description: "We craft digital ecosystems where every interaction is purposeful. By blending behavioral science with world-class aesthetics, we create interfaces that don't just look stunning—they feel like second nature.",
    icon: Figma,
    accent: "#C8FF00",
    features: [
      { name: "User Research", icon: Search, description: "Deep behavioral insights" },
      { name: "Rapid Prototyping", icon: Layout, description: "Iterate at speed" },
      { name: "Interface Systems", icon: Sparkles, description: "Scalable design" },
      { name: "Logic Mapping", icon: Cpu, description: "Intelligent flows" }
    ],
    stats: [
      { label: "Efficiency Boost", value: "45%", trend: "+12%" },
      { label: "User Retention", value: "80%", trend: "+23%" }
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    subtitle: "The Soul of Your Business",
    description: "A brand is a promise kept. We develop visual identities that command authority and evoke emotion, ensuring your company is not just seen, but remembered and trusted.",
    icon: Palette,
    accent: "#C8FF00",
    features: [
      { name: "Identity Audit", icon: Search, description: "Strategic analysis" },
      { name: "Brand Architecture", icon: PenTool, description: "Systematic approach" },
      { name: "Visual Language", icon: Sparkles, description: "Cohesive identity" },
      { name: "Strategic Manuals", icon: FileText, description: "Complete guidelines" }
    ],
    stats: [
      { label: "Brand Recognition", value: "2x", trend: "+100%" },
      { label: "Market Authority", value: "High", trend: "Premium" }
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "High-Impact Communication",
    description: "In a world of infinite scrolls, we create visual anchors. Our graphic systems translate complex messages into clear, compelling narratives that drive action and market performance.",
    icon: Layout,
    accent: "#C8FF00",
    features: [
      { name: "Social Ecosystems", icon: Share2, description: "Engaging content" },
      { name: "Sales Collateral", icon: Layout, description: "Conversion-focused" },
      { name: "Creative Strategy", icon: FileText, description: "Data-driven" },
      { name: "Data Visualization", icon: Activity, description: "Clear insights" }
    ],
    stats: [
      { label: "CTR Increase", value: "30%", trend: "+8%" },
      { label: "Design ROI", value: "400%", trend: "x4" }
    ]
  },
  {
    id: "motion-design",
    title: "Motion Design",
    subtitle: "Fluidity in Motion",
    description: "Motion is the pulse of modern design. We use movement to bridge the gap between static concepts and living experiences, adding a layer of sophisticated polish that captivates and guides.",
    icon: Rocket,
    accent: "#C8FF00",
    features: [
      { name: "Micro-interactions", icon: Cpu, description: "Delightful details" },
      { name: "Product Narratives", icon: MonitorPlay, description: "Story-driven" },
      { name: "Kinetic Identity", icon: Move3d, description: "Dynamic presence" },
      { name: "Lottie Mastery", icon: Rocket, description: "Smooth animations" }
    ],
    stats: [
      { label: "Dwell Time", value: "+120s", trend: "+45s" },
      { label: "Conversion Lift", value: "22%", trend: "+7%" }
    ]
  }
];

// Achievement badges
const achievements = [
  { icon: Award, label: "Awwwards Nominee", year: "2024" },
  { icon: Star, label: "CSSDA Winner", year: "2023" },
  { icon: TrendingUp, label: "FWA Site of Day", year: "2024" },
  { icon: Globe, label: "Global Recognition", year: "2024" }
];

// Trust indicators
const trustIndicators = [
  { icon: Users, label: "Enterprise Clients", value: "150+" },
  { icon: Zap, label: "Projects Delivered", value: "450+" },
  { icon: Heart, label: "Client Satisfaction", value: "98%" },
  { icon: Clock, label: "Avg. Response Time", value: "< 2hrs" }
];

export function Design() {
  const { openContact } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>("ui-ux");

  // Scroll progress for sections
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    designSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#030303] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-main)" }}>

      {/* Global Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C8FF00] z-[200] origin-left"
        style={{ transform: `scaleX(${scrollYProgress.get()})` }}
      />

      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

      {/* Interactive Cursor Glow */}
      <div
        className="fixed pointer-events-none z-[1] w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background: `radial-gradient(circle, #C8FF00 0%, transparent 70%)`,
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div>
            <div className="flex justify-center mb-8">
              <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C8FF00] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                Creative Vertical
              </span>
            </div>

            <h1 className="text-7xl md:text-[9rem] font-black mb-12 leading-[0.85] tracking-tighter">
              AESTHETIC <br />
              <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.3)]">INTELLIGENCE</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium mb-16">
              Our design laboratory pushes the boundaries of visual communication and digital craftsmanship.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-white/0 via-white to-white/0" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="text-center">
                <item.icon className="w-8 h-8 text-[#C8FF00] mx-auto mb-4 opacity-60" />
                <div className="text-3xl font-black mb-2">{item.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/40 font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Sections */}
      {designSections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="py-32 md:py-48 px-6 relative z-10 border-t border-white/5 first:border-t-0"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                <div>
                  <div className="relative">
                    <div className="text-[180px] md:text-[280px] font-black leading-none text-white/5 select-none absolute -top-24 -left-8 z-0">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase">{section.subtitle}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-[#C8FF00]/30 to-transparent" />
                      </div>

                      <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                        {section.title}
                      </h2>

                      <p className="text-xl text-white/40 mb-12 leading-relaxed font-medium">
                        {section.description}
                      </p>

                      <div className="flex flex-wrap gap-12 mb-12">
                        {section.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="group">
                            <div className="text-4xl font-black text-[#C8FF00] mb-1 inline-block">
                              {stat.value}
                            </div>
                            <div className="text-[11px] uppercase font-bold text-white/30 tracking-wider mt-1">{stat.label}</div>
                            <div className="text-[10px] text-[#C8FF00]/50 mt-1">{stat.trend}</div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => openContact(`Project: ${section.title}`)}
                        className="group relative flex items-center gap-6 px-4 py-2"
                      >
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all duration-500">
                          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-wider group-hover:text-[#C8FF00] transition-colors">
                          Explore {section.title}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#C8FF00]/30 hover:bg-white/[0.04] transition-all duration-500"
                    >
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8FF00] mb-6 group-hover:scale-110 group-hover:bg-[#C8FF00] group-hover:text-black transition-all duration-500">
                        <feature.icon size={24} />
                      </div>
                      <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{feature.name}</h4>
                      <p className="text-sm text-white/30 leading-relaxed">{feature.description}</p>
                      <div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C8FF00] transition-all duration-500 mt-4" />
                    </div>
                  ))}

                  {/* Feature Showcase Card */}
                  <div
                    className="md:col-span-2 mt-2 aspect-[2.2/1] rounded-3xl bg-gradient-to-br from-[#C8FF00]/5 to-transparent border border-[#C8FF00]/10 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                    onClick={() => openContact(`Featured: ${section.title}`)}
                  >
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,#C8FF00_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>

                    <div className="relative z-10 text-center">
                      <div className="text-6xl font-black mb-3 opacity-20 group-hover:opacity-100 transition-all uppercase tracking-tighter text-[#C8FF00]">
                        {section.id.split('-')[0]}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors">
                        Visual Module
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#C8FF00]/20 flex items-center justify-center">
                        <ArrowRight size={16} className="text-[#C8FF00]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Achievements Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Accolades</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Industry Recognition
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#C8FF00]/20 transition-all group"
              >
                <achievement.icon className="w-12 h-12 text-[#C8FF00] mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-base font-black uppercase tracking-tight mb-2">{achievement.label}</div>
                <div className="text-xs text-white/30">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center border-t border-white/5 bg-gradient-to-b from-[#030303] to-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Zap size={14} className="text-[#C8FF00]" />
              <span className="text-xs font-black uppercase tracking-wider text-white/60">Limited Slots Available</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
              READY TO <br />
              <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.2)]">TRANSCEND?</span>
            </h2>

            <p className="text-white/40 text-lg mb-16 max-w-2xl mx-auto">
              Join industry leaders who've transformed their digital presence with our design expertise.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button
                onClick={() => openContact("Design Audit")}
                className="group px-12 py-6 bg-[#C8FF00] text-black font-black text-sm uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(200,255,0,0.2)] flex items-center gap-3"
              >
                Start Free Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openContact("Design Consultation")}
                className="px-12 py-6 border border-white/20 text-white font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Schedule Call
              </button>
            </div>

            <div className="mt-16 text-[10px] uppercase tracking-wider text-white/20">
              No obligation • 30-minute discovery • Custom roadmap
            </div>
          </div>
        </div>
      </section>

      <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C8FF00;
          border-radius: 3px;
        }
        
        ::selection {
          background: #C8FF00;
          color: black;
        }
      `}</style>
    </div>
  );
}