import { useState, createContext, useContext, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const Ticker = lazy(() => import("./components/Ticker").then(m => ({ default: m.Ticker })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Team = lazy(() => import("./components/Team").then(m => ({ default: m.Team })));
const ValueProp = lazy(() => import("./components/ValueProp").then(m => ({ default: m.ValueProp })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Pricing = lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const Blog = lazy(() => import("./components/Blog").then(m => ({ default: m.Blog })));
const FooterCTA = lazy(() => import("./components/FooterCTA").then(m => ({ default: m.FooterCTA })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const ContactModal = lazy(() => import("./components/ContactModal").then(m => ({ default: m.ContactModal })));
const CookieConsent = lazy(() => import("./components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const Chatbot = lazy(() => import("./components/Chatbot").then(m => ({ default: m.Chatbot })));
const Design = lazy(() => import("./components/Design").then(m => ({ default: m.Design })));
const Development = lazy(() => import("./components/Development").then(m => ({ default: m.Development })));
const DigitalMarketing = lazy(() => import("./components/DigitalMarketing").then(m => ({ default: m.DigitalMarketing })));
const DetailModal = lazy(() => import("./components/DetailModal").then(m => ({ default: m.DetailModal })));


interface AppContextType {
  openContact: (title?: string) => void;
  showToast: (msg: string) => void;
  scrollTo: (id: string) => void;
  openDetail: (data: any) => void;
}

export const AppContext = createContext<AppContextType>({
  openContact: () => { },
  showToast: () => { },
  scrollTo: () => { },
  openDetail: () => { },
});

export const useApp = () => useContext(AppContext);

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTitle, setContactTitle] = useState("Let's Talk");
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isPastHero = scrollPosition > 300;
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 150; // Fade out 150px before absolute bottom

      // Fade in the blur after scrolling down out of the initial hero area,
      // but fade it out again when reaching the footer
      setShowBlur(isPastHero && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [detailOpen, setDetailOpen] = useState(false);
  const [detailData, setDetailData] = useState<any>(null);

  const openContact = (title = "Let's Talk") => {
    setContactTitle(title);
    setContactOpen(true);
  };

  const openDetail = (data: any) => {
    setDetailData(data);
    setDetailOpen(true);
  };

  const showToast = (msg: string) => {
    toast.success(msg, {
      style: {
        background: "#111",
        color: "#fff",
        border: "1px solid rgba(200,255,0,0.2)",
        fontFamily: "var(--font-main)",
      },
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppContext.Provider value={{ openContact, showToast, scrollTo, openDetail }}>
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
        <Suspense fallback={null}>
          <CookieConsent />
          <Chatbot />
          <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} title={contactTitle} />
          <DetailModal isOpen={detailOpen} onClose={() => setDetailOpen(false)} data={detailData} onStartProject={() => openContact(`Project: ${detailData?.title}`)} />
        </Suspense>

        {/* Premium Bottom Blur for Scrolling */}
        <div
          className={`fixed bottom-0 left-0 right-0 h-24 z-50 pointer-events-none transition-opacity duration-700 ${showBlur ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to top, black 10%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 100%)",
          }}
        />

        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
                <Ticker />
                <ValueProp />
                <Portfolio />
                <Testimonials />
                {/* <Partners /> */}
                <Services />
                {/* <Blog /> */}
              </Suspense>
            </>
          } />
          <Route path="/about" element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <div style={{ paddingTop: "60px", minHeight: "80vh" }}>
                <About />
                <Team />
              </div>
            </Suspense>
          } />
          <Route path="/pricing" element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <div style={{ paddingTop: "60px", minHeight: "80vh" }}>
                <Pricing />
              </div>
            </Suspense>
          } />
          <Route path="/design" element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <div style={{ minHeight: "80vh" }}>
                <Design />
              </div>
            </Suspense>
          } />
          <Route path="/development" element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <div style={{ minHeight: "80vh" }}>
                <Development />
              </div>
            </Suspense>
          } />
          <Route path="/digital-marketing" element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <div style={{ minHeight: "80vh" }}>
                <DigitalMarketing />
              </div>
            </Suspense>
          } />

        </Routes>
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <FooterCTA />
          <Footer />
        </Suspense>
      </div>
    </AppContext.Provider>
  );
}
