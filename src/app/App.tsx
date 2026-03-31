import { useState, createContext, useContext } from "react";
import { Toaster, toast } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { ValueProp } from "./components/ValueProp";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Blog } from "./components/Blog";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";

interface AppContextType {
  openContact: (title?: string) => void;
  showToast: (msg: string) => void;
  scrollTo: (id: string) => void;
}

export const AppContext = createContext<AppContextType>({
  openContact: () => {},
  showToast: () => {},
  scrollTo: () => {},
});

export const useApp = () => useContext(AppContext);

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTitle, setContactTitle] = useState("Let's Talk");

  const openContact = (title = "Let's Talk") => {
    setContactTitle(title);
    setContactOpen(true);
  };

  const showToast = (msg: string) => {
    toast.success(msg, {
      style: {
        background: "#111",
        color: "#fff",
        border: "1px solid rgba(200,255,0,0.2)",
        fontFamily: "'Instrument Sans', sans-serif",
      },
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppContext.Provider value={{ openContact, showToast, scrollTo }}>
      <div className="w-full" style={{ background: "var(--dark-bg)", color: "var(--text-white)" }}>
        <style>{`
          html { scroll-behavior: smooth; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes countGlow {
            0% { text-shadow: none; }
            50% { text-shadow: 0 0 40px rgba(200,255,0,0.6); }
            100% { text-shadow: 0 0 12px rgba(200,255,0,0.2); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <Toaster position="top-right" />
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} title={contactTitle} />
        <Navbar />
        <Hero />
        <Ticker />
        <About />
        <ValueProp />
        <Portfolio />
        <Testimonials />
        <Partners />
        <Services />
        <Blog />
        <FooterCTA />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
