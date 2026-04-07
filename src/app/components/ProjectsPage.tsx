import { Portfolio } from "./Portfolio";
import { motion } from "motion/react";

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        paddingTop: "120px", 
        minHeight: "100vh", 
        background: "var(--dark-bg)",
        fontFamily: "var(--font-main)" 
      }}
    >
      <div className="max-w-[1240px] mx-auto px-[5%] mb-12">
        <h1 
          className="mb-8"
          style={{ 
            fontFamily: "var(--font-display)", 
            fontWeight: 800, 
            fontSize: "clamp(48px, 8vw, 96px)", 
            lineHeight: 1, 
            color: "var(--text-white)",
            letterSpacing: "-0.04em"
          }}
        >
          Selected <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>Works</span>
        </h1>
        <p 
          style={{ 
            fontFamily: "var(--font-body)", 
            color: "var(--text-muted)", 
            fontSize: "clamp(16px, 1.5vw, 20px)", 
            lineHeight: 1.6, 
            maxWidth: "600px" 
          }}
        >
          Explore our portfolio of premium digital experiences, from high-converting branding to complex enterprise solutions.
        </p>
      </div>
      
      <Portfolio />
    </motion.div>
  );
}
