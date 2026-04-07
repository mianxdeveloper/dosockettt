import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../App'
// Original figma asset comment replaced with a working working image source
const phoneImg =
  'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800'

const HERO_WORDS = ['Innovation', 'Excellence', 'Experience']

export function Hero() {
  const { openContact, scrollTo } = useApp()
  const navigate = useNavigate()

  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [typedText, setTypedText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const word = HERO_WORDS[currentWordIndex]
    const typingSpeed = isDeleting ? 60 : 120 // Deletes faster

    const timeout = setTimeout(() => {
      // Pause at the end of word before deleting
      if (!isDeleting && typedText === word) {
        setTimeout(() => setIsDeleting(true), 2500)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % HERO_WORDS.length)
      } else {
        const nextText = isDeleting
          ? word.substring(0, typedText.length - 1)
          : word.substring(0, typedText.length + 1)
        setTypedText(nextText)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex])

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'var(--dark-bg)', minHeight: '100vh' }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 0%, rgba(200,255,0,0.12) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, var(--neon-lime-subtle) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 pt-28 pb-8 relative z-10 h-screen flex flex-col justify-center">
        <div className="relative">
          {/* Spinning badge */}
          <div className="absolute top-0 right-0 lg:right-8 hidden md:flex items-center justify-center">
            <div
              className="w-[100px] h-[100px] relative"
              style={{ animation: 'spin 12s linear infinite' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  style={{
                    fontSize: 10.5,
                    letterSpacing: '0.06em',
                    fill: 'var(--text-white)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <textPath href="#circlePath">Best Software Development •</textPath>
                </text>
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'spin 12s linear infinite reverse' }}
              >
                <button
                  onClick={() => openContact('Book a Consultation')}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                  style={{ background: 'var(--neon-lime)', border: 'none' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="4" r="2.5" fill="var(--dark-bg)" />
                    <path
                      d="M4 14c0-2.2 1.8-4 4-4s4 1.8 4 4"
                      stroke="var(--dark-bg)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06 },
                },
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(60px, 9vw, 105px)',
                lineHeight: 1.0,
                color: 'var(--text-white)',
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              {'Digital'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: '100%' },
                    visible: {
                      opacity: 1,
                      y: '0%',
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  style={{
                    display: 'inline-block',
                    marginBottom: '0.2em',
                    willChange: 'transform, opacity',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(64px, 10vw, 115px)',
                lineHeight: 1.0,
                color: 'var(--neon-lime)',
                fontStyle: 'italic',
                marginLeft: 'clamp(20px, 4vw, 80px)',
                display: 'block',
                paddingBottom: 4, // Prevents italic font clipping
              }}
            >
              <span className="relative inline-flex items-center">
                {/* Invisible placeholder to reserve maximum height and consistent baseline */}
                <span className="opacity-0 pointer-events-none select-none">Experience</span>

                {/* Absolute positioned typing text ensures no DOM shift */}
                <span className="absolute left-0 top-0 h-full flex items-center whitespace-nowrap">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                    style={{
                      display: 'inline-block',
                      width: 'clamp(6px, 1vw, 10px)',
                      height: '0.8em',
                      background: 'currentColor',
                      marginLeft: '12px',
                      borderRadius: '2px',
                    }}
                  />
                </span>
              </span>
            </motion.h1>
            <p
              className="opacity-0 mt-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '600px',
                animation: 'fadeUp 0.7s ease forwards',
                animationDelay: '0.3s',
                marginLeft: 'clamp(20px, 4vw, 80px)',
              }}
            >
              Transforming bold ideas into world-class digital products through intelligent design
              and robust engineering.
            </p>
          </div>
        </div>

        {/* Below headline */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-8">
          <div className="max-w-md">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Easily connect your SEO-optimized <br className="hidden sm:block" />
              Content &nbsp;—&nbsp;{' '}
              <button
                onClick={() => scrollTo('about')}
                className="cursor-pointer"
                style={{
                  color: 'var(--neon-lime)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                  background: 'none',
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                Helping you stay Consistent
              </button>
              ,<br />
              Save time, and grow faster.
            </p>

            <div className="flex items-center gap-2 mt-7">
              <button
                onClick={() => openContact("Let's Talk")}
                className="group relative cursor-pointer rounded-full px-5 py-3 transition-all duration-300 flex items-center gap-3 overflow-hidden bg-[var(--neon-lime)] hover:bg-black shadow-[0_0_20px_rgba(200,255,0,0.15)] hover:shadow-[0_0_25px_var(--neon-lime-glow)] border-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: 1
                }}
              >
                <div 
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0 transition-colors duration-300 group-hover:bg-[#1a1a1a]"
                >
                  <svg 
                    viewBox="0 0 14 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-3.5 h-3.5 text-[#C8FF00] transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                  >
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg 
                    viewBox="0 0 14 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-3.5 h-3.5 text-[#C8FF00] absolute -translate-x-[150%] translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </div>
                <span className="relative z-10 text-[var(--dark-bg)] group-hover:text-white transition-colors duration-300">
                  Let's Talk
                </span>
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="cursor-pointer rounded-full px-5 py-3 transition-all duration-300 hover:bg-[#C8FF00] hover:text-black hover:border-[#C8FF00] border border-[var(--border-subtle)] text-[var(--text-white)] bg-transparent font-semibold font-[var(--font-display)] text-[14px]"
              >
                See Projects
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
                'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
              ].map((imgUrl, i) => (
                <img
                  key={i}
                  src={imgUrl}
                  alt={`Customer ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-full border-2 object-cover"
                  style={{ borderColor: 'var(--dark-bg)' }}
                />
              ))}
              <div
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
                style={{
                  background: 'var(--dark-surface)',
                  borderColor: 'var(--dark-bg)',
                  color: 'var(--neon-lime)',
                  fontSize: 12,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                +
              </div>
            </div>
            <div className="">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 13,
                  color: 'var(--text-white)',
                }}
              >
                We have 15k+ Customers
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}
              >
                World-wide
              </div>
            </div>
          </div>
        </div>

        {/* Video Wrapper */}
        {/* <div className="flex justify-center mt-12 relative w-full pb-8">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[55%] rounded-t-2xl"
            style={{
              background: 'linear-gradient(180deg, #1a1a1a 0%, #111 100%)',
              boxShadow: '0 -4px 60px rgba(0,0,0,0.5)',
            }}
          />
          <div
            className="relative z-10 w-full max-w-[700px] aspect-video rounded-2xl overflow-hidden bg-black/40"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/lJIrF4YjHfQ?autoplay=1&mute=1&loop=1&playlist=lJIrF4YjHfQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Short Aesthetic Hero Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-none object-cover pointer-events-none"
            ></iframe>
          </div>
        </div> */}
      </div>
    </section>
  )
}
