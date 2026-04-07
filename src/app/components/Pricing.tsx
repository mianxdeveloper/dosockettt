import React, { useState, useRef, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "motion/react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { useApp } from "../App";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const plans = [
  {
    name: "Basic",
    price: "$499",
    period: "/project",
    description: "Perfect for startups and small businesses testing the waters. Cancel any time.",
    features: [
      "Logo Design", "Brand Color Palette & Typography", "Basic Brand Guidelines",
      "Landing Page", "Mobile Responsive Design", "Contact Form Integration",
      "Basic On-Page SEO Setup", "Social Media Profile Setup", "Source Files Delivery",
      "7–10 Business Days Delivery"
    ],
    buttonLabel: "Book a Free Call",
    popular: false
  },
  {
    name: "Standard",
    price: "$1,299",
    period: "/project",
    description: "For growing businesses ready to build a serious digital presence. Cancel any time.",
    features: [
      "Logo Design", "Full Brand Identity System", "Business Card + Letterhead Design",
      "Social Media Graphics Pack", "UI/UX Design", "Multi-Page Website",
      "WordPress or Webflow Development", "Mobile Responsive + Cross-Browser",
      "CMS Setup", "Blog Setup", "Full On-Page SEO", "Google Analytics + Search Console Setup"
    ],
    buttonLabel: "Book a Free Call",
    popular: true,
    tag: "Most Popular"
  },
  {
    name: "Premium",
    price: "$2,999",
    period: "/project",
    description: "For established businesses that want complete digital presence. Cancel any time.",
    features: [
      "Logo Design", "Full Brand Identity System + Complete Guidelines", "Full Brand Collateral",
      "Social Media Graphics Pack", "Full UI/UX Design", "Wireframing + Interactive Prototyping",
      "Pitch Deck Design", "Custom Website", "WordPress / Webflow / Custom Stack",
      "Advanced CMS Setup", "Blog + Content Management System", "Basic eCommerce"
    ],
    buttonLabel: "Book a Free Call",
    popular: false,
    tag: "Limited Availability"
  },
  {
    name: "Custom / Enterprise",
    price: "Let's Talk",
    period: "Starting from $5,000+",
    description: "Tailored for large businesses and complex projects. Cancel any time.",
    features: [
      "Everything in Premium, Plus:", "Tailored Scope Based on Your Needs",
      "Full-Stack Delivery Team", "Motion Design & Brand Animations",
      "Video Production & Editing", "3D Design & Mockups",
      "Full Marketing Collateral Suite", "Unlimited Pages — Custom Website"
    ],
    buttonLabel: "Book a Free Call",
    popular: false
  }
];

// Comparison table data
const comparisonData = [
  {
    category: "DESIGN",
    features: [
      { name: "Logo Design", basic: "✅ 2 Concepts", standard: "✅ 3 Concepts", premium: "✅ 5 Concepts", custom: "✅ Unlimited" },
      { name: "Full Brand Identity System", basic: "❌", standard: "✅", premium: "✅", custom: "✅" },
      { name: "Brand Collateral (Card, Letterhead)", basic: "❌", standard: "✅", premium: "✅", custom: "✅" },
      { name: "Social Media Graphics Pack", basic: "❌", standard: "✅ 10 Templates", premium: "✅ 20+ Templates", custom: "✅ Full Suite" },
      { name: "UI/UX Design", basic: "❌", standard: "✅ 5 Screens", premium: "✅ 15 Screens", custom: "✅ Unlimited" },
      { name: "Wireframing + Prototyping", basic: "❌", standard: "❌", premium: "✅", custom: "✅" },
      { name: "Pitch Deck Design", basic: "❌", standard: "❌", premium: "✅ 20 Slides", custom: "✅" },
      { name: "Motion Design & Animation", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Video Production", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "3D Design & Mockups", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
    ]
  },
  {
    category: "DEVELOPMENT",
    features: [
      { name: "Landing Page", basic: "✅ 1 Page", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Multi-Page Website", basic: "❌", standard: "✅ 5 Pages", premium: "✅ 10 Pages", custom: "✅ Unlimited" },
      { name: "WordPress / Webflow", basic: "❌", standard: "✅", premium: "✅", custom: "✅" },
      { name: "CMS Setup", basic: "❌", standard: "✅ Basic", premium: "✅ Advanced", custom: "✅ Custom" },
      { name: "Blog Setup", basic: "❌", standard: "✅", premium: "✅", custom: "✅" },
      { name: "eCommerce Store", basic: "❌", standard: "❌", premium: "✅ 50 Products", custom: "✅ Full + Marketplace" },
      { name: "Third-Party Integrations", basic: "❌", standard: "❌", premium: "✅", custom: "✅ Complex" },
      { name: "Custom Web App / SaaS", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Mobile App (iOS + Android)", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Speed & Core Web Vitals Optim.", basic: "❌", standard: "❌", premium: "✅", custom: "✅" },
      { name: "Post-Launch Maintenance", basic: "❌", standard: "✅ 1 Month", premium: "✅ 3 Months", custom: "✅ Long-Term" },
    ]
  },
  {
    category: "DIGITAL MARKETING",
    features: [
      { name: "On-Page SEO", basic: "✅ Basic", standard: "✅ Full", premium: "✅ Full", custom: "✅ Ongoing" },
      { name: "Technical SEO", basic: "❌", standard: "❌", premium: "✅", custom: "✅" },
      { name: "SEO Strategy & Optimization", basic: "❌", standard: "❌", premium: "✅ 3 Months", custom: "✅ Retainer" },
      { name: "GA4 + Search Console Setup", basic: "❌", standard: "✅", premium: "✅ + Heatmap", custom: "✅ Full Suite" },
      { name: "Social Media Management", basic: "❌", standard: "✅ 1 Month / 1 Platform", premium: "✅ 3 Months / 2 Platforms", custom: "✅ Ongoing" },
      { name: "Paid Ads (Google / Meta)", basic: "❌", standard: "❌", premium: "✅ 1 Month", custom: "✅ Multi-Platform" },
      { name: "Content Marketing / Blog Posts", basic: "❌", standard: "❌", premium: "✅ 4 Posts", custom: "✅ Full Strategy" },
      { name: "Email Marketing", basic: "❌", standard: "❌", premium: "✅ Setup + 2 Campaigns", custom: "✅ Full Automation" },
      { name: "CRM & Marketing Automation", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Monthly Performance Reports", basic: "❌", standard: "❌", premium: "✅", custom: "✅ + Quarterly" },
      { name: "Influencer Marketing", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
    ]
  },
  {
    category: "SUPPORT & DELIVERY",
    features: [
      { name: "Dedicated Project Manager", basic: "❌", standard: "✅", premium: "✅", custom: "✅ Account Manager" },
      { name: "Strategy / Discovery Call", basic: "❌", standard: "✅ 1 Hour", premium: "✅ 2 Hours", custom: "✅ Monthly Sessions" },
      { name: "Weekly Progress Updates", basic: "❌", standard: "❌", premium: "✅", custom: "✅" },
      { name: "Priority Support", basic: "❌", standard: "❌", premium: "✅ 24-Hour Response", custom: "✅ SLA-Based" },
      { name: "Post-Launch Support", basic: "❌", standard: "✅ 30 Days", premium: "✅ 90 Days", custom: "✅ Long-Term" },
      { name: "NDA & Contract Protection", basic: "❌", standard: "❌", premium: "✅", custom: "✅" },
      { name: "White-Label Services", basic: "❌", standard: "❌", premium: "❌", custom: "✅" },
      { name: "Source Files Delivery", basic: "✅", standard: "✅", premium: "✅", custom: "✅" },
      { name: "Delivery Time", basic: "7–10 Days", standard: "14–18 Days", premium: "25–30 Days", custom: "Custom Timeline" },
    ]
  }
];

export function Pricing() {
  const { openContact } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [cardHeights, setCardHeights] = useState<Record<number, number>>({});
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggleExpand = (idx: number) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Measure and store the height of Basic plan (index 0) after render
  useEffect(() => {
    if (cardRefs.current[0]) {
      const basicHeight = cardRefs.current[0]?.offsetHeight;
      if (basicHeight) {
        setCardHeights((prev) => ({ ...prev, 0: basicHeight }));
      }
    }
  }, []);

  // Update heights when cards expand/collapse
  useEffect(() => {
    Object.keys(expandedCards).forEach((key) => {
      const idx = parseInt(key);
      if (cardRefs.current[idx] && expandedCards[idx]) {
        const height = cardRefs.current[idx]?.offsetHeight;
        if (height) {
          setCardHeights((prev) => ({ ...prev, [idx]: height }));
        }
      }
    });
  }, [expandedCards]);

  const getCardHeight = (idx: number) => {
    // For Basic plan, use its natural height
    if (idx === 0) return "auto";
    // For expanded cards, use auto height
    if (expandedCards[idx]) return "auto";
    // For non-expanded cards, use Basic plan's height
    if (cardHeights[0]) return `${cardHeights[0]}px`;
    return "auto";
  };

  const renderCellContent = (content: string) => {
    if (content === "❌") {
      return <X size={18} className="text-red-500" />;
    }
    if (content.startsWith("✅")) {
      const text = content.substring(1).trim();
      if (text === "") {
        return <Check size={18} className="text-[var(--neon-lime)]" />;
      }
      return (
        <div className="flex items-center gap-2">
          <Check size={16} className="text-[var(--neon-lime)] shrink-0" />
          <span className="text-sm">{text}</span>
        </div>
      );
    }
    return <span className="text-sm">{content}</span>;
  };

  return (
    <section id="pricing" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <motion.div
        className="max-w-[1400px] mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <button
            className="inline-block rounded-full px-4 py-1.5 mb-6"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}
          >
            Flexible Plans
          </button>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, color: "var(--text-white)", maxWidth: 700, margin: "0 auto", letterSpacing: "-0.02em" }}>
            Simple, transparent <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>pricing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan, idx) => {
            const isExpanded = !!expandedCards[idx];
            const isBasicPlan = idx === 0;
            const hasManyFeatures = plan.features.length > 7;
            const shouldShowSeeMore = !isBasicPlan && hasManyFeatures;

            // Basic plan shows all features, others show limited when not expanded
            const displayedFeatures = isBasicPlan
              ? plan.features
              : (isExpanded ? plan.features : plan.features.slice(0, 7));

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                layout
                transition={{ duration: 0.4, ease: "circOut" }}
                style={{ height: getCardHeight(idx) }}
                className="flex"
              >
                <div
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className="w-full"
                >
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} className="relative rounded-3xl p-8 flex flex-col w-full h-full"
                    style={{ border: plan.popular ? "1px solid var(--neon-lime)" : "1px solid var(--border-subtle)", background: "var(--dark-surface)" }}
                  >
                    {plan.tag && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                        <span className="px-5 py-1.5 rounded-full uppercase shadow-lg"
                          style={{ background: "var(--neon-lime)", color: "#000", fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em" }}>
                          {plan.tag}
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-white)" }}>{plan.name}</h3>
                      <p className="mt-3" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>{plan.description}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 42, color: "var(--text-white)" }}>{plan.price}</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>{plan.period}</span>
                      </div>
                    </div>

                    <div className="flex-1 relative">
                      <ul className="flex flex-col gap-4">
                        <AnimatePresence initial={false}>
                          {displayedFeatures.map((feature, fIdx) => (
                            <motion.li
                              key={fIdx}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-1 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-lime-400/10 text-[var(--neon-lime)]">
                                <Check size={12} strokeWidth={3} />
                              </div>
                              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#d1d5db" }}>{feature}</span>
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>

                      {/* Blurry fade effect - only for non-basic plans when not expanded */}
                      {!isBasicPlan && !isExpanded && hasManyFeatures && (
                        <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
                          style={{ background: "linear-gradient(to bottom, transparent, var(--dark-surface))" }}
                        />
                      )}

                      {/* See More button - only for non-basic plans */}
                      {shouldShowSeeMore && (
                        <div className="flex justify-center w-full mt-6">
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
                            style={{ fontFamily: "var(--font-display)", color: "var(--neon-lime)" }}
                          >
                            {isExpanded ? <><ChevronUp size={14} /> See Less</> : <><ChevronDown size={14} /> See More</>}
                          </button>
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={() => openContact(`Book a Free Call - ${plan.name}`)}
                      className={`mt-10 w-full py-4 rounded-full font-bold transition-all duration-300 hover:scale-[1.03] ${
                        plan.popular 
                          ? "hover:shadow-[0_0_25px_rgba(200,255,0,0.4)]" 
                          : "hover:bg-white/5 hover:border-white/30"
                      }`}
                      style={{
                        background: plan.popular ? "var(--neon-lime)" : "transparent",
                        color: plan.popular ? "#000" : "var(--text-white)",
                        border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
                        fontFamily: "var(--font-display)"
                      }}
                    >
                      {plan.buttonLabel}
                    </button>
                  </Tilt>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table Section */}
        <motion.div
          variants={fadeUp}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <button
              className="inline-block rounded-full px-4 py-1.5 mb-6"
              style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}
            >
              Detailed Comparison
            </button>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, color: "var(--text-white)", maxWidth: 700, margin: "0 auto", letterSpacing: "-0.02em" }}>
              What's included in <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>each plan</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <th className="text-left p-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-white)" }}>
                    Feature / Service
                  </th>
                  <th className="text-center p-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-white)" }}>
                    Basic <span className="block text-sm" style={{ color: "var(--neon-lime)" }}>$499</span>
                  </th>
                  <th className="text-center p-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-white)" }}>
                    Standard <span className="block text-sm" style={{ color: "var(--neon-lime)" }}>$1,299</span>
                  </th>
                  <th className="text-center p-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-white)" }}>
                    Premium <span className="block text-sm" style={{ color: "var(--neon-lime)" }}>$2,999</span>
                  </th>
                  <th className="text-center p-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-white)" }}>
                    Custom <span className="block text-sm" style={{ color: "var(--neon-lime)" }}>$5,000+</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="border-t-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <td colSpan={5} className="p-4" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--neon-lime)", letterSpacing: "-0.01em" }}>
                          {category.category}
                        </span>
                      </td>
                    </tr>
                    {category.features.map((feature, fIdx) => (
                      <tr key={fIdx} className="border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                        <td className="p-4" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>
                          {feature.name}
                        </td>
                        <td className="p-4 text-center">{renderCellContent(feature.basic)}</td>
                        <td className="p-4 text-center">{renderCellContent(feature.standard)}</td>
                        <td className="p-4 text-center">{renderCellContent(feature.premium)}</td>
                        <td className="p-4 text-center">{renderCellContent(feature.custom)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.02]"
              style={{
                background: "var(--neon-lime)",
                color: "#000",
                fontFamily: "var(--font-display)",
                fontSize: 14
              }}
            >
              Not sure which plan fits you? Book a Free Consultation
            </button>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}