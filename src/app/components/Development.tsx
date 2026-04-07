import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Code,
  Laptop,
  Smartphone,
  ShoppingCart,
  Database,
  Globe,
  Zap,
  Shield,
  Search,
  Activity,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Settings,
  Globe2,
  Lock,
  Workflow,
  Cloud,
  Server,
  GitBranch,
  Terminal,
  Award,
  TrendingUp,
  Users,
  Clock,
  Heart
} from "lucide-react";
import { useApp } from "../App";

const devSections = [
  {
    id: "web-architecture",
    title: "Web Architecture",
    subtitle: "High-Performance Foundations",
    description: "We engineer digital infrastructures that are as robust as they are beautiful. From complex enterprise web applications to high-conversion landing pages, our code is optimized for speed, scalability, and seamless user experiences.",
    icon: Code,
    accent: "#C8FF00",
    features: [
      { name: "Full-Stack Development", icon: Layers, description: "End-to-end engineering solutions" },
      { name: "Progressive Web Apps", icon: Globe, description: "App-like experiences on web" },
      { name: "API Integration", icon: Database, description: "Seamless data connectivity" },
      { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable hosting solutions" }
    ],
    stats: [
      { label: "Performance Score", value: "98/100", trend: "Top 1%" },
      { label: "Load Time", value: "0.8s", trend: "60% faster" }
    ],
    techStack: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    id: "ecommerce",
    title: "eCommerce Solutions",
    subtitle: "Fluid Digital Commerce",
    description: "Scale your revenue with frictionless shopping experiences. We build sophisticated eCommerce platforms that turn browsers into buyers through intuitive navigation, secure payment processing, and high-performance product discovery.",
    icon: ShoppingCart,
    accent: "#C8FF00",
    features: [
      { name: "Custom Checkout", icon: Lock, description: "Secure & optimized flows" },
      { name: "Inventory Systems", icon: Settings, description: "Real-time management" },
      { name: "Multi-Currency", icon: Globe2, description: "Global trade readiness" },
      { name: "Conversion Analytics", icon: BarChart3, description: "Data-driven growth" }
    ],
    stats: [
      { label: "Sales Growth", value: "2.5x", trend: "+150% revenue" },
      { label: "Cart Completion", value: "72%", trend: "+28% industry avg" }
    ],
    techStack: ["Shopify", "WooCommerce", "Stripe", "Magento"]
  },
  {
    id: "mobile-apps",
    title: "Mobile Ecosystems",
    subtitle: "Native & Hybrid Mastery",
    description: "The world is mobile. We deliver exceptional iOS and Android experiences that leverage the full potential of hardware capabilities while maintaining a unified, premium brand presence across all devices.",
    icon: Smartphone,
    accent: "#C8FF00",
    features: [
      { name: "iOS/Android Native", icon: Smartphone, description: "Platform-specific polish" },
      { name: "Cross-Platform", icon: Workflow, description: "Efficient unified codebase" },
      { name: "Offline Readiness", icon: Zap, description: "Performance everywhere" },
      { name: "Biometric Security", icon: Shield, description: "FaceID & TouchID ready" }
    ],
    stats: [
      { label: "App Store Rating", value: "4.9", trend: "Top Rated" },
      { label: "Active Users", value: "50k+", trend: "+45% MoM" }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    id: "strategic-engineering",
    title: "Strategic Engineering",
    subtitle: "Continuous Optimization",
    description: "Great software is never finished. We provide dedicated support and proactive maintenance to ensure your digital assets remain secure, updated, and highly competitive through deep research and technical evolution.",
    icon: Settings,
    accent: "#C8FF00",
    features: [
      { name: "Security Audits", icon: Shield, description: "Proactive protection" },
      { name: "Speed Optimization", icon: Zap, description: "Core Web Vitals mastery" },
      { name: "Competitor Analysis", icon: Search, description: "Market-leading insights" },
      { name: "Uptime Monitoring", icon: Activity, description: "24/7 reliability" }
    ],
    stats: [
      { label: "Platform Uptime", value: "99.99%", trend: "Enterprise grade" },
      { label: "Response Time", value: "< 15m", trend: "Critical priority" }
    ],
    techStack: ["Docker", "K8s", "New Relic", "GitHub Actions"]
  }
];

// Enhanced achievements
const achievements = [
  { icon: Award, label: "AWS Advanced Partner", year: "2024" },
  { icon: TrendingUp, label: "Fastest Growing Tech", year: "2024" },
  { icon: Shield, label: "ISO 27001 Certified", year: "2024" },
  { icon: Users, label: "50+ Engineers Global", year: "2024" }
];

// Enhanced trust indicators
const trustIndicators = [
  { icon: Code, label: "Lines of Clean Code", value: "1.2M+", suffix: "" },
  { icon: Zap, label: "API Requests/Day", value: "1.3M", suffix: "+" },
  { icon: Globe, label: "Countries Served", value: "40", suffix: "+" },
  { icon: Shield, label: "Secure Transactions", value: "$50M", suffix: "+" }
];

// Methodology badges
const methodologies = [
  "Agile Development",
  "CI/CD Pipeline",
  "Test-Driven Dev",
  "DevOps Culture",
  "Security First",
  "Performance Focused"
];

const devDetailData: Record<string, any> = {
  "web-architecture": {
    title: "Web Architecture",
    subtitle: "High-Performance Foundations",
    description: "We engineer digital infrastructures that are as robust as they are beautiful. From complex enterprise web applications to high-conversion landing pages, our code is optimized for speed, scalability, and seamless user experiences.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    details: [
      "Custom React/Next.js Architecture",
      "Headless CMS Integration",
      "Serverless Backend Logic",
      "Micro-frontend Implementation",
      "Extreme Core Web Vitals Optimization",
      "CI/CD Pipeline Engineering"
    ]
  },
  "ecommerce": {
    title: "eCommerce Solutions",
    subtitle: "Fluid Digital Commerce",
    description: "Scale your revenue with frictionless shopping experiences. We build sophisticated eCommerce platforms that turn browsers into buyers through intuitive navigation, secure payment processing, and high-performance product discovery.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2074",
    details: [
      "Custom Shopify Plus Development",
      "Complex Product Configurators",
      "Third-party ERP/CRM Sync",
      "Dynamic Pricing Engines",
      "Internationalization (Multi-region)",
      "High-security Payment Bridges"
    ]
  },
  "mobile-apps": {
    title: "Mobile Ecosystems",
    subtitle: "Native & Hybrid Mastery",
    description: "The world is mobile. We deliver exceptional iOS and Android experiences that leverage the full potential of hardware capabilities while maintaining a unified, premium brand presence across all devices.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    details: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-platform (React Native/Flutter)",
      "Bluetooth & IoT Integration",
      "Offline-first Sync Engines",
      "Biometric Authentication",
      "Apple/Google Pay Integration"
    ]
  },
  "strategic-engineering": {
    title: "Strategic Engineering",
    subtitle: "Continuous Optimization",
    description: "Great software is never finished. We provide dedicated support and proactive maintenance to ensure your digital assets remain secure, updated, and highly competitive through deep research and technical evolution.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1451187530221-8960faef1db3?q=80&w=2070",
    details: [
      "24/7 Infrastructure Monitoring",
      "Security Patching & Penetration Tests",
      "Database Tuning & Optimization",
      "Cloud Migration Strategies",
      "Legality/Compliance (GDPR/HIPAA)",
      "Custom Tech-stack Consulting"
    ]
  }
};

export function Development() {
  const { openContact, openDetail } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>("web-architecture");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

    devSections.forEach((section) => {
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
        className="fixed pointer-events-none z-[1] w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px] transition-all duration-300"
        style={{
          background: `radial-gradient(circle, #C8FF00 0%, transparent 70%)`,
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div>
            <div className="flex justify-center mb-8">
              <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C8FF00] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                Engineering Vertical
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-12 leading-[0.85] tracking-tighter">
              TECHNICAL <br />
              <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.3)]">EXCELLENCE</span>
            </h1>

            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-normal mb-12">
              Where sophisticated architecture meets clean, scalable code. We build the future of the web.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {methodologies.slice(0, 3).map((method, idx) => (
                <span key={idx} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/40 border border-white/10 rounded-full">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-white/0 via-white to-white/0" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-[5%] border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="text-center group">
                <item.icon className="w-8 h-8 text-[#C8FF00] mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl font-black mb-2">
                  {item.value}{item.suffix}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/40 font-normal">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {devSections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="py-32 md:py-48 px-[5%] relative z-10 border-t border-white/5 first:border-t-0"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
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

                    <p className="text-xl text-white/40 mb-10 leading-relaxed font-normal">
                      {section.description}
                    </p>

                    <div className="flex flex-wrap gap-12 mb-10">
                      {section.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="group">
                          <div className="text-4xl font-black text-[#C8FF00] mb-1 inline-block group-hover:scale-105 transition-transform">
                            {stat.value}
                          </div>
                          <div className="text-[11px] uppercase font-normal text-white/30 tracking-wider mt-1">{stat.label}</div>
                          <div className="text-[10px] text-[#C8FF00]/50 mt-1">{stat.trend}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mb-10">
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-3">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {section.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 text-xs font-mono text-white/60 bg-white/5 border border-white/10 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => openDetail(devDetailData[section.id])}
                      className="group relative flex items-center gap-6 px-4 py-2"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all duration-500">
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider group-hover:text-[#C8FF00] transition-colors">
                        Start Engineering Discovery
                      </span>
                    </button>
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
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.name}</h4>
                      <p className="text-sm text-white/30 leading-relaxed font-normal">{feature.description}</p>
                      <div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C8FF00] transition-all duration-500 mt-4" />
                    </div>
                  ))}
                </div>

                {/* Architecture Badge */}
                <div 
                  className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-[#C8FF00]/5 to-transparent border border-[#C8FF00]/10 cursor-pointer hover:bg-[#C8FF00]/10 transition-all"
                  onClick={() => openDetail(devDetailData[section.id])}
                >
                  <div className="flex items-center gap-4">
                    <Server size={32} className="text-[#C8FF00] opacity-60" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/40 font-normal">Architecture Excellence</div>
                      <div className="text-sm font-mono text-white/60">Microservices • Event-Driven • Cloud-Native</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology Section */}
      <section className="py-32 px-[5%] border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Engineering Methodology
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              A disciplined approach to building exceptional software
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {methodologies.map((method, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C8FF00]/20 transition-all group">
                <div className="w-2 h-2 rounded-full bg-[#C8FF00] mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-[5%] border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Benchmarks</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Performance Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#C8FF00]/20 transition-all group"
              >
                <achievement.icon className="w-12 h-12 text-[#C8FF00] mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-base font-bold uppercase tracking-tight mb-2">{achievement.label}</div>
                <div className="text-xs text-white/30">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-[5%] text-center border-t border-white/5 bg-gradient-to-b from-[#030303] to-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Zap size={14} className="text-[#C8FF00]" />
            <span className="text-xs font-black uppercase tracking-wider text-white/60">Scale Your Stack Today</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            READY TO <br />
            <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.2)]">BUILD?</span>
          </h2>

          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">
            Our lead engineers are ready to architect your next digital breakthrough.
            Let's build something indestructible.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={() => openContact("Technical Roadmap")}
              className="group px-12 py-6 bg-[#C8FF00] text-black font-black text-sm uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(200,255,0,0.2)] flex items-center gap-3"
            >
              Get Custom Roadmap
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openContact("Tech Consultation")}
              className="px-12 py-6 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Consult Developer
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-wider text-white/20">
            <span>✓ 24/7 Support</span>
            <span>✓ Enterprise Security</span>
            <span>✓ Global Infrastructure</span>
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