import { motion } from 'framer-motion'

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: 'טלפון',
    value: '0505258577',
    href: 'tel:0505258577',
    sub: 'זמין בימי א׳–ו׳',
    dir: 'ltr' as const,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: 'שלחו הודעה',
    href: 'https://wa.me/972505258577',
    sub: 'מענה מהיר',
    dir: 'rtl' as const,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: 'אינסטגרם',
    value: '@idanduek_metalworks',
    href: 'https://www.instagram.com/idanduek_metalworks',
    sub: 'פרויקטים ועדכונים',
    dir: 'ltr' as const,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 md:px-10 bg-metal-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">דברו איתנו</p>
          <h2 className="section-title">צור קשר</h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-6 mb-6" />
          <p className="font-body text-steel text-base max-w-lg mx-auto">
            מוזמנים ליצור קשר לקבלת הצעת מחיר, ייעוץ חינם, או כל שאלה בנושא עבודות מתכת.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group flex flex-col items-center text-center bg-metal-card border border-metal-border p-8 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(184,134,11,0.08)]"
            >
              {/* Icon */}
              <div className="text-gold mb-5 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Label */}
              <p className="font-subheading text-steel-dark text-xs tracking-[0.3em] uppercase mb-2">
                {item.label}
              </p>

              {/* Value */}
              <p
                className="font-subheading text-steel-light text-xl font-semibold mb-1 group-hover:text-gold transition-colors duration-200"
                dir={item.dir}
              >
                {item.value}
              </p>

              {/* Sub */}
              <p className="font-body text-steel-dark text-sm">{item.sub}</p>

              {/* Arrow indicator */}
              <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gold">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
