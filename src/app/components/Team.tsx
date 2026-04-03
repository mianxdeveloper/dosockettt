import { motion, type Variants } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Instagram } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    name: "Marcus Cole",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    name: "Elena Rostova",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=800",
  }
];

export function Team() {
  return (
    <section id="team" className="py-24" style={{ background: "var(--dark-bg)" }}>
      <motion.div 
        className="max-w-[1240px] mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16" style={{ willChange: "transform, opacity" }}>
          <button
            className="inline-block rounded-full px-4 py-1.5 shrink-0 cursor-default mb-6"
            style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic", border: "none" }}
          >
            The Minds Behind DOSOCKET
          </button>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.2, color: "var(--text-white)", maxWidth: 700, margin: "0 auto" }}>
            Meet our brilliant <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>experts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp} 
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group relative rounded-2xl overflow-hidden" 
              style={{ border: "1px solid var(--border-subtle)", background: "var(--dark-surface)", willChange: "transform, opacity" }}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <ImageWithFallback 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-colors" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-colors" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-white)" }}>
                  {member.name}
                </h3>
                <p className="mt-1" style={{ fontFamily: "var(--font-body)", color: "var(--neon-lime)", fontSize: 14, fontWeight: 500 }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
