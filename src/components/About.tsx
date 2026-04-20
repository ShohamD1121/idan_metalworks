import { motion } from 'framer-motion'
import aboutImage from '../assets/face_rail.jpg'

const stats = [
  { value: '5+', label: 'שנות ניסיון' },
  { value: '50+', label: 'פרויקטים' },
  { value: '100%', label: 'שביעות רצון' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-10 bg-metal-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text — right column in RTL (appears first/right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label text-shimmer mb-4">מי אנחנו</p>
            <div className="w-16 h-[2px] bg-gold mb-8" />

            <div className="space-y-5 font-body text-steel leading-relaxed text-base">
              <p>
                קוראים לי עידן, מסגר מקצועי מזה שנים.
                התחלתי מהשטח ועד היום אני עובד עם הידיים. כל בורג, כל ריתוך, כל פרויקט.
              </p>
              <p>
                אני עושה בנייה ממתכת, קונסטרוקציה, שערים, מעקות, סורגים, גדרות ופאנלים מבודדים.
                עובד עם בעלי בתים, קבלנים ועסקים בכל הארץ.
              </p>
              <p>
                מה שחשוב לי זה שהעבודה תצא כמו שצריך. לא מסבך, לא מבטיח דברים שאני לא עומד בהם.
                פשוט עובד טוב ועומד בזמנים.
              </p>
            </div>

            {/* Stats — wrapped in dark card */}
            <div
              className="mt-10 bg-[#111] border border-metal-border p-6"
              style={{ borderTopColor: 'rgba(184,134,11,0.2)' }}
            >
              <div className="flex items-stretch justify-around">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="flex items-stretch flex-1">
                    <div className="text-center flex-1 py-2">
                      <p className="font-heading text-5xl md:text-6xl text-gold leading-none">{stat.value}</p>
                      <p className="font-subheading text-steel-dark text-xs tracking-widest uppercase mt-2">
                        {stat.label}
                      </p>
                    </div>
                    {idx < stats.length - 1 && (
                      <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent self-stretch mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contact" className="btn-gold">
                בואו נדבר על הפרויקט שלך
              </a>
            </div>
          </motion.div>

          {/* Image — left column in RTL (appears second/left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Decorative borders — animate "close in" on scroll entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-full h-full border border-gold/20 pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-full h-full border border-gold/10 pointer-events-none"
            />

            <img
              src={aboutImage}
              alt="מעקה מדרגות מתכת לבן — עבודה של עידן מטאל וורקס"
              className="w-full h-[500px] lg:h-[580px] object-cover object-center"
              loading="lazy"
            />

            {/* Gold corner accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold" />

            {/* Floating tag */}
            <div className="absolute bottom-8 right-8 bg-metal-black/90 backdrop-blur-sm border border-metal-border px-5 py-3">
              <p className="font-subheading text-gold text-xs tracking-[0.3em] uppercase">
                מעקה מדרגות
              </p>
              <p className="font-heading text-steel-light text-xl tracking-wider">
                ברזל מלא
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
