import { useState, useEffect } from 'react'

const links = [
  { label: 'ראשי', href: '#hero' },
  { label: 'שירותים', href: '#services' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'אודות', href: '#about' },
  { label: 'צור קשר', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-metal-black/95 backdrop-blur-md border-b border-gold/20 shadow-2xl'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — shimmer only on hover */}
          <a
            href="#hero"
            className="logo-shimmer-hover font-heading text-2xl md:text-3xl text-steel-light tracking-[0.15em] shrink-0"
          >
            עידן מטאל וורקס
          </a>

          {/* Desktop nav + phone */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-subheading text-steel hover:text-gold transition-colors duration-200 text-sm tracking-[0.15em] uppercase relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 right-0 left-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  style={{ background: 'linear-gradient(90deg, #b8860b, #f0d060, #b8860b)' }}
                />
              </a>
            ))}
            <a
              href="tel:0505258577"
              className="inline-flex items-center gap-2 font-subheading text-gold hover:text-gold-light transition-colors duration-200 text-sm tracking-wider border border-metal-border px-4 py-2 hover:border-gold"
              dir="ltr"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              0505258577
            </a>
          </div>

          {/* Hamburger — appears on the LEFT in RTL (flex-end) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="פתח תפריט"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-steel-light origin-center transition-all duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-steel-light transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-steel-light origin-center transition-all duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-metal-black/98 backdrop-blur-md border-b border-metal-border`}
      >
        <div className="px-5 py-4 flex flex-col">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`font-subheading text-steel hover:text-gold transition-all duration-200 text-base tracking-[0.2em] uppercase py-4 border-l-2 border-l-transparent hover:border-l-gold hover:pl-3 ${
                i < links.length - 1 ? 'border-b border-metal-border' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0505258577"
            className="font-subheading text-gold text-sm tracking-wider mt-4 pt-4 border-t border-metal-border"
            dir="ltr"
          >
            📞 0505258577
          </a>
        </div>
      </div>
    </header>
  )
}
