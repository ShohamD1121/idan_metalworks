import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNext()
      if (e.key === 'ArrowRight') onPrev()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center text-steel hover:text-white transition-colors z-10"
          aria-label="סגור"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-5 right-5 font-subheading text-steel-dark text-sm tracking-widest z-10" dir="ltr">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-steel hover:text-white bg-black/40 hover:bg-black/70 transition-all duration-200 z-10 rounded-sm"
          aria-label="הקודם"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-steel hover:text-white bg-black/40 hover:bg-black/70 transition-all duration-200 z-10 rounded-sm"
          aria-label="הבא"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[78vh] object-contain shadow-2xl"
            loading="eager"
          />
          {/* Caption */}
          <p className="mt-4 font-subheading text-steel tracking-wider text-sm">
            {image.caption}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
