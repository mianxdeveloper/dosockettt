import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already interacted
    const hasConsented = localStorage.getItem("dosocket_cookie_consent");
    if (!hasConsented) {
      // Small delay for UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleReject = () => {
    localStorage.setItem("dosocket_cookie_consent", "rejected");
    setIsVisible(false);
  };

  const handleAccept = () => {
    localStorage.setItem("dosocket_cookie_consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[100] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
          style={{
            background: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(20px)",
            fontFamily: "var(--font-main)"
          }}
        >
          <div className="p-6 relative">
            <button 
              onClick={handleReject} 
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00] shrink-0">
                  <Cookie size={20} />
                </div>
                <h3 className="text-white font-semibold text-[18px] m-0">We value your privacy</h3>
              </div>
              <p className="text-white/60 text-[14px] leading-relaxed mb-6 m-0">
                We use cookies to improve your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              </p>
              <div className="flex items-center gap-3 w-full">
                <button 
                  onClick={handleReject}
                  className="flex-1 py-2.5 rounded-xl text-white font-medium text-[14px] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
                >
                  Reject All
                </button>
                <button 
                  onClick={handleAccept}
                  className="flex-1 py-2.5 rounded-xl text-black font-semibold text-[14px] bg-[#C8FF00] hover:bg-[#a8d600] transition-colors border-none shadow-[0_0_15px_rgba(200,255,0,0.2)] cursor-pointer"
                >
                  Accept Cookies
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
