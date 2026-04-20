import { motion } from 'framer-motion'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 20h20M4 20V8l8-6 8 6v12M9 20v-6h6v6" />
      </svg>
    ),
    title: 'בנייה ממתכת',
    description: 'מבני מתכת לכל שימוש — מגורי, מסחרי ותעשייתי. עבודה מקצועית לפי תכן מדויק.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'מסגרות כלליות',
    description: 'עבודות מסגרות מקצועיות לכל סוגי הפרויקטים — מהקטן ביותר ועד הגדול ביותר.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="3" width="6" height="18" rx="1" />
        <rect x="16" y="3" width="6" height="18" rx="1" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="16" y2="16" />
      </svg>
    ),
    title: 'קונסטרוקציה',
    description: 'שלדות פלדה ומבני קונסטרוקציה לפי תכן הנדסי — חוזק, בטיחות ועמידות.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="3" y1="5" x2="3" y2="19" />
        <line x1="21" y1="5" x2="21" y2="19" />
        <line x1="7" y1="5" x2="7" y2="19" />
        <line x1="11" y1="5" x2="11" y2="19" />
        <line x1="15" y1="5" x2="15" y2="19" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
    title: 'מעקות וסורגים',
    description: 'ייצור והתקנת מעקות וסורגים — לחדרי מדרגות, גגות, מרפסות וחלונות.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="2" width="4" height="20" rx="1" />
        <rect x="18" y="2" width="4" height="20" rx="1" />
        <path d="M6 12h12M6 7l5 5-5 5" />
      </svg>
    ),
    title: 'גדרות ושערים',
    description: 'ייצור והתקנת גדרות ושערים — כניסה לבית, חצר, מחסן ומבנים מסחריים.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M2 11h20M2 15h20M7 7V3M17 7V3" />
        <line x1="12" y1="7" x2="12" y2="21" />
      </svg>
    ),
    title: 'בנייה מפאנל מבודד',
    description: 'מבנים מפאנל מבודד לאחסון, תעשייה ומגורים — עמידים, חסכוניים ומהירים להקמה.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 md:px-10 bg-metal-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">מה אנחנו עושים</p>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="card-glow group relative bg-metal-card border border-metal-border [border-top-color:rgba(184,134,11,0.15)] hover:[border-top-color:#b8860b] p-8 transition-all duration-300 hover:border-gold hover:-translate-y-1 cursor-default overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon with diamond badge */}
              <div className="relative mb-5 w-fit">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rotate-45 pointer-events-none"
                  style={{ background: 'rgba(184,134,11,0.08)' }}
                />
                <div className="relative text-gold transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-subheading font-semibold text-2xl text-steel-light mb-0 pb-3 tracking-wide border-b border-metal-border">
                {service.title}
              </h3>
              <p className="font-body text-steel-dark text-sm leading-relaxed mt-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
