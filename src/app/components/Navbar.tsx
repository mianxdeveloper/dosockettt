import {
  ArrowRight,
  ChevronDown,
  Code,
  Facebook,
  Instagram,
  Linkedin,
  Megaphone,
  Menu,
  Palette,
  Twitter,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../App'

// Import your logo - adjust path if necessary
import LogoImg from '/Logo.svg'

const menuLinks = [
  { label: 'Home', target: '/' },
  { label: 'Services', target: '', hasDropdown: true },
  { label: 'About Us', target: '/about' },
  { label: 'Projects', target: '/projects' },
  { label: 'Pricing', target: '/pricing' },
]

const serviceCategories = [
  {
    title: 'DESIGN',
    subtitle: 'UI/UX & Creative Visuals',
    icon: Palette,
    links: [
      { label: 'UI/UX Design', target: 'ui-ux' },
      { label: 'Brand Identity Design', target: 'brand-identity' },
      { label: 'Graphic Design', target: 'graphic-design' },
      { label: 'Motion Design & Animation', target: 'motion-design' },
    ],
  },
  {
    title: 'DEVELOPMENT',
    subtitle: 'Web & Mobile Solutions',
    icon: Code,
    links: [
      { label: "Web Design & Development", target: "web-architecture" },
      { label: "eCommerce Development", target: "ecommerce" },
      { label: "Landing Page Development", target: "web-architecture" },
      { label: "Mobile App Design & Development", target: "mobile-apps" },
      { label: "Website Maintenance & Support", target: "maintenance" },
      { label: "Competitor Research & Analysis", target: "maintenance" }
    ]
  },
  {
    title: 'DIGITAL MARKETING',
    subtitle: 'Growth & Strategy',
    icon: Megaphone,
    links: [
      { label: "Search Engine SEO", target: "seo" },
      { label: "Social Media Marketing", target: "social-media-ads" },
      { label: "Paid Advertising", target: "social-media-ads" },
      { label: "Content & Copywriting", target: "content-copywriting" },
      { label: "Email Marketing", target: "digital-strategy" },
      { label: "Digital Strategy", target: "digital-strategy" }
    ],
  },
]

const socials = [
  { icon: Twitter, label: 'X', url: 'https://x.com/dosocketagency' },
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/DosocketAgency/' },
  { icon: Instagram, label: 'Instagram', url: "https://www.instagram.com/dosocketagency/" },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/dosocket-agency' },
]

export function Navbar() {
  const { openContact, scrollTo } = useApp()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openMobile ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openMobile])

  const handleNavClick = (target: string, hasDropdown?: boolean, label?: string) => {
    // Desktop: If it has a dropdown, toggle it instead of navigating
    if (hasDropdown && window.innerWidth >= 1024) {
      setActiveDropdown(activeDropdown === label ? null : (label || null))
      return
    }

    setOpenMobile(false)
    setActiveDropdown(null)

    if (!target) return

    if (target === 'contact') {
      openContact("Let's Talk")
    } else if (target === '/' || target.startsWith('/')) {
      if (location.pathname === target) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate(target)
        window.scrollTo(0, 0)
      }
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => scrollTo(target), 300)
      } else {
        setTimeout(() => scrollTo(target), 100)
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          borderBottomLeftRadius: scrolled ? '24px' : '0px',
          borderBottomRightRadius: scrolled ? '24px' : '0px',
        }}
      >
        <div className={`w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between relative transition-all duration-300 ${scrolled ? 'h-[64px] lg:h-[76px]' : 'h-[80px] lg:h-[100px]'}`}>

          {/* Logo - Updated with SVG */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center cursor-pointer z-10 shrink-0 bg-transparent border-none p-0"
          >
            <img
              src={LogoImg}
              alt="Dosocket Logo"
              className="h-8 lg:h-10 w-auto object-contain transition-transform hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full">
            <ul className="flex items-center gap-8 h-full list-none p-0 m-0">
              {menuLinks.map((link) => (
                  <li
                    key={link.label}
                    className="h-full flex items-center"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => handleNavClick(link.target, link.hasDropdown, link.label)}
                      className="flex items-center gap-1.5 text-[16px] font-medium transition-colors duration-200 cursor-pointer h-full bg-transparent border-none text-white font-main"
                    >
                      <span className={`${activeDropdown === link.label ? 'text-[#C8FF00]' : 'hover:text-[#C8FF00]'} transition-colors`}>
                        {link.label}
                      </span>
                      {link.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#C8FF00]' : 'text-white/70'}`}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mega Menu Dropdown - Moved outside for perfect centering */}
            <AnimatePresence>
              {activeDropdown === 'Services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={() => setActiveDropdown('Services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[1000px] max-w-[90vw] p-8 rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'rgba(15,15,15,0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((cat, idx) => {
                      const IconDef = cat.icon
                      return (
                        <div key={idx} className="flex flex-col group/col">
                          <div className="mb-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#C8FF00] group-hover/col:bg-[#C8FF00] group-hover/col:text-black transition-colors">
                                <IconDef size={20} />
                              </div>
                              <button
                                onClick={() => {
                                  const route = cat.title === "DESIGN" ? "/design" : cat.title === "DEVELOPMENT" ? "/development" : "/digital-marketing";
                                  navigate(route);
                                  setActiveDropdown(null);
                                  window.scrollTo(0, 0);
                                }}
                                className="text-white bg-transparent border-none p-0 font-semibold text-[17px] hover:text-[#C8FF00] transition-colors cursor-pointer"
                              >
                                {cat.title}
                              </button>
                            </div>
                            <p className="text-white/50 text-[13px] pl-[52px] -mt-1">{cat.subtitle}</p>
                          </div>
                          <div className="flex flex-col gap-2 pl-[52px]">
                            {cat.links.map((sub, i) => (
                              <button
                                key={i}
                                onClick={() => {
                                  const route = cat.title === "DESIGN" ? "/design" : cat.title === "DEVELOPMENT" ? "/development" : "/digital-marketing";
                                  navigate(route);
                                  setTimeout(() => scrollTo(sub.target), 300);
                                  setActiveDropdown(null);
                                }}
                                className="text-left text-white/70 hover:text-[#C8FF00] hover:bg-white/5 py-2 px-3 -mx-3 rounded-md transition-all text-[14px] bg-transparent border-none cursor-pointer flex items-center justify-between group/link"
                              >
                                {sub.label}
                                <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 z-10 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:inline-flex items-center justify-center rounded-full px-8 py-3 bg-[#C8FF00] text-black font-semibold text-[15px] transition-all hover:scale-105 border-none cursor-pointer"
            >
              Let's Talk
            </button>

            <button
              onClick={() => setOpenMobile(!openMobile)}
              className="lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer transition-all rounded-full border border-white/10"
              style={{ background: openMobile ? '#C8FF00' : 'rgba(255,255,255,0.05)', color: openMobile ? '#000' : '#fff' }}
            >
              {openMobile ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full z-[70] flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] lg:hidden bg-[#0a0a0a] border-r border-white/5"
        style={{ width: 'min(400px, 85vw)', transform: openMobile ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-white/5">
          <img src={LogoImg} alt="Dosocket" className="h-7 w-auto" />
          <button onClick={() => setOpenMobile(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white border-none"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
          {menuLinks.map((link, idx) => (
            <div key={idx}>
              <button
                onClick={() => link.hasDropdown ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : handleNavClick(link.target)}
                className="w-full flex items-center justify-between py-4 border-b border-white/10 text-[22px] font-semibold bg-transparent border-none text-left"
                style={{ color: activeDropdown === link.label ? '#C8FF00' : '#fff' }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
              </button>

              {link.hasDropdown && activeDropdown === link.label && (
                <div className="pl-4 border-l border-white/10 mt-4 flex flex-col gap-6">
                  {serviceCategories.map((cat, i) => (
                    <div key={i}>
                      <p className="text-[#C8FF00] font-bold text-[14px] uppercase tracking-widest mb-3">{cat.title}</p>
                      <div className="flex flex-col gap-3">
                        {cat.links.map((sub, j) => (
                          <button
                            key={j}
                            onClick={() => {
                              navigate(cat.title === "DESIGN" ? "/design" : cat.title === "DEVELOPMENT" ? "/development" : "/digital-marketing");
                              setOpenMobile(false);
                              setTimeout(() => scrollTo(sub.target), 300);
                            }}
                            className="text-left text-white/60 text-[16px] bg-transparent border-none py-1"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={() => handleNavClick('contact')} className="mt-8 w-full rounded-full py-4 bg-[#C8FF00] text-black font-bold border-none">Let's Talk</button>
        </div>
      </aside>
    </>
  )
}