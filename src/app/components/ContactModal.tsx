import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ContactModal({ isOpen, onClose, title = "Let's Talk" }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2000);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] transition-opacity duration-300"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[500px] rounded-2xl p-8"
        style={{
          background: "var(--dark-surface)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
          animation: "fadeUp 0.3s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <CheckCircle size={48} style={{ color: "var(--neon-lime)", margin: "0 auto 16px" }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--text-white)" }}>
              Message Sent!
            </h3>
            <p className="mt-2" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14 }}>
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--text-white)" }}>
              {title}
            </h3>
            <p className="mt-1 mb-6" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 14 }}>
              Fill out the form and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                style={{
                  background: "var(--dark-bg)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-white)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                style={{
                  background: "var(--dark-bg)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-white)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                }}
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl px-4 py-3 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                style={{
                  background: "var(--dark-bg)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-white)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-3 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--neon-lime-glow)] disabled:opacity-60"
                style={{
                  background: "var(--neon-lime)",
                  color: "var(--dark-bg)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  border: "none",
                }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: "var(--dark-bg)", borderTopColor: "transparent" }} />
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
