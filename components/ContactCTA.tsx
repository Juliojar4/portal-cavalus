'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-brand-forest">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          Comece sua jornada no mundo equestre hoje
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-white text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Mais de 500 alunos já transformaram sua relação com os cavalos. Chegou a sua vez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#cursos"
            scroll={false}
            className="inline-flex items-center gap-2 bg-white text-brand-forest hover:bg-brand-deep hover:text-white font-display font-semibold text-sm px-7 py-3 rounded-lg transition-all duration-150 shadow-lg"
          >
            Ver todos os cursos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <a
            href="mailto:contato@institutocavalus.com.br"
            className="inline-flex items-center gap-2 font-sans text-white text-sm transition-colors duration-150"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            contato@institutocavalus.com.br
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6"
        >
          {['Sem mensalidades', 'Acesso imediato', 'Certificado incluído'].map((item) => (
            <span key={item} className="flex items-center gap-2 font-sans text-white text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.2" opacity="0.5"/>
                <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
