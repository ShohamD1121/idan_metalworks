import { motion } from 'framer-motion'
import aboutImage from '../assets/face_rail.jpg'

const stats = [
  { value: '10+', label: 'שנות ניסיון' },
  { value: '200+', label: 'פרויקטים' },
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
            <p className="section-label">הסיפור שלנו</p>
            <h2 className="section-title mb-6">
              אודות
              <br />
              <span className="text-gold">עידן</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />

            <div className="space-y-5 font-body text-steel leading-relaxed text-base">
              <p>
                עידן דואק הוא מסגר מקצועי עם למעלה מ-10 שנות ניסיון בעבודות מתכת ברמה גבוהה.
                החל ממסגרות כלליות ועד קונסטרוקציות תעשייתיות מורכבות — כל פרויקט מקבל את אותו
                יחס מקצועי ואדיב.
              </p>
              <p>
                התמחות: שערים ומעקות, מדרגות מתכת, מבני פלדה, ארגון רכבים וכל עבודת מתכת
                מותאמת אישית. עובדים עם לקוחות פרטיים, קבלנים וגופים עסקיים בכל הארץ.
              </p>
              <p>
                כל עבודה מתבצעת עם תשומת לב מרבית לפרטים, חומרים איכותיים, גימור ברמה
                גבוהה — ובלוח זמנים שעומד בהתחייבות.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-metal-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl text-gold leading-none">{stat.value}</p>
                  <p className="font-subheading text-steel-dark text-xs tracking-widest uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
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
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/10 pointer-events-none" />

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
                פלדה לבנה
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
