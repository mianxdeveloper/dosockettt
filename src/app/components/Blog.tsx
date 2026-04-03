import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, X } from "lucide-react";
import { useApp } from "../App";

const BLOG_IMG = "https://images.unsplash.com/photo-1630265947548-994d8bf4d895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzQ5ODE5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const posts = [
  {
    title: "Why Your Brand Needs a Design System",
    tag: "UI/UX Design",
    date: "20 Feb 2025",
    hasImage: false,
    content: "A design system is the backbone of any scalable brand. It ensures consistency across all touchpoints, speeds up design and development workflows, and creates a shared language between teams. In this article, we explore why investing in a design system early can save you thousands of hours down the road.",
  },
  {
    title: "The Future of Mobile-First Development",
    tag: "Development",
    date: "15 Mar 2025",
    hasImage: true,
    content: "With mobile traffic surpassing desktop globally, mobile-first development is no longer optional — it's essential. We dive into progressive web apps, responsive frameworks, and performance optimization techniques that define the next generation of mobile experiences.",
  },
  {
    title: "How AI is Transforming Creative Agencies",
    tag: "Technology",
    date: "10 Jan 2025",
    hasImage: false,
    content: "Artificial intelligence is reshaping how creative agencies operate — from automated design suggestions to AI-powered content generation. Learn how forward-thinking agencies are leveraging AI tools to deliver better work, faster, without sacrificing creativity.",
  },
];

export function Blog() {
  const { showToast } = useApp();
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <section id="blog" className="py-24" style={{ background: "var(--dark-surface-deep)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="inline-block rounded-full px-4 py-1.5 mb-4" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, fontStyle: "italic" }}>
              Blogs
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>Read Our</h2>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: "var(--text-white)" }}>—Insight</h2>
          </div>
          <button
            onClick={() => showToast("More blog posts coming soon!")}
            className="cursor-pointer rounded-full px-6 py-2.5 transition-all duration-200 hover:bg-white/5 shrink-0"
            style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, background: "none" }}
          >
            More Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[var(--border-hover)] cursor-pointer group"
              style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)" }}
              onClick={() => setSelectedPost(i)}
            >
              <div className="relative" style={{ minHeight: 220 }}>
                {p.hasImage ? (
                  <ImageWithFallback src={BLOG_IMG} alt={p.title} className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full absolute inset-0 transition-all duration-300 group-hover:opacity-80" style={{ background: "linear-gradient(180deg, var(--dark-surface-2) 0%, var(--dark-surface) 100%)" }} />
                )}

                <div className="relative z-10 flex items-center justify-between p-4">
                  <span className="rounded-full px-3 py-1" style={{ background: i === 1 ? "var(--neon-lime)" : "transparent", color: i === 1 ? "var(--dark-bg)" : "var(--text-muted)", border: i === 1 ? "none" : "1px solid var(--border-subtle)", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500 }}>
                    {p.tag}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)" }}>{p.date}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-white)", lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedPost(i); }}
                  className="flex items-center gap-2 mt-4 cursor-pointer transition-colors duration-200 hover:text-[var(--neon-lime)]"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 13, background: "none", border: "none", padding: 0, textAlign: "left" }}
                >
                  Explore More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost !== null && (
        <>
          <div className="fixed inset-0 z-[100]" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={() => setSelectedPost(null)} />
          <div
            className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
            style={{ background: "var(--dark-surface)", border: "1px solid var(--border-subtle)", boxShadow: "0 25px 80px rgba(0,0,0,0.6)", animation: "fadeUp 0.3s ease" }}
          >
            {posts[selectedPost].hasImage && (
              <div style={{ height: 220 }}>
                <ImageWithFallback src={BLOG_IMG} alt={posts[selectedPost].title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10"
                style={{ color: "var(--text-muted)", background: "none", border: "none" }}
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full px-3 py-1" style={{ background: "var(--neon-lime)", color: "var(--dark-bg)", fontSize: 12, fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {posts[selectedPost].tag}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)" }}>{posts[selectedPost].date}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--text-white)", lineHeight: 1.3 }}>
                {posts[selectedPost].title}
              </h3>

              <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8 }}>
                {posts[selectedPost].content}
              </p>

              <button
                onClick={() => setSelectedPost(null)}
                className="mt-6 cursor-pointer rounded-full px-6 py-2.5 transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-white)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, background: "none" }}
              >
                Close Article
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
