import { useState, useEffect } from "react";
import { X, ArrowRight, Check, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const WORK_TYPES = [
  "Product Design",
  "Branding",
  "UI/UX",
  "Motion Design",
  "Illustration/Graphics",
  "Development",
  "Other / Not yet sure"
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    typeOfWork: [] as string[],
    projectDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", company: "", email: "", typeOfWork: [], projectDetails: "" });
        onClose();
      }, 2000);
    }, 1200);
  };

  const handleCheckboxChange = (type: string) => {
    setFormData((prev) => {
      if (prev.typeOfWork.includes(type)) {
        return { ...prev, typeOfWork: prev.typeOfWork.filter(t => t !== type) };
      }
      return { ...prev, typeOfWork: [...prev.typeOfWork, type] };
    });
  };

  // We keep it mounted to allow CSS transitions to trigger smoothly
  return (
    <div className={isOpen ? 'pointer-events-auto' : 'pointer-events-none'}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 delay-[200ms]'}`}
        style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(12px)" }}
        onClick={onClose}
      />

      {/* Side Panel Modal */}
      <div
        className={`fixed z-[110] top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] p-6 md:p-8 flex flex-col overflow-y-auto transform transition-transform duration-700 ${isOpen ? 'translate-x-0 delay-[150ms]' : 'translate-x-full delay-0'}`}
        style={{
          background: "var(--dark-surface)",
          borderLeft: "1px solid var(--border-subtle)",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-main)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
          style={{ background: "var(--dark-elevated)", color: "var(--text-white)", zIndex: 10 }}
        >
          <X size={18} />
        </button>

        <div className={`flex flex-col flex-1 transform transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100 delay-[350ms]' : 'translate-y-8 opacity-0 delay-0'}`}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full flex-1 text-center py-10">
            <CheckCircle size={64} style={{ color: "var(--neon-lime)", margin: "0 auto 24px" }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "var(--text-white)" }}>
              Message Sent!
            </h3>
            <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: 16 }}>
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="flex-1 w-full max-w-[480px] mx-auto mt-4 pb-12 flex flex-col justify-center min-h-max">
            <h3 className="mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(22px, 3.5vw, 28px)", color: "var(--text-white)", lineHeight: 1.3, maxWidth: "90%" }}>
              Get in touch to find out<br />how we can collaborate.
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[13px] font-medium ml-1" style={{ color: "var(--text-white)" }}>
                    Your Full Name <span style={{ color: "var(--neon-lime)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                    style={{
                      background: "var(--dark-bg)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-white)",
                      fontSize: 14,
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[13px] font-medium ml-1" style={{ color: "var(--text-white)" }}>
                    Your Company <span style={{ color: "var(--neon-lime)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="UI8"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-2xl px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                    style={{
                      background: "var(--dark-bg)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-white)",
                      fontSize: 14,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium ml-1" style={{ color: "var(--text-white)" }}>
                  Email Address <span style={{ color: "var(--neon-lime)" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="hello@ui8.net"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                  style={{
                    background: "var(--dark-bg)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-white)",
                    fontSize: 14,
                  }}
                />
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <label className="text-[13px] font-medium ml-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2" style={{ color: "var(--text-white)" }}>
                  <span>Type of Work <span style={{ color: "var(--neon-lime)" }}>*</span></span>
                  <span style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: "normal" }}>(Pick the areas you'd like to explore with us)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2 ml-1">
                  {WORK_TYPES.map(type => {
                    const isChecked = formData.typeOfWork.includes(type);
                    return (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group w-fit">
                        {/* Hidden native checkbox for accessibility, but controlled state */}
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(type)}
                        />
                        <div 
                          className="relative flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border transition-all duration-200"
                          style={{
                            borderColor: isChecked ? 'var(--neon-lime)' : 'var(--text-dim)',
                            background: isChecked ? 'var(--neon-lime)' : 'transparent',
                          }}
                        >
                          {isChecked && <Check size={10} color="var(--dark-bg)" strokeWidth={4} />}
                        </div>
                        <span className="text-[13px] transition-colors duration-200 group-hover:text-white" style={{ color: isChecked ? "var(--text-white)" : "var(--text-muted)", fontWeight: isChecked ? 500 : 400 }}>
                          {type}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <label className="text-[13px] font-medium ml-1" style={{ color: "var(--text-white)" }}>
                  Tell us about your project
                </label>
                <textarea
                  placeholder="Details, deadlines etc."
                  required
                  rows={2}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full rounded-[20px] px-4 py-3 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[var(--neon-lime)]/30"
                  style={{
                    background: "var(--dark-bg)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-white)",
                    fontSize: 14,
                  }}
                />
              </div>

              {/* Footer Actions */}
              <div className="mt-4 flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 disabled:opacity-60 rounded-full px-6 py-3"
                    style={{
                      background: "var(--dark-elevated)",
                      color: "var(--text-white)",
                      border: "1px solid var(--border-subtle)",
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_var(--neon-lime-glow)] disabled:opacity-60"
                    style={{
                      background: "var(--text-white)",
                      color: "var(--dark-bg)",
                      border: "none",
                    }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: "var(--dark-bg)", borderTopColor: "transparent" }} />
                    ) : (
                      <ArrowRight size={20} />
                    )}
                  </button>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[12px] mr-2" style={{ color: "var(--text-muted)" }}>Not yet sure?</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 rounded-full text-[13px] transition-all hover:bg-white/5 border font-medium"
                    style={{ 
                      borderColor: "var(--border-subtle)", 
                      color: "var(--text-white)",
                    }}
                  >
                    Book an intro call
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
