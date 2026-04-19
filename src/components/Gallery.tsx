import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

import carShelves from '../assets/car_shelves.jpg'
import carShelves2 from '../assets/car_shelves_2.jpg'
import closedGate from '../assets/closed_gate.jpg'
import openGate from '../assets/open_gate.jpg'
import faceRail from '../assets/face_rail.jpg'
import faceRail2 from '../assets/face_rail_2.jpg'
import shed from '../assets/shed.jpg'
import shed2 from '../assets/shed_2.jpg'

interface GalleryImage {
  src: string
  alt: string
  caption: string
  span?: 'col' | 'row'
}

const images: GalleryImage[] = [
  { src: shed2,       alt: 'קונסטרוקציה תעשייתית',   caption: 'גגון פלדה לגנרטור תעשייתי',          span: 'col' },
  { src: faceRail2,   alt: 'מדרגות עם מעקה לבן',     caption: 'מעקה מדרגות — פלדה לבנה' },
  { src: closedGate,  alt: 'שער מתכת שחור סגור',     caption: 'שער כניסה שחור מט' },
  { src: faceRail,    alt: 'מדרגות עץ עם מעקה פלדה', caption: 'מדרגות עץ ומעקה לבן' },
  { src: openGate,    alt: 'שער מתכת שחור פתוח',      caption: 'שער קנטילבר — תצוגה פתוחה' },
  { src: carShelves2, alt: 'מדפי פלדה לרכב — פנים',  caption: 'ארגון תא מטען — מבפנים' },
  { src: shed,        alt: 'גגון מתכת תעשייתי',       caption: 'קונסטרוקציה ומבנה מתכת' },
  { src: carShelves,  alt: 'מדפי פלדה לרכב',          caption: 'ארגון כלים לרכב עבודה',              span: 'col' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => setLightboxIndex(index)
  const handleClose = () => setLightboxIndex(null)
  const handlePrev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  const handleNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null))

  return (
    <section id="gallery" className="py-24 px-5 md:px-10 bg-metal-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">הפרויקטים שלנו</p>
          <h2 className="section-title">גלריה</h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              onClick={() => handleOpen(index)}
              className={`group relative overflow-hidden cursor-pointer bg-metal-card ${
                image.span === 'col' ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ aspectRatio: image.span === 'col' ? '16/9' : '4/3' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border border-white/60 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-white">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                  <p className="font-subheading text-white/80 text-xs tracking-widest uppercase">
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Bottom gradient always visible */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="absolute bottom-3 right-3 font-subheading text-white/90 text-xs tracking-wider">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/idanduek_metalworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-subheading text-steel hover:text-gold transition-colors duration-200 text-sm tracking-[0.2em] uppercase border-b border-metal-border hover:border-gold pb-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            עוד תמונות באינסטגרם
          </a>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
