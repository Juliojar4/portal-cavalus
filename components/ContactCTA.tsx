'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Rich green campo gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-[#0f4a15] to-brand-forest" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-olive/20 via-transparent to-brand-accent/10" />

      {/* Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)"/>
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-brand-accent" />
          <span className="font-sans text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
            Comece Hoje
          </span>
          <span className="h-px w-10 bg-brand-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
        >
          Comece sua jornada no{' '}
          <span className="text-brand-accent">mundo equestre</span>{' '}
          hoje
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-white/75 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Mais de 500 alunos já transformaram sua relação com os cavalos. Chegou a sua vez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#cursos"
            scroll={false}
            className="inline-flex items-center gap-2.5 bg-white text-brand-forest hover:bg-brand-accent hover:text-white font-sans font-bold text-base px-9 py-4 rounded-full transition-all duration-200 shadow-2xl shadow-black/20 hover:shadow-brand-accent/30 hover:-translate-y-0.5 group"
          >
            Explorar todos os cursos
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <a
            href="mailto:contato@institutocavalus.com.br"
            className="inline-flex items-center gap-2 font-sans text-white/70 hover:text-brand-accent text-sm transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            contato@institutocavalus.com.br
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8"
        >
          {['Sem mensalidades', 'Acesso imediato', 'Certificado incluído'].map((item) => (
            <span key={item} className="flex items-center gap-2 font-sans text-white/60 text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#61CE70" strokeWidth="1.2"/>
                <path d="M4.5 7l2 2 3-3" stroke="#61CE70" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
