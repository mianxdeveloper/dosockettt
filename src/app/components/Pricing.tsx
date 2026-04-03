import { motion, type Variants } from "motion/react";
import { Check } from "lucide-react";
import Tilt from "react-parallax-tilt";

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
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for individuals and freelancers starting their journey.",
    features: [
      "1 User Account", 
      "Up to 5 Active Projects", 
      "Community Support Access", 
      "Basic Analytics Dashboard", 
      "5GB Cloud Storage", 
      "Standard Email Templates", 
      "Weekly Automated Backups", 
      "SSL Certificate Included", 
      "99.0% Uptime Guarantee"
    ],
    buttonLabel: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mo",
    description: "Ideal for small teams and growing businesses needing more power.",
    features: [
      "Up to 5 User Accounts", 
      "Unlimited Active Projects", 
      "24/7 Priority Support", 
      "Advanced Analytics & Reporting", 
      "50GB Cloud Storage", 
      "Custom Email Templates", 
      "Daily Automated Backups", 
      "Advanced Security (2FA)", 
      "99.9% Uptime Guarantee", 
      "Unrestricted API Access", 
      "5 Custom Domains"
    ],
    buttonLabel: "Start Free Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$199",
    period: "/mo",
    description: "Built for established companies prioritizing scale and security.",
    features: [
      "Up to 20 User Accounts", 
      "Unlimited Projects & Spaces", 
      "24/7 Dedicated Support Rep", 
      "AI-Powered Analytics", 
      "500GB Cloud Storage", 
      "White-labeling Options", 
      "Real-time Automated Backups", 
      "Enterprise-Grade Security", 
      "99.99% Uptime SLA", 
      "High-throughput API", 
      "Unlimited Custom Domains"
    ],
    buttonLabel: "Choose Business",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for massive scale and complex requirements.",
    features: [
      "Unlimited User Accounts", 
      "Unlimited Global Ecosystem", 
      "Dedicated Success Manager", 
      "Custom AI Model Training", 
      "Unlimited Cloud Storage", 
      "Complete White-label Suite", 
      "Multi-region Data Redundancy", 
      "Custom Security Protocols", 
      "99.999% Uptime SLA", 
      "Dedicated API Infrastructure", 
      "Multi-tenant Environments"
    ],
    buttonLabel: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <motion.div 
        className="max-w-[1400px] mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16" style={{ willChange: "transform, opacity" }}>
          <button
            className="inline-block rounded-full px-4 py-1.5 shrink-0 cursor-default mb-6"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic", border: "none" }}
          >
            Flexible Plans
          </button>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, color: "var(--text-white)", maxWidth: 700, margin: "0 auto", letterSpacing: "-0.02em" }}>
            Simple, transparent <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>pricing</span>
          </h2>
          <p className="mt-6 mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.6 }}>
            No hidden fees. No structural surprises. Choose the plan that best fits your scale and accelerate your business today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div key={idx} variants={fadeUp} style={{ transformStyle: "preserve-3d" }}>
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                scale={1.02} 
                transitionSpeed={2500} 
                className="relative rounded-3xl p-8 flex flex-col h-full shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                style={{
                  border: plan.popular ? "1px solid var(--neon-lime)" : "1px solid var(--border-subtle)", 
                  background: plan.popular ? "linear-gradient(180deg, var(--dark-surface) 0%, rgba(200,255,0,0.03) 100%)" : "var(--dark-surface)", 
                  willChange: "transform"
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-3 py-1 rounded-full uppercase shadow-lg shadow-[#c8ff0033]" style={{ background: "var(--neon-lime)", color: "#000", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800, letterSpacing: "0.05em" }}>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-white)" }}>
                    {plan.name}
                  </h3>
                  <p className="mt-3" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5, minHeight: 42 }}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-baseline gap-2">
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, color: "var(--text-white)", lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-muted)" }}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0 flex items-center justify-center w-5 h-5 rounded-full shadow-[0_0_10px_rgba(200,255,0,0.2)]" style={{ background: "rgba(200,255,0,0.1)", color: "var(--neon-lime)" }}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#d1d5db" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="mt-10 w-full py-4 rounded-full transition-all duration-200 hover:scale-[1.02]"
                  style={{ 
                    background: plan.popular ? "var(--neon-lime)" : "transparent",
                    color: plan.popular ? "#000" : "var(--text-white)",
                    border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15,
                    boxShadow: plan.popular ? "0 10px 20px rgba(200,255,0,0.15)" : "none"
                  }}
                >
                  {plan.buttonLabel}
                </button>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
