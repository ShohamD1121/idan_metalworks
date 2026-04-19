import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

import carShelves from '../assets/car_shelves.jpg'
import carShelves2 from '../assets/car_shelves_2.jpg'
import closedGate from '../assets/closed_gate.jpg'
import openGate from '../assets/open_gate.jpg'
import faceRail from '../assets/face_rail.jpg'
import faceRail2 from '../assets/face_rail_2.jpg'
import shed from '../assets/shed.jpg'
import shed2 from '../assets/shed_2.jpg'

interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  mainImage: string
  secondImage: string
  mainAlt: string
  secondAlt: string
}

const projects: Project[] = [
  {
    id: 'gates',
    number: '01',
    title: 'שערים',
    subtitle: 'ייצור והתקנת שער מפח לכניסה לבניין',
    category: 'שערים ומעקות',
    mainImage: closedGate,
    secondImage: openGate,
    mainAlt: 'שער מתכת שחור סגור',
    secondAlt: 'שער מתכת שחור פתוח',
  },
  {
    id: 'stairs',
    number: '02',
    title: 'מדרגות ומעקות',
    subtitle: 'מעקה פנים מברזל מלא, מותקן על מדרכי עץ אלון',
    category: 'מדרגות מתכת',
    mainImage: faceRail,
    secondImage: faceRail2,
    mainAlt: 'מדרגות עם מעקה לבן',
    secondAlt: 'מעקה מדרגות פלדה לבנה',
  },
  {
    id: 'van',
    number: '03',
    title: 'ארגון רכבי עבודה',
    subtitle: 'בניית מדפים ותאי אחסון לרכב מסחרי לפי בקשת הלקוח',
    category: 'עבודות מיוחדות',
    mainImage: carShelves,
    secondImage: carShelves2,
    mainAlt: 'ארגון תא מטען — פנים',
    secondAlt: 'מדפי פלדה — חיצוני',
  },
  {
    id: 'shed',
    number: '04',
    title: 'קונסטרוקציה',
    subtitle: 'בניית סככה לגנרטור במפעל יהודה פלדות באשדוד לפי תוכנית מהנדס',
    category: 'קונסטרוקציה',
    mainImage: shed,
    secondImage: shed2,
    mainAlt: 'קונסטרוקציה תעשייתית — מבט עילי',
    secondAlt: 'גגון פלדה לגנרטור',
  },
]

// Flat image list for lightbox (main + second per project)
const allLightboxImages = projects.flatMap((p) => [
  { src: p.mainImage, alt: p.mainAlt, caption: p.subtitle },
  { src: p.secondImage, alt: p.secondAlt, caption: p.subtitle },
])

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-white">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
)

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const project = projects[activeIndex]

  const openMain = () => setLightboxIndex(activeIndex * 2)
  const openSecond = () => setLightboxIndex(activeIndex * 2 + 1)

  return (
    <section id="gallery" className="py-24 px-5 md:px-10 bg-metal-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label">הפרויקטים שלנו</p>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">

          {/* ── Project selector ── */}
          {/* Mobile: horizontal scroll */}
          <div className="flex lg:hidden gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 flex items-center gap-3 px-4 py-3 border transition-all duration-300 ${
                  activeIndex === i
                    ? 'border-gold bg-gold/10 text-steel-light'
                    : 'border-metal-border text-steel-dark hover:border-steel-dark'
                }`}
              >
                <span className={`font-heading text-2xl leading-none ${activeIndex === i ? 'text-gold' : 'text-metal-border'}`}>
                  {p.number}
                </span>
                <span className="font-subheading text-sm tracking-wider">{p.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop: vertical list */}
          <div className="hidden lg:flex flex-col">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                className={`group relative flex items-center gap-5 py-7 border-b text-right w-full transition-all duration-300 ${
                  activeIndex === i ? 'border-gold' : 'border-metal-border hover:border-metal-border/60'
                }`}
              >
                {/* Left gold bar */}
                <span
                  className={`absolute right-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                    activeIndex === i ? 'bg-gold' : 'bg-transparent'
                  }`}
                />

                {/* Number */}
                <span
                  className={`font-heading text-6xl xl:text-7xl leading-none shrink-0 transition-colors duration-300 ${
                    activeIndex === i ? 'text-gold/25' : 'text-[#1f1f1f] group-hover:text-[#252525]'
                  }`}
                >
                  {p.number}
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className={`font-subheading font-semibold text-lg xl:text-xl tracking-wide transition-colors duration-300 ${
                      activeIndex === i ? 'text-steel-light' : 'text-steel-dark group-hover:text-steel'
                    }`}
                  >
                    {p.title}
                  </p>
                  <p className="font-body text-steel-dark text-xs mt-1 leading-relaxed">{p.subtitle}</p>
                  <span
                    className={`inline-block mt-2 font-subheading text-[9px] tracking-[0.25em] uppercase px-2 py-[3px] border transition-colors duration-300 ${
                      activeIndex === i ? 'border-gold/50 text-gold' : 'border-metal-border text-steel-dark'
                    }`}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className={`absolute left-0 transition-all duration-300 ${
                    activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </span>
              </button>
            ))}

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/idanduek_metalworks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-8 font-subheading text-steel-dark hover:text-gold transition-colors duration-200 text-xs tracking-[0.25em] uppercase group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              עוד עבודות באינסטגרם
            </a>
          </div>

          {/* ── Image display ── */}
          <div className="relative" dir="ltr">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                {/* Main image */}
                <motion.div
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  onClick={openMain}
                  className="relative overflow-hidden cursor-zoom-in group"
                  style={{ height: 'clamp(300px, 52vw, 560px)' }}
                >
                  <img
                    src={project.mainImage}
                    alt={project.mainAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark hover overlay + expand icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 w-14 h-14 rounded-full border border-white/50 flex items-center justify-center">
                      <ExpandIcon />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-metal-black/80 backdrop-blur-sm px-3 py-1.5 border border-metal-border">
                    <p className="font-subheading text-gold text-[10px] tracking-[0.3em] uppercase">
                      {project.category}
                    </p>
                  </div>

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                  <p className="absolute bottom-4 left-4 font-subheading text-steel-light text-sm tracking-wider">
                    {project.title}
                  </p>
                </motion.div>

                {/* Second image — overlapping corner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onClick={openSecond}
                  className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-6 cursor-zoom-in group overflow-hidden border-[3px] border-metal-black shadow-[0_8px_40px_rgba(0,0,0,0.7)]"
                  style={{ width: 'clamp(140px, 28%, 240px)', height: 'clamp(100px, 20%, 175px)' }}
                >
                  <img
                    src={project.secondImage}
                    alt={project.secondAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExpandIcon />
                    </div>
                  </div>
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold" />
                </motion.div>

                {/* Project counter */}
                <div className="absolute -top-10 right-0 flex items-center gap-2" dir="rtl">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`transition-all duration-300 rounded-full ${
                        activeIndex === i ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-metal-border hover:bg-steel-dark'
                      }`}
                      aria-label={`פרויקט ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Instagram link */}
        <div className="lg:hidden text-center mt-16">
          <a
            href="https://www.instagram.com/idanduek_metalworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-subheading text-steel hover:text-gold transition-colors duration-200 text-sm tracking-[0.2em] uppercase border-b border-metal-border hover:border-gold pb-1"
          >
            עוד תמונות באינסטגרם
          </a>
        </div>

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allLightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i !== null ? (i - 1 + allLightboxImages.length) % allLightboxImages.length : null))}
          onNext={() => setLightboxIndex((i) => (i !== null ? (i + 1) % allLightboxImages.length : null))}
        />
      )}
    </section>
  )
}
