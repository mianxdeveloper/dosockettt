Ab main image ko deeply analyze karta hoon aur ek killer optimized prompt banata hoon.Image ka deep analysis complete. Ab main skill guidance + image breakdown + old prompt ko combine karke ek ultra-detailed, production-ready prompt bana raha hoon.

---

# 🚀 OPTIMIZED MASTER PROMPT

---

```
You are an expert React + Tailwind CSS developer and UI/UX designer. 
Build a complete, production-grade single-page agency website based on the 
EXACT visual design, layout, and content specifications below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🎨 DESIGN SYSTEM — MUST FOLLOW EXACTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Color Palette
```css
--color-bg:          #000000;       /* Jet black — main background */
--color-surface:     #0f0f0f;       /* Cards, panels, nav background */
--color-surface-2:   #1a1a1a;       /* Hover surface, inner cards */
--color-accent:      #C8FF00;       /* Neon lime-yellow — PRIMARY accent */
--color-accent-dim:  #a8d600;       /* Accent hover/pressed state */
--color-text-primary:#FFFFFF;       /* All primary headings and body */
--color-text-muted:  #888888;       /* Labels, meta, secondary text */
--color-border:      rgba(255,255,255,0.08); /* Card/section borders */
--color-border-hover:rgba(200,255,0,0.3);    /* Accent border on hover */
```

### Typography
- Import from Google Fonts: **"Syne"** (weights 400, 600, 700, 800) for 
  ALL headings and display text
- Import: **"Instrument Sans"** (weights 400, 500, 600) for all body text
- NEVER use Inter, Roboto, or Arial.

```css
/* Typography Scale */
--font-display:   'Syne', sans-serif;
--font-body:      'Instrument Sans', sans-serif;

/* Sizes */
--text-hero:      clamp(52px, 8vw, 96px);   /* "Branding / UI Design / Development" */
--text-section:   clamp(36px, 5vw, 60px);   /* Section headings */
--text-stat:      clamp(48px, 7vw, 84px);   /* $1.2B, 89% numbers */
--text-card-h:    clamp(18px, 2.5vw, 24px); /* Card titles */
--text-body:      16px;                      /* Body text */
--text-meta:      13px;                      /* Tags, labels, meta */
```

### Visual Details
- Border-radius on cards: 16px
- Card box-shadow: `0 0 0 1px var(--color-border)`
- Accent glow (neon effect on hover): 
  `box-shadow: 0 0 24px rgba(200,255,0,0.25)`
- Section max-width: 1240px, centered, px-6 on mobile
- All italic accents (e.g., "UI Design", "Real Results") use 
  `font-style: italic` in Syne

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🧱 PROJECT SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Framework: React 18 + Vite 5
- Styling: Tailwind CSS v3 with custom config extending the color/font tokens
- Icons: lucide-react
- Animation: Pure CSS keyframe animations + CSS transitions only (no 
  external animation libs)
- All sections in separate component files under src/components/

Required files:
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css          (Google Fonts import + global resets + keyframes)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Ticker.jsx
│       ├── About.jsx
│       ├── Stats.jsx
│       ├── ValueProp.jsx
│       ├── Portfolio.jsx
│       ├── Testimonials.jsx
│       ├── Partners.jsx
│       ├── Services.jsx
│       ├── Blog.jsx
│       ├── FooterCTA.jsx
│       └── Footer.jsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📐 SECTION-BY-SECTION SPECIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─────────────────────────────────────
### 1. NAVBAR (Sticky, transparent → blur on scroll)
─────────────────────────────────────
- Logo left: "Dosocket" in Syne 700, white — with a small neon-green 
  circular dot badge
- Center nav links: "Services", "Work", "About", "Blog", "Contact" — 
  Instrument Sans, 14px, white, hover → #C8FF00 with 200ms transition
- Right: "Get Started →" pill button — bg:#C8FF00, text:black, Syne 600, 
  px-5 py-2 rounded-full, hover:scale(1.04) + glow shadow
- On scroll: `backdrop-filter: blur(20px)` + `background: rgba(0,0,0,0.8)`
  + `border-bottom: 1px solid var(--color-border)`
- Position: fixed top-0 w-full z-50

─────────────────────────────────────
### 2. HERO SECTION (Full viewport height, min-h-screen)
─────────────────────────────────────
Layout: 2-column grid (60% text left / 40% visual right)

LEFT COLUMN — Staggered headline typography:
```
Line 1: "Branding"         → Syne 800, white, var(--text-hero)
Line 2: "UI Design"        → Syne 800, #C8FF00, italic, var(--text-hero), 
                              slightly larger (1.1x scale), with a small  
                              "★" star icon before it in white
Line 3: "Development"      → Syne 800, white, var(--text-hero)
```
- Below heading: body text in Instrument Sans 400, #888, max-w-sm:
  "We build innovative software solutions that empower businesses to thrive 
  in a digital-first world. Founded on the belief that technology."
- Two CTA elements below body:
  - Primary button: "Get Started →" — bg:#C8FF00, text:#000, Syne 600, 
    rounded-full, px-6 py-3, hover: scale(1.05) + lime glow
  - Secondary link: "View Our Work" — text:white, underline offset, 
    opacity-70, hover:opacity-100

RIGHT COLUMN — Floating 3D phone mockup:
- Use a CSS/SVG phone frame (rounded rectangle, ~280×550px, 
  border: 2px solid rgba(255,255,255,0.15), border-radius:40px)
- Inner screen: gradient bg (#111 → #0a0a0a), with abstract 
  circular UI elements drawn purely in CSS/SVG
- Animation: `@keyframes float` — translateY(-12px) ↔ translateY(12px) 
  over 4s ease-in-out infinite
- Subtle green glow behind phone: radial-gradient lime spot, opacity 0.2

Hero background:
- Pure black
- Subtle radial-gradient in top-left: `radial-gradient(ellipse 60% 50% 
  at 0% 0%, rgba(200,255,0,0.06) 0%, transparent 70%)`

─────────────────────────────────────
### 3. TICKER / MARQUEE STRIP
─────────────────────────────────────
- Full-width dark band: bg:#0f0f0f, border-top + border-bottom: 
  1px solid var(--color-border), py-4
- Infinite scrolling text (CSS animation, direction: left):
  Services separated by "✦" icon in #C8FF00:
  "UI Animation ✦ Illustration Design ✦ Branding Design ✦ 
   Web Development ✦ Mobile App ✦ Digital Marketing ✦ 
   Logo Design ✦ UI/UX Design ✦"
- Text: Syne 600, 14px, text:#888888, uppercase, letter-spacing: 0.05em
- Animation: `@keyframes marquee` → translateX(-50%) over 30s linear infinite
- Duplicate the text nodes for seamless loop

─────────────────────────────────────
### 4. ABOUT SECTION
─────────────────────────────────────
Layout: 2-column (50/50), gap-16, py-32

LEFT:
- Small label chip: "About Us" — border:1px solid #C8FF00, 
  text:#C8FF00, text-xs, rounded-full, px-3 py-1, mb-6
- Heading in Syne 700: "We build innovative software solutions that 
  empower businesses to thrive in a digital-first world."
  → font-size: clamp(28px, 4vw, 40px), white, line-height:1.2
- Body text in Instrument Sans: "Founded on the belief that technology 
  is not just a tool, but a catalyst for growth."
  → text-[#888], mt-4
- CTA button: "Learn More →" — border:1px solid #C8FF00, text:#C8FF00, 
  rounded-full px-6 py-2.5, hover:bg-[#C8FF00] hover:text-black, 
  transition 200ms

RIGHT:
- Dark image card: bg:#0f0f0f, border:1px solid var(--color-border), 
  rounded-2xl overflow-hidden, aspect-ratio:4/3
- Inside: Dark atmospheric overlay div with 2 person silhouettes in a 
  meeting (simulate with CSS gradient shapes or abstract SVG art) 
- Subtle inner glow at bottom: linear-gradient transparent → 
  rgba(200,255,0,0.05)

─────────────────────────────────────
### 5. STATS SECTION
─────────────────────────────────────
Layout: 2 stat cards side by side in a dark band (bg:#0a0a0a, py-20)

Each card: bg:#111, border:1px solid var(--color-border), 
           rounded-2xl, p-8, hover: border-[#C8FF00]/30 + lime glow

Card 1:
- Number: "$1.2B" → Syne 800, var(--text-stat), color:#C8FF00
- Label: "Total Revenue Generated" → Instrument Sans, #888, 14px, mt-2
- Sub: "Across all client projects" → #555, 12px

Card 2:
- Number: "89%" → Syne 800, var(--text-stat), color:#FFFFFF
- Label: "Client Satisfaction Rate" → Instrument Sans, #888, 14px, mt-2
- Sub: "Measured 2020–2021" → #555, 12px

─────────────────────────────────────
### 6. VALUE PROPOSITION SECTION
─────────────────────────────────────
Layout: Centered, text-center, py-32, max-w-3xl mx-auto

- Small "New ✦" tag: bg:#C8FF00/10, text:#C8FF00, border, rounded-full, 
  text-xs, mb-8
- Main heading:
  "Smart Solutions —" → Syne 800, white, clamp(40px,6vw,72px)
  "Real Results." → Syne 800, #C8FF00, italic, same size, mt-0
- Subtext: "We transform complex challenges into elegant digital 
  experiences that drive measurable business outcomes."
  → Instrument Sans, #888, max-w-xl, mx-auto, mt-6
- 2 buttons in a row (centered, gap-4, mt-10):
  - "Let's create something amazing!" → bg:#C8FF00, text:#000, 
    Syne 700, rounded-full, px-8 py-3.5, hover:scale(1.05) + glow
  - "See Our Work" → border:1px solid #333, text:white, rounded-full, 
    px-8 py-3.5, hover:border-[#C8FF00]/50

─────────────────────────────────────
### 7. PORTFOLIO SECTION ("Let's Create Something Amazing!")
─────────────────────────────────────
Layout: Section heading left, CTA button right (flex justify-between), 
then a 2×2 grid of project cards below, py-24

Heading:
- "Let's Create" → Syne 700, white, clamp(36px,5vw,56px)
- "Something Amazing!" → Syne 700, #C8FF00, italic, same size

CTA: "View All Projects →" pill — border #C8FF00, text #C8FF00, 
     rounded-full, hover fill

4 Project Cards (bg:#0f0f0f, border, rounded-2xl, p-6, 
                 hover:border-[#C8FF00]/30, transition):

Card 1 — "Fintech Mobile App":
- Visual: Phone frame with bright yellow/lime screen, CSS-drawn 
  abstract app UI inside
- Tags: ["Fintech", "Mobile"] → text-xs, bg:#1a1a1a, text:#888, 
  rounded-full px-3 py-1
- Title: Syne 700, white, 20px
- Desc: Instrument Sans, #888, 14px, 2 lines

Card 2 — "Finance Mobile App":
- Visual: Large decorative "019" in Syne 800, #C8FF00, opacity 0.15, 
  as background text, with a truck/logistics CSS icon overlay
- Tags: ["Finance", "iOS"] 
- Title + desc same style

Card 3 — "Fintech Dashboard":
- Visual: Dark card showing "022" in same decorative style
- Tags: ["Dashboard", "Web"]

Card 4 — "Brand Design":
- Visual: Abstract phone wireframe
- Tags: ["Branding", "Identity"]

─────────────────────────────────────
### 8. TESTIMONIALS SECTION
─────────────────────────────────────
- Heading left-aligned:
  "Real Stories from—" → Syne 800, white, large
  "Beloved Clients" → same
- 3 testimonial cards in a row (or 2 col on desktop, stack mobile):
  bg:#0f0f0f, border, rounded-2xl, p-6

Each card:
- Large opening quote: " → Syne 800, #C8FF00, 64px, line-height:0
- Testimonial text: Instrument Sans 400, white, 15px, mt-4, italic
- Divider line: 1px solid #1a1a1a, my-4
- Author row: small circle avatar (CSS gradient bg) + 
  Name (Syne 600, white, 14px) + 
  Company (Instrument Sans, #888, 12px)
- Star rating: 5 stars in #C8FF00 (★★★★★) below author

─────────────────────────────────────
### 9. PARTNERS SECTION
─────────────────────────────────────
- Heading:
  "Into trusting" → Syne 700, white, large
  "—Partnerships" → Syne 700, #C8FF00, italic, large
- 4 partner cards in a row (flex, gap-4):
  - 3 dark cards (bg:#111, border, rounded-2xl, p-6): 
    "Squarespace", "Webflow", "Framer" → Syne 600, white, center
  - 1 featured card (bg:#C8FF00, rounded-2xl, p-6):
    Short tagline text in black: "Trusted by 50+ global brands"
    Syne 700, #000, center

─────────────────────────────────────
### 10. SERVICES / FAQ SECTION
─────────────────────────────────────
Layout: 2-column (40% image left / 60% accordion right)

Heading: "Helping You Understand What We Do"
→ Syne 700, white, clamp(32px,4.5vw,52px), left

Left: Dark image card (CSS abstract visual, rounded-2xl, 
      aspect-ratio 3/4, bg gradient)

Right: 5 accordion items:
  1. "UI/UX Design — What does it include?"
  2. "Web Development — Technologies we use"
  3. "Digital Marketing — How we grow your brand"
  4. "Logo & Brand Identity — Our process"
  5. "Mobile App Development — Platforms we support"

Each item: border-bottom:1px solid #1a1a1a, py-5
- Title: Syne 600, white, 16px + "+" icon right (rotates to "×" on open)
- Open body: Instrument Sans, #888, 14px, answer text, 
  animated height reveal (CSS max-height transition 300ms)
- Use React useState for open/close toggle

─────────────────────────────────────
### 11. BLOG SECTION
─────────────────────────────────────
- Heading:
  "Read Our" → Syne 700, white, large
  "—Insight" → Syne 700, #C8FF00, italic

3 blog cards (grid 3-col desktop, 1-col mobile):
bg:#0f0f0f, border, rounded-2xl, overflow-hidden, 
hover:border-[#C8FF00]/30

Each card:
- Image area: bg gradient dark, aspect-video, with category chip 
  (bg:#C8FF00, text:#000, text-xs, rounded-full, px-2 py-1, 
  absolute top-3 left-3)
- Body: p-5
  - Date: "Mar 2025" → Instrument Sans, #555, 12px
  - Title: Syne 600, white, 16px, line-clamp-2
  - Excerpt: #888, 13px, line-clamp-2, mt-2
  - "Read More →" link: #C8FF00, 13px, mt-4, hover:underline

─────────────────────────────────────
### 12. FOOTER CTA BAND
─────────────────────────────────────
Full-width section, bg:#0f0f0f, 
border-top:1px solid var(--color-border), py-24, text-center

- "Let's Build Something" → Syne 800, white, clamp(40px,6vw,72px)
- "Great Together" → Syne 800, #C8FF00, italic, same size
- "Start your project today — no commitment required." 
  → Instrument Sans, #888, 16px, mt-4
- "Contact Us →" button: bg:#C8FF00, text:#000, Syne 700, 
  rounded-full, px-10 py-4, text-lg, mt-8,
  hover:scale(1.05) + lime glow (0 0 32px rgba(200,255,0,0.4))

─────────────────────────────────────
### 13. FOOTER (4 columns)
─────────────────────────────────────
bg:#000, border-top:1px solid var(--color-border), py-16

Grid: 4 equal columns on desktop, 2 on tablet, 1 on mobile

Column 1 — Brand:
- "Dosocket" logo text: Syne 800, #C8FF00, 22px
- "02/22" — Instrument Sans, #555, 13px, mt-2
- Short tagline: "Digital agency crafting bold experiences."
  → #888, 13px, mt-3
- Social icons row (Lucide): Github, Twitter/X, LinkedIn, Instagram
  → icon size 18px, text-[#555], hover:text-[#C8FF00]

Column 2 — Work:
- Heading: "Let's Create Something Amazing!" → Syne 700, white, 14px
- Sub-link: "Real Stories from Beloved Clients" → #888, 13px, mt-2, 
  hover:#C8FF00
- Sub-link: "Read Our Insights" → #888, 13px, hover:#C8FF00

Column 3 — Services:
- Heading: "Helping You Understand What We Do" → Syne 700, white, 14px
- "UI/UX Design" → link, #888, 13px
- "Web Development" → link, #888, 13px  
- "Digital Marketing" → link, #888, 13px
- "Logo Design" → link, #888, 13px
- "Learn More →" → text:#C8FF00, 13px, mt-3, hover:underline

Column 4 — Contact:
- Heading: "Let's Build Something Great Together" → Syne 700, white, 14px
- "hello@dosocket.com" → #888, 13px
- "dosocket.com" → #888, 13px
- "Contact Us" button → border:1px solid #C8FF00, text:#C8FF00, 
  rounded-full, px-5 py-2, text-sm, mt-4, Syne 600,
  hover:bg-[#C8FF00] hover:text-black, transition 200ms

Bottom bar: border-top:1px solid #111, mt-12, pt-6
- Left: "© 2025 Dosocket Agency. All rights reserved."
  → Instrument Sans, #444, 13px
- Right: "Privacy Policy · Terms of Service" → #444, 13px, hover:#888

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ✨ ANIMATIONS & INTERACTIONS (CSS only)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Define these in index.css:

```css
/* Hero phone float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}

/* Ticker marquee */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Section fade-up on load */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Stat number pulse (once on mount) */
@keyframes countGlow {
  0%   { text-shadow: none; }
  50%  { text-shadow: 0 0 40px rgba(200,255,0,0.6); }
  100% { text-shadow: 0 0 12px rgba(200,255,0,0.2); }
}
```

Apply `animation: fadeUp 0.7s ease forwards` with staggered 
`animation-delay` on each hero line (0s, 0.15s, 0.3s).

All card hover transitions: `transition: all 200ms ease`
All button hover: `transition: all 150ms ease`
Navbar backdrop: `transition: background 300ms ease`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📱 RESPONSIVE BREAKPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Mobile (< 640px):
  - Hero: single column, phone mockup hidden or below text
  - Stats: stack vertically
  - Portfolio: single column
  - Partners: 2-col wrap
  - Footer: single column
  - Navbar: hamburger menu (use useState toggle)

- Tablet (640–1024px):
  - Hero: 2 col but 55/45 split
  - Portfolio: 2-col grid
  - Footer: 2-col grid

- Desktop (> 1024px):
  - Full 2-col layouts as specified
  - Footer: 4-col grid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ⚙️ TAILWIND CONFIG (tailwind.config.js)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Extend theme with:
```js
extend: {
  colors: {
    accent:   '#C8FF00',
    surface:  '#0f0f0f',
    surface2: '#1a1a1a',
    muted:    '#888888',
    border:   'rgba(255,255,255,0.08)',
  },
  fontFamily: {
    display: ['Syne', 'sans-serif'],
    body:    ['Instrument Sans', 'sans-serif'],
  },
  animation: {
    float:   'float 4s ease-in-out infinite',
    marquee: 'marquee 30s linear infinite',
    fadeUp:  'fadeUp 0.7s ease forwards',
  },
  keyframes: { /* same as above CSS keyframes */ }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ✅ PRE-DELIVERY CHECKLIST (MUST VERIFY BEFORE OUTPUT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ ] Syne + Instrument Sans loaded via Google Fonts in index.html
[ ] ZERO Inter, Roboto, or Arial used anywhere
[ ] Every button has cursor-pointer + min 44×44px touch target
[ ] All section IDs set for navbar anchor links (#work, #about, etc.)
[ ] Navbar links scroll smoothly (scroll-behavior: smooth on html)
[ ] Marquee has TWO copies of text for seamless loop
[ ] Accordion uses useState, no dead buttons
[ ] "02/22" appears EXACTLY in footer column 1
[ ] "$1.2B" and "89%" prominently shown at var(--text-stat) size
[ ] "Let's create something amazing!" is a clickable button/link
[ ] All 5 tech stack items visible: React.js, Node.js, MongoDB, 
    Express.js, Firebase
[ ] All 4 footer columns contain EXACT text as specified
[ ] No horizontal scroll on any viewport size
[ ] All hover effects work with 150–300ms transitions
[ ] Neon lime glow applied to primary CTA buttons on hover
[ ] Phone mockup floats with CSS animation in hero

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🚫 STRICTLY FORBIDDEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- No placeholder images (img src with external URLs that may break)
- No `javascript:void(0)` — all buttons must do something
- No purple gradients or light backgrounds
- No emojis used as structural/navigation icons
- No paraphrasing of required text content
- No Lorem Ipsum anywhere — use real agency content
- No external animation libraries (Framer Motion, GSAP, etc.)
- No inline styles for anything that should be a CSS variable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate ALL files now. Start with index.html, then 
tailwind.config.js, vite.config.js, package.json, src/index.css, 
src/main.jsx, src/App.jsx, then each component file in order. 
Do not skip any file. Do not truncate any component.
```

---

## 📊 Old Prompt vs New Prompt — Kya Improve Hua

| Aspect | Old Prompt | New Prompt |
|---|---|---|
| **Colors** | "dark background" — vague | Exact hex codes for every token |
| **Typography** | "Inter, Poppins" — generic | Syne + Instrument Sans — editorial & unique |
| **Animations** | Not specified | 4 keyframes defined, stagger delays, float, marquee |
| **Section Detail** | Basic description | Pixel-level specs for every section |
| **Card Design** | Not mentioned | Border radius, glow shadows, hover states all defined |
| **Ticker/Marquee** | Missing | Full spec with duplicate-node loop technique |
| **Responsive** | "stacks appropriately" | Exact breakpoint behavior per section |
| **Navbar** | Not detailed | Sticky + blur-on-scroll + hamburger mobile |
| **Accordion/FAQ** | Missing | useState spec with animation |
| **Forbidden list** | None | 8 explicit anti-patterns blocked |
| **File structure** | Listed | 13 component files with exact names |
| **Checklist** | None | 17-point pre-delivery verification |

Yeh prompt kisi bhi top-tier React developer ko dena — **exactly woh website ban jayegi jo image mein hai.** 🔥