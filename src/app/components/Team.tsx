import { motion, type Variants } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Instagram } from "lucide-react";

import abdullahImg from "../../assets/abdullah.jpeg";
import qasimImg from "../../assets/qasim.jpeg";
import abdulrehmanImg from "../../assets/abdulrehman.jpeg";
import basitImg from "../../assets/basit.jpeg";
import sameerImg from "../../assets/sameer.jpeg";

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
    name: "Abdullah al Mahin",
    role: "Sr. Team Lead Manager",
    image: abdullahImg,
    linkedin: "https://linkedin.in/in/mahinflux/",
  },
  {
    name: "Qasim Ali",
    role: "CEO and Founder",
    image: qasimImg,
    linkedin: "https://www.linkedin.com/in/icuxqasimali/",
  },
  {
    name: "Abdul Rehman",
    role: "Sr. Front End Developer",
    image: abdulrehmanImg,
    linkedin: "https://www.linkedin.com/in/mianxdeveloper/",
  },
  {
    name: "Abdul Basit",
    role: "Marketing Manager",
    image: basitImg,
    linkedin: "https://www.linkedin.com/in/abdul-basit-4983a7281",
  },
  {
    name: "Sameer Shayan",
    role: "Sales Manager",
    image: sameerImg,
    linkedin: "https://www.linkedin.com/in/sameer-shayan-174407278",
  },
  {
    name: "Eric",
    role: "Digital Marketing Manager",
    image: "https://avatar.iran.liara.run/public/boy?username=Eric",
    linkedin: "#",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                  style={{ objectPosition: "top" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-all duration-300 transform scale-90 group-hover:scale-100"
                    style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
                  >
                    <Linkedin size={22} />
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
