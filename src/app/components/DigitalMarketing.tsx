import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Megaphone,
  TrendingUp,
  Target,
  BarChart3,
  Share2,
  Mail,
  Search,
  Zap,
  Globe,
  Users,
  MessageSquare,
  MousePointer2,
  PieChart,
  LineChart,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Heart,
  FileText,
  Star,
  Eye,
  Radio,
  Settings,
  Activity
} from "lucide-react";
import { useApp } from "../App";

const marketingSections = [
  {
    id: "seo",
    title: "Search Dominance",
    subtitle: "Algorithmic Authority",
    description: "In the digital landscape, visibility is the ultimate currency. We deploy advanced SEO strategies that place your brand at the absolute summit of search results, ensuring you're not just found, but chosen as the definitive authority in your space.",
    icon: Search,
    accent: "#C8FF00",
    features: [
      { name: "Technical SEO", icon: Target, description: "Precision site architecture" },
      { name: "Content Clusters", icon: Sparkles, description: "Topical authority mapping" },
      { name: "Backlink Ecosystems", icon: Globe, description: "High-value network building" },
      { name: "Local Optimization", icon: MousePointer2, description: "Hyper-targeted visibility" }
    ],
    stats: [
      { label: "Organic Growth", value: "340%", trend: "+120% vs industry" },
      { label: "Top 3 Rankings", value: "850+", trend: "+45 keywords" }
    ],
    platforms: ["Google", "Bing", "Yahoo", "DuckDuckGo"]
  },
  {
    id: "social-media-ads",
    title: "Social Resonance",
    subtitle: "Paid Media Mastery",
    description: "Capture attention where it lives. Our data-driven paid advertising and organic social strategies create a powerful resonance across Meta, Google, and beyond, driving high-intent traffic and undeniable ROI through creative excellence.",
    icon: Megaphone,
    accent: "#C8FF00",
    features: [
      { name: "Precision Ad Ops", icon: PieChart, description: "Meta & Google Ads mastery" },
      { name: "Social Narrative", icon: MessageSquare, description: "Engagement-focused storytelling" },
      { name: "Audience Architect", icon: Users, description: "Hyper-segmentation strategy" },
      { name: "Funnel Retargeting", icon: Share2, description: "Full-lifecycle conversion" }
    ],
    stats: [
      { label: "Average ROAS", value: "4.8x", trend: "+0.6x above avg" },
      { label: "Lower CPA", value: "-42%", trend: "Industry leading" }
    ],
    platforms: ["Meta", "TikTok", "LinkedIn", "Twitter/X"]
  },
  {
    id: "content-copywriting",
    title: "Content Strategy",
    subtitle: "Narrative Intelligence",
    description: "Words carry weight; stories drive action. We craft compelling narratives and high-conversion copy that bridge the gap between your brand's vision and your audience's needs, creating a lasting emotional connection that scales.",
    icon: FileText,
    accent: "#C8FF00",
    features: [
      { name: "Brand Voice", icon: Sparkles, description: "Unique sonic & visual tone" },
      { name: "Conversion Copy", icon: MousePointer2, description: "Psychology-rooted writing" },
      { name: "Technical Guides", icon: FileText, description: "Authority-building depth" },
      { name: "Video Storyboards", icon: Share2, description: "Multi-modal messaging" }
    ],
    stats: [
      { label: "Read Duration", value: "+180s", trend: "+45s engagement" },
      { label: "Inbound Leads", value: "+65%", trend: "+22% conversion" }
    ],
    platforms: ["Web", "Email", "Social", "Video"]
  },
  {
    id: "digital-strategy",
    title: "Growth Infrastructure",
    subtitle: "Predictable Expansion",
    description: "Scaling requires more than just marketing; it requires a roadmap. We build comprehensive digital strategies and email automation cycles that turn one-time visitors into lifelong advocates, creating a predictable engine for sustainable growth.",
    icon: TrendingUp,
    accent: "#C8FF00",
    features: [
      { name: "Email Automation", icon: Mail, description: "Pre-programmed nurturing" },
      { name: "Retention Loops", icon: Heart, description: "Customer LTV maximization" },
      { name: "Omnichannel Map", icon: Share2, description: "Unified growth trajectory" },
      { name: "Data Intel", icon: BarChart3, description: "Predictive performance" }
    ],
    stats: [
      { label: "Email Revenue", value: "35%", trend: "Total share" },
      { label: "LTV Increase", value: "+40%", trend: "+15% YoY" }
    ],
    platforms: ["Klaviyo", "HubSpot", "Salesforce", "Marketo"]
  }
];

// Enhanced achievements
const achievements = [
  { icon: Award, label: "Google Premier Partner", year: "2024" },
  { icon: Target, label: "Meta Certified", year: "2023" },
  { icon: TrendingUp, label: "Growth Agency '24", year: "2024" },
  { icon: Star, label: "5-Star Rated", year: "2024" }
];

// Enhanced trust indicators
const trustIndicators = [
  { icon: Users, label: "Brands Scaled", value: "200+", suffix: "" },
  { icon: Zap, label: "Ad Spend Managed", value: "$12M", suffix: "+" },
  { icon: Heart, label: "Client Retention", value: "94%", suffix: "" },
  { icon: Eye, label: "Monthly Impressions", value: "50M", suffix: "+" }
];

// Service badges
const serviceBadges = [
  "SEO Audit",
  "PPC Management",
  "Content Marketing",
  "Social Media",
  "Email Automation",
  "Analytics Setup",
  "Conversion Rate",
  "Brand Strategy"
];

const marketingDetailData: Record<string, any> = {
  "seo": {
    title: "Search Dominance",
    subtitle: "Algorithmic Authority",
    description: "In the digital landscape, visibility is the ultimate currency. We deploy advanced SEO strategies that place your brand at the absolute summit of search results, ensuring you're not just found, but chosen as the definitive authority in your space.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074",
    details: [
      "Technical Core Audit",
      "Semantic keyword mapping",
      "High-authority Link Acquisition",
      "Local Search Optimization",
      "Schema & JSON-LD Implementation",
      "Competitor Gap Analysis"
    ]
  },
  "social-media-ads": {
    title: "Social Resonance",
    subtitle: "Paid Media Mastery",
    description: "Capture attention where it lives. Our data-driven paid advertising and organic social strategies create a powerful resonance across Meta, Google, and beyond, driving high-intent traffic and undeniable ROI through creative excellence.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2067",
    details: [
      "Meta/TikTok/Google Ad Ops",
      "Creative Concepting & A/B testing",
      "Hyper-targeted Custom Audiences",
      "Dynamic Product Ads (DPA)",
      "Omnichannel Attribution tracking",
      "UGC Content Strategy"
    ]
  },
  "content-copywriting": {
    title: "Content Strategy",
    subtitle: "Narrative Intelligence",
    description: "Words carry weight; stories drive action. We craft compelling narratives and high-conversion copy that bridge the gap between your brand's vision and your audience's needs, creating a lasting emotional connection that scales.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070",
    details: [
      "Thought Leadership Articles",
      "Conversion-optimized Sales Copy",
      "Product Description Overhauls",
      "Email Marketing Sequences",
      "Brand Voice Documentation",
      "Technical Whitepapers"
    ]
  },
  "digital-strategy": {
    title: "Growth Infrastructure",
    subtitle: "Predictable Expansion",
    description: "Scaling requires more than just marketing; it requires a roadmap. We build comprehensive digital strategies and email automation cycles that turn one-time visitors into lifelong advocates, creating a predictable engine for sustainable growth.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    details: [
      "Customer Lifecycle Mapping",
      "Retention & Loyalty Strategy",
      "Marketing Technology (MarTech) Sync",
      "Conversion Rate Optimization (CRO)",
      "Predictive Data Analytics",
      "Full-funnel Growth Roadmap"
    ]
  }
};

export function DigitalMarketing() {
  const { openContact, openDetail } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>("seo");

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

    marketingSections.forEach((section) => {
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
        style={{ background: `radial-gradient(circle, #C8FF00 0%, transparent 70%)`, left: mousePos.x - 300, top: mousePos.y - 300 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C8FF00] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              Content & Growth Vertical
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-12 leading-[0.85] tracking-tighter">
            ALGORITHMIC <br />
            <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.3)]">DOMINANCE</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-normal mb-12">
            Data meets narrative. We decode digital behavior to drive exponential growth and undeniable market presence.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {serviceBadges.slice(0, 4).map((badge, idx) => (
              <span key={idx} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/40 border border-white/10 rounded-full hover:border-[#C8FF00]/30 hover:text-white/60 transition-colors">
                {badge}
              </span>
            ))}
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

      {/* Main Sections */}
      {marketingSections.map((section, idx) => (
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

                    {/* Platforms Section */}
                    <div className="mb-10">
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-3">Key Platforms</div>
                      <div className="flex flex-wrap gap-2">
                        {section.platforms.map((platform, pIdx) => (
                          <span key={pIdx} className="px-3 py-1 text-xs font-mono text-white/60 bg-white/5 border border-white/10 rounded-full">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => openDetail(marketingDetailData[section.id])}
                      className="group relative flex items-center gap-6 px-4 py-2"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all duration-500">
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider group-hover:text-[#C8FF00] transition-colors">
                        Strategic Discovery
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

                {/* Performance Indicator */}
                <div 
                  className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-[#C8FF00]/5 to-transparent border border-[#C8FF00]/10 cursor-pointer hover:bg-[#C8FF00]/10 transition-all"
                  onClick={() => openDetail(marketingDetailData[section.id])}
                >
                  <div className="flex items-center gap-4">
                    <Radio size={32} className="text-[#C8FF00] opacity-60" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/40 font-normal">Real-Time Analytics</div>
                      <div className="text-sm font-mono text-white/60">Live Dashboard • Custom Reports • ROI Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Badges Section */}
      <section className="py-32 px-[5%] border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Full-Service Marketing
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for every stage of the customer journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceBadges.map((badge, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C8FF00]/20 transition-all group">
                <div className="w-2 h-2 rounded-full bg-[#C8FF00] mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                  {badge}
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
            <span className="text-[#C8FF00] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Impact</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Market Recognition
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
            <span className="text-xs font-black uppercase tracking-wider text-white/60">Scale Your Growth Today</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            READY TO <br />
            <span className="text-[#C8FF00] [text-shadow:0_0_30px_rgba(200,255,0,0.2)]">TRANSFORM?</span>
          </h2>

          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">
            Join industry leaders who have successfully cracked the code of digital resonance.
            Your brand's evolution starts here.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={() => openContact("Growth Audit")}
              className="group px-12 py-6 bg-[#C8FF00] text-black font-black text-sm uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(200,255,0,0.2)] flex items-center gap-3"
            >
              Start Growth Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openContact("Marketing Call")}
              className="px-12 py-6 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Consult Expert
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-wider text-white/20">
            <span>✓ Data-Driven Decisions</span>
            <span>✓ Transparent Reporting</span>
            <span>✓ Dedicated Team</span>
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