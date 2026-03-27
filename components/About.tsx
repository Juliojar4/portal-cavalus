'use client'

import { motion } from 'framer-motion'

const hidden = { opacity: 0, y: 24 }
const visible = { opacity: 1, y: 0 }
const viewport = { once: true }

const differentials = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Especialistas Certificados',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Conteúdo Prático',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Acesso Flexível',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle green side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-forest via-brand-accent to-brand-olive" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={hidden}
              whileInView={visible}
              viewport={viewport}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-brand-forest" />
              <span className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase">
                Quem Somos
              </span>
            </motion.div>

            <motion.h2
              initial={hidden}
              whileInView={visible}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-brand-deep text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6"
            >
              Uma missão de democratizar o{' '}
              <span className="text-brand-forest">conhecimento equestre</span>
            </motion.h2>

            <motion.p
              initial={hidden}
              whileInView={visible}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-brand-text text-lg leading-relaxed mb-8"
            >
              O Instituto Cavalus nasceu com a missão de democratizar o conhecimento equestre no Brasil. Reunimos especialistas em equitação, medicina veterinária, gestão de propriedades e bem-estar animal para oferecer formações práticas e acessíveis, do iniciante ao profissional.
            </motion.p>

            {/* Differentials */}
            <motion.div
              initial={hidden}
              whileInView={visible}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              {differentials.map((d) => (
                <div key={d.label} className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-forest text-white flex items-center justify-center shadow-md shadow-brand-forest/30 group-hover:bg-brand-deep transition-all duration-200">
                    {d.icon}
                  </span>
                  <span className="font-sans text-brand-secondary text-sm font-semibold leading-snug">{d.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Decorative block */}
          <motion.div
            initial={hidden}
            whileInView={visible}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Offset border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-forest/25 rounded-2xl" />

            <div className="relative bg-gradient-to-br from-brand-forest/8 via-surface-light to-brand-accent/5 border-2 border-brand-forest rounded-2xl p-8 lg:p-10 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.06]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dots-about" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#22A731" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots-about)" />
                </svg>
              </div>

              {/* Horse SVG icon */}
              <div className="relative mb-6 flex justify-center">
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="text-brand-forest">
                  <path d="M50 10 C30 10 15 25 15 45 C15 55 20 63 30 68 L28 85 L35 85 L37 70 C40 72 44 73 50 73 C56 73 60 72 63 70 L65 85 L72 85 L70 68 C80 63 85 55 85 45 C85 25 70 10 50 10Z" fill="currentColor" opacity="0.12" />
                  <path d="M50 10 C30 10 15 25 15 45 C15 55 20 63 30 68 L28 85 L35 85 L37 70 C40 72 44 73 50 73 C56 73 60 72 63 70 L65 85 L72 85 L70 68 C80 63 85 55 85 45 C85 25 70 10 50 10Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="38" cy="38" r="4" fill="currentColor" />
                  <path d="M60 20 C65 15 75 12 80 18 C82 22 78 28 72 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M72 26 L68 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <svg className="absolute -top-2 -left-2 text-brand-forest/30 w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H4c0-3.3 2.7-6 6-6V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-6c0-3.3 2.7-6 6-6V8z"/>
                </svg>
                <p className="font-display text-brand-forest text-xl lg:text-2xl italic leading-relaxed pt-4 pl-4">
                  &ldquo;O cavalo é um espelho que reflete sua alma — e nossa missão é ajudá-lo a se ver nesse espelho com clareza e conhecimento.&rdquo;
                </p>
                <footer className="mt-4 pl-4">
                  <span className="font-sans text-brand-olive text-sm font-semibold">— Equipe Instituto Cavalus</span>
                </footer>
              </blockquote>

              {/* Green accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-deep via-brand-forest to-brand-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
