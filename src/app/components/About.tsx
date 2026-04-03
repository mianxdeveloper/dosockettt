import { useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../App";
import { motion, type Variants, useInView, useMotionValue, useSpring } from "motion/react";

function Counter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{decimals > 0 ? '.0' : ''}{suffix}</span>;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const IMG = "https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbiUyMG1lZXRpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc3NDk4MTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function About() {
  const { scrollTo } = useApp();

  return (
    <section id="about" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <motion.div 
        className="max-w-[1240px] mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start mb-16" style={{ willChange: "transform, opacity" }}>
          <button
            onClick={() => scrollTo("about")}
            className="inline-block rounded-full px-4 py-1.5 mt-2 shrink-0 cursor-pointer"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic", border: "none" }}
          >
            About Us
          </button>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.3, color: "var(--text-white)", maxWidth: 800 }}>
            We build <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>innovative software</span> to power your digital future.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
          <div className="flex flex-col gap-4">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-7 cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)]"
              onClick={() => scrollTo("work")}
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)", willChange: "transform, opacity" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px, 5vw, 56px)", color: "var(--text-white)", lineHeight: 1.1 }}>
                <Counter value={1.2} prefix="$" suffix="B" decimals={1} />
              </div>
              <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>
                • Reach of <span style={{ color: "var(--text-white)" }}>User's Using the Platform Now</span>
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-7 cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)]"
              onClick={() => scrollTo("testimonials")}
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)", willChange: "transform, opacity" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px, 5vw, 56px)", color: "var(--text-white)", lineHeight: 1.1, fontStyle: "italic" }}>
                <Counter value={89} suffix="%" />
              </div>
              <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>
                • Average Client Retention Rate
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-7 cursor-pointer transition-all duration-200 hover:border-[var(--border-hover)]"
              onClick={() => scrollTo("work")}
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)", willChange: "transform, opacity" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px, 5vw, 56px)", color: "var(--text-white)", lineHeight: 1.1 }}>
                <Counter value={250} suffix="+" />
              </div>
              <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>
                • Successful <span style={{ color: "var(--text-white)" }}>Digital Product Launches</span>
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border-subtle)", willChange: "transform, opacity" }}>
            <ImageWithFallback src={IMG} alt="Team meeting" className="w-full h-full object-cover" style={{ minHeight: 400 }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
