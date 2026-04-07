import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export interface DetailData {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  details: string[];
  image?: string;
  accent?: string;
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DetailData | null;
  onStartProject: () => void;
}

export function DetailModal({ isOpen, onClose, data, onStartProject }: DetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!data && isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-[24px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col max-h-[85vh]"
            style={{ fontFamily: "var(--font-main)" }}
          >
            {/* Header / Image Area */}
            <div className="relative w-full h-48 md:h-56 shrink-0 group overflow-hidden">
              {data.image ? (
                <>
                  <img 
                    src={data.image} 
                    alt={data.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-[#0d0d0d]">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
                </div>
              )}
              
              {/* Close Button overlay */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-black/80 transition-all z-20 border border-white/10"
              >
                <X size={16} />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-8 right-8">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-white/10 bg-white/5 backdrop-blur-sm"
                  style={{ color: data.accent || "#C8FF00" }}
                >
                  <data.icon size={20} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
                  {data.title}
                </h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 custom-modal-scroll">
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8FF00] mb-2 block">Overview</span>
                  <p className="text-white/60 text-base leading-relaxed font-normal">
                    {data.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8FF00] mb-4 block">Key Deliverables</span>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <CheckCircle2 size={14} className="shrink-0" style={{ color: data.accent || "#C8FF00" }} />
                          <span className="text-white/70 text-xs font-normal leading-none">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="px-8 py-6 border-t border-white/10 bg-white/[0.01] shrink-0">
               <div className="flex items-center justify-between">
                  <div className="hidden sm:block">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Ready to scale?</p>
                    <p className="text-[11px] text-[#C8FF00] font-medium">Q2 Intake is Open</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(onStartProject, 300);
                    }}
                    className="w-full sm:w-auto px-7 py-3 bg-[#C8FF00] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(200,255,0,0.2)] flex items-center justify-center gap-2"
                  >
                    Start Project
                    <ArrowRight size={14} />
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      )}

      <style>{`
        .custom-modal-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .custom-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-modal-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
        }
      `}</style>
    </AnimatePresence>
  );
}
