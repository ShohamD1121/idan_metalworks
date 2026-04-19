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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'מסגרות כלליות',
    description: 'עבודות מסגרות מקצועיות לכל סוגי הפרויקטים — מהקטן ביותר ועד הגדול ביותר.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 20h20M4 20V8l8-6 8 6v12M9 20v-6h6v6" />
      </svg>
    ),
    title: 'בנייה ממתכת',
    description: 'מבנים, חיפויים וקונסטרוקציות מתכת לשימוש מגורי, מסחרי ותעשייתי.',
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
        <rect x="2" y="2" width="4" height="20" rx="1" />
        <rect x="18" y="2" width="4" height="20" rx="1" />
        <line x1="6" y1="6" x2="18" y2="6" />
        <line x1="6" y1="12" x2="18" y2="12" />
        <line x1="6" y1="18" x2="18" y2="18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    title: 'שערים ומעקות',
    description: 'שערים ומעקות מעוצבים בהתאמה אישית — כניסה לבית, חצר, גג וחדר מדרגות.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 21h18M3 21V13h4v-4h4V5h4V1h4v20" />
      </svg>
    ),
    title: 'מדרגות מתכת',
    description: 'מדרגות מתכת ומעקות בעיצוב מודרני — שילוב של פלדה, עץ וזכוכית.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'עבודות מיוחדות',
    description: 'כל עבודת מתכת ייחודית — ריהוט מתכת, ארגון רכבים, גגונים ועוד.',
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
          <h2 className="section-title">שירותים</h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
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
              className="group relative bg-metal-card border border-metal-border p-8 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(184,134,11,0.1)] cursor-default"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="text-gold mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-subheading font-semibold text-xl text-steel-light mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="font-body text-steel-dark text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
