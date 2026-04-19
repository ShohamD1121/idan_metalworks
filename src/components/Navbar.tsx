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
          ? 'bg-metal-black/95 backdrop-blur-md border-b border-metal-border shadow-2xl'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — appears on the RIGHT in RTL (flex-start) */}
          <a
            href="#hero"
            className="font-heading text-2xl md:text-3xl text-steel-light tracking-[0.15em] hover:text-gold transition-colors duration-300 shrink-0"
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
                <span className="absolute -bottom-1 right-0 left-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
            <a
              href="tel:0505258577"
              className="font-subheading text-gold hover:text-gold-light transition-colors duration-200 text-sm tracking-wider border border-metal-border px-4 py-2 hover:border-gold"
              dir="ltr"
            >
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
              className={`font-subheading text-steel hover:text-gold transition-colors duration-200 text-base tracking-[0.2em] uppercase py-4 ${
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
