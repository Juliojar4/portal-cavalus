'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Alunos formados' },
  { value: '12', label: 'Cursos' },
  { value: '6', label: 'Áreas' },
  { value: '10+', label: 'Especialistas' },
]

export default function Hero() {
  return (
    <section className="relative w-full pt-[70px] bg-surface-dark overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-forest/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-deep/30 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-baseline gap-2.5 py-20 sm:py-28 lg:py-32">

          {/* ── Left: copy ── */}
         

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display font-bold text-white text-4xl max-w-[700px] sm:text-5xl lg:text-[3.4rem] xl:text-6xl leading-[1.08] tracking-tight mb-6"
            >
              Aprenda com os{' '}
              <span className="text-brand-accent">melhores especialistas</span>
              {' '}do mundo equestre
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-white/55 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Cursos online em equitação, saúde equina, manejo, gestão de haras e
              esportes equestres — do iniciante ao profissional.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#cursos"
                scroll={false}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-olive text-surface-dark font-display font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                Explorar cursos
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#sobre"
                scroll={false}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-display font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                Conheça o Instituto
              </Link>
            </motion.div>
     

    

        </div>

        {/* ── Stats row (mobile only) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:hidden flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 py-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-brand-accent text-2xl">{s.value}</p>
              <p className="font-sans text-white/45 text-sm mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-forest/40 to-transparent" />
    </section>
  )
}
