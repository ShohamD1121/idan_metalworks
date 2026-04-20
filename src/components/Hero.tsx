import { motion } from 'framer-motion'

// ─── Static constants (defined outside to avoid re-creation) ───────────────

const OUTER  = 'M 80,40 L 1360,40 L 1400,80 L 1400,720 L 1360,760 L 80,760 L 40,720 L 40,80 Z'

interface Particle { id: number; left: string; top: string; size: string; dur: string; delay: string; gold: boolean }
const PARTICLES: Particle[] = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left:  `${((i * 113 + 47) % 94) + 3}%`,
  top:   `${((i * 79  + 31) % 88) + 6}%`,
  size:  `${(i % 4) * 0.7 + 0.7}px`,
  dur:   `${(i % 6) * 2 + 11}s`,
  delay: `-${((i * 1.9) % 11).toFixed(1)}s`,
  gold:  i % 8 === 0,
}))

// Shorthand for path draw transitions
function draw(delay: number, duration: number) {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay, ease: 'easeInOut' as const },
      opacity:    { duration: 0.01, delay },
    },
  }
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606]"
    >
      {/* Multi-point gold glow — centre + corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 65% at 50% 50%, rgba(184,134,11,0.07) 0%, transparent 65%)',
            'radial-gradient(ellipse 50% 50% at 10% 15%, rgba(184,134,11,0.03) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 50% at 90% 85%, rgba(184,134,11,0.03) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* Scan line — sweeps once on load */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(184,134,11,0.55) 50%, transparent 100%)',
        }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, delay: 0.5, ease: 'linear' }}
      />

      {/* ── Animated SVG — sides only, centre is clear ── */}
      <motion.svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Outer chamfered frame */}
        <motion.path d={OUTER} fill="none" stroke="#222" strokeWidth="1" {...draw(0, 3.2)} />

        {/* Gold L-brackets at corners */}
        <motion.path d="M 40,105 L 40,82 L 58,60 L 80,40 L 125,40"            fill="none" stroke="#b8860b" strokeWidth="1.5" {...draw(0.1, 0.6)} />
        <motion.path d="M 1400,105 L 1400,82 L 1382,60 L 1360,40 L 1315,40"   fill="none" stroke="#b8860b" strokeWidth="1.5" {...draw(0.2, 0.6)} />
        <motion.path d="M 40,695 L 40,718 L 58,740 L 80,760 L 125,760"        fill="none" stroke="#b8860b" strokeWidth="1.5" {...draw(0.3, 0.6)} />
        <motion.path d="M 1400,695 L 1400,718 L 1382,740 L 1360,760 L 1315,760" fill="none" stroke="#b8860b" strokeWidth="1.5" {...draw(0.4, 0.6)} />

        {/* ── LEFT SIDE PANEL (x ≤ 300) ── */}
        {/* Vertical spine */}
        <motion.line x1="160" y1="120" x2="160" y2="680" stroke="#252525" strokeWidth="0.8" {...draw(0.8, 1.8)} />
        {/* Horizontal ticks off spine */}
        <motion.line x1="40"  y1="200" x2="160" y2="200" stroke="#202020" strokeWidth="0.6" {...draw(1.2, 0.5)} />
        <motion.line x1="40"  y1="400" x2="240" y2="400" stroke="#202020" strokeWidth="0.6" {...draw(1.4, 0.6)} />
        <motion.line x1="40"  y1="600" x2="160" y2="600" stroke="#202020" strokeWidth="0.6" {...draw(1.2, 0.5)} />
        {/* Inner accent bars */}
        <motion.line x1="160" y1="260" x2="280" y2="260" stroke="#1a1a1a" strokeWidth="0.5" {...draw(1.6, 0.5)} />
        <motion.line x1="160" y1="540" x2="280" y2="540" stroke="#1a1a1a" strokeWidth="0.5" {...draw(1.6, 0.5)} />
        {/* Side diamond accent */}
        <motion.path d="M 160,360 L 200,400 L 160,440 L 120,400 Z" fill="none" stroke="#b8860b" strokeWidth="0.8" {...draw(2.0, 0.8)} />
        {/* Dot markers */}
        {([[160,200],[160,400],[160,600],[240,400]] as [number,number][]).map(([cx,cy]) => (
          <motion.circle key={`l-${cx}-${cy}`} cx={cx} cy={cy} r="2"
            fill="#b8860b" fillOpacity="0.5"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.3, ease: 'backOut' }} />
        ))}

        {/* ── RIGHT SIDE PANEL (x ≥ 1140) ── */}
        {/* Vertical spine */}
        <motion.line x1="1280" y1="120" x2="1280" y2="680" stroke="#252525" strokeWidth="0.8" {...draw(0.8, 1.8)} />
        {/* Horizontal ticks */}
        <motion.line x1="1280" y1="200" x2="1400" y2="200" stroke="#202020" strokeWidth="0.6" {...draw(1.2, 0.5)} />
        <motion.line x1="1200" y1="400" x2="1400" y2="400" stroke="#202020" strokeWidth="0.6" {...draw(1.4, 0.6)} />
        <motion.line x1="1280" y1="600" x2="1400" y2="600" stroke="#202020" strokeWidth="0.6" {...draw(1.2, 0.5)} />
        {/* Inner accent bars */}
        <motion.line x1="1160" y1="260" x2="1280" y2="260" stroke="#1a1a1a" strokeWidth="0.5" {...draw(1.6, 0.5)} />
        <motion.line x1="1160" y1="540" x2="1280" y2="540" stroke="#1a1a1a" strokeWidth="0.5" {...draw(1.6, 0.5)} />
        {/* Side diamond accent */}
        <motion.path d="M 1280,360 L 1320,400 L 1280,440 L 1240,400 Z" fill="none" stroke="#b8860b" strokeWidth="0.8" {...draw(2.0, 0.8)} />
        {/* Dot markers */}
        {([[1280,200],[1280,400],[1280,600],[1200,400]] as [number,number][]).map(([cx,cy]) => (
          <motion.circle key={`r-${cx}-${cy}`} cx={cx} cy={cy} r="2"
            fill="#b8860b" fillOpacity="0.5"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.3, ease: 'backOut' }} />
        ))}

        {/* ── TOP + BOTTOM thin bars (above/below text area) ── */}
        <motion.line x1="160" y1="100" x2="1280" y2="100" stroke="#181818" strokeWidth="0.5" {...draw(1.0, 2.0)} />
        <motion.line x1="160" y1="700" x2="1280" y2="700" stroke="#181818" strokeWidth="0.5" {...draw(1.0, 2.0)} />
        {/* Centre tick on top/bottom bars */}
        <motion.line x1="720" y1="80"  x2="720" y2="100" stroke="#b8860b" strokeWidth="1" {...draw(1.8, 0.3)} />
        <motion.line x1="720" y1="700" x2="720" y2="720" stroke="#b8860b" strokeWidth="1" {...draw(1.8, 0.3)} />

        {/* Grid dots — only in left and right thirds */}
        {Array.from({ length: 10 }, (_, row) =>
          Array.from({ length: 4 }, (_, col) => {
            const leftX = col * 60 + 50
            const rightX = 1440 - leftX
            const y = row * 72 + 50
            return [
              <motion.circle key={`gl-${row}-${col}`} cx={leftX} cy={y} r="0.7" fill="#1e1e1e"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + (row + col) * 0.02, duration: 0.4 }} />,
              <motion.circle key={`gr-${row}-${col}`} cx={rightX} cy={y} r="0.7" fill="#1e1e1e"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + (row + col) * 0.02, duration: 0.4 }} />,
            ]
          })
        )}
      </motion.svg>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute ${p.gold ? 'bg-gold' : 'bg-[#333]'}`}
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              borderRadius: p.gold ? '50%' : '1px',
              animation: `float-particle ${p.dur} ${p.delay} linear infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Diagonal stripe overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(192,192,192,0.4) 3px, rgba(192,192,192,0.4) 6px)',
        }}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto w-full">
        {/* Brand label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-subheading text-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-8"
          dir="ltr"
        >
          IDAN METAL WORKS · @idanduek_metalworks
        </motion.p>

        {/* Main headline — shimmer gradient on loop */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-shimmer font-heading text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.92] tracking-wider"
          dir="rtl"
        >
          מסגרות.
          <br />
          קונסטרוקציה.
          <br />
          מתכת.
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="w-20 h-[2px] bg-gold mx-auto mt-8 mb-6 origin-center"
        />

        {/* Sub-headline — steel with flanking gold lines on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <div
            className="hidden sm:block h-px w-20 shrink-0"
            style={{ background: 'linear-gradient(to left, rgba(184,134,11,0.4), transparent)' }}
          />
          <p className="font-body text-steel text-lg md:text-2xl tracking-wide" dir="rtl">
            בנייה ממתכת ברמה גבוהה
          </p>
          <div
            className="hidden sm:block h-px w-20 shrink-0"
            style={{ background: 'linear-gradient(to right, rgba(184,134,11,0.4), transparent)' }}
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold w-full sm:w-auto">
            צור קשר
          </a>
          <a
            href="https://wa.me/972505258577"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>
      </div>

    </section>
  )
}
