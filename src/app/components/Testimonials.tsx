import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
];

const testimonials = [
  { name: "Valentine Syumka", role: "E-commerce Business Owner", quote: "I'm extremely satisfied working with Dosocket. The design quality was top-notch, and they delivered everything on time.", rating: 5, avatar: AVATARS[0] },
  { name: "Saiful Talukdar", role: "Startup Founder", quote: "The team at Dosocket transformed our entire digital presence. From branding to development, every detail was handled with care.", rating: 5, avatar: AVATARS[1] },
  { name: "Aminul Islam", role: "Tech Lead at FinCorp", quote: "Working with this agency has been a game changer. Their technical expertise helped us build a platform our users love.", rating: 5, avatar: AVATARS[2] },
  { name: "Tonmoy Hasan", role: "Marketing Director", quote: "Exceptional work from start to finish. The team understood our vision perfectly and delivered beyond expectations.", rating: 5, avatar: AVATARS[3] },
  { name: "Sarah Jenkins", role: "Product Manager", quote: "Digital marketing strategies that actually work. Our lead generation tripled in just three months.", rating: 5, avatar: AVATARS[4] },
  { name: "Michael Chen", role: "SaaS Founder", quote: "The development speed and code quality are unmatched. They truly understand modern technical requirements.", rating: 5, avatar: AVATARS[5] },
  { name: "Elena Rossi", role: "Creative Director", quote: "Dosocket's eye for design is revolutionary. Our brand has never looked more professional and modern.", rating: 5, avatar: AVATARS[1] },
  { name: "James Wilson", role: "Operations Head", quote: "A seamless collaboration. They are responsive, creative, and highly technically capable. 10/10 recommendation.", rating: 5, avatar: AVATARS[2] },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    },
  },
} as const;

const marqueeReverseVariants = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 65,
        ease: "linear",
      },
    },
  },
} as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "var(--dark-bg)" }}>
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--neon-lime-glow)] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full px-4 py-1.5 mb-6" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
            Wall of Love
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1, color: "var(--text-white)", marginBottom: 16 }}>
            What <span style={{ fontStyle: "italic", color: "var(--neon-lime)" }}>Digital Leaders</span>
          </h2>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1, color: "var(--text-white)" }}>
            Say About Our Work
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6 w-full overflow-hidden">
        {/* First Row */}
        <div className="flex w-fit group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap pr-6"
            variants={marqueeVariants}
            animate="animate"
            whileHover={{ transition: { duration: 80 } }} // Slow down on hover
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex w-fit group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap pr-6"
            variants={marqueeReverseVariants}
            animate="animate"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div 
      className="inline-block w-[360px] p-8 rounded-[24px] transition-all duration-300 border hover:border-[var(--neon-lime)]/40 hover:translate-y-[-4px]"
      style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(8px)", borderColor: "rgba(255, 255, 255, 0.08)" }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="var(--neon-lime)" color="var(--neon-lime)" />
        ))}
      </div>
      
      <p className="mb-8 whitespace-normal leading-[1.6]" style={{ fontFamily: "var(--font-body)", color: "var(--text-white)", fontSize: 16, fontWeight: 400 }}>
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10">
          <ImageWithFallback src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-white)", margin: 0 }}>
            {testimonial.name}
            <div className="w-3 h-3 rounded-full bg-[#C8FF00] flex items-center justify-center">
              <svg viewBox="0 0 10 10" className="w-1.5 h-1.5 text-black"><path d="M2 5l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
          </h4>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
