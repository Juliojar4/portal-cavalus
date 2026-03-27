'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    id: 'equitacao',
    name: 'Equitação & Dressage',
    description: 'Técnicas de equitação, postura e harmonia entre cavaleiro e cavalo.',
    color: 'from-brand-forest to-brand-deep',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M24 6C16 6 10 12 10 20C10 26 14 31 20 33L19 42L24 42L25 34C26.5 34.6 28 35 30 35C34 35 38 33 40 30L42 22C42 22 38 18 34 20C34 20 36 14 32 10C29 7 26 6 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="20" cy="19" r="2" fill="currentColor"/>
        <path d="M32 8C35 6 40 7 41 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 33L18 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 38C10 35 15 34 19 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'saude',
    name: 'Saúde & Medicina Equina',
    description: 'Saúde, nutrição, doenças e medicina preventiva para equinos.',
    color: 'from-brand-olive to-brand-forest',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M24 8C15.2 8 8 15.2 8 24C8 32.8 15.2 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16V32M16 24H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'manejo',
    name: 'Manejo & Haras',
    description: 'Gestão de pastagens, instalações, reprodução e cuidados diários.',
    color: 'from-brand-deep to-brand-olive',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <rect x="8" y="24" width="32" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 24L24 10L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 38V28H28V38" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 31H18M30 31H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'esportes',
    name: 'Esportes Equestres',
    description: 'Salto, CCE, polo, enduro e preparação para competições.',
    color: 'from-brand-forest to-brand-accent',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M24 6L28 16H40L30 23L34 34L24 27L14 34L18 23L8 16H20L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 40H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'equoterapia',
    name: 'Equoterapia',
    description: 'Terapia assistida por cavalos para reabilitação e desenvolvimento.',
    color: 'from-brand-olive to-brand-accent',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M24 8C20 8 16 10 14 14C12 18 13 23 16 26L24 40L32 26C35 23 36 18 34 14C32 10 28 8 24 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M19 20C19 20 21 24 24 24C27 24 29 20 29 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="17" r="1.5" fill="currentColor"/>
        <circle cx="28" cy="17" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'gestao',
    name: 'Gestão Equestre',
    description: 'Administração de negócios, clínicas veterinárias e haras.',
    color: 'from-brand-deep to-brand-forest',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20H32M16 26H26M16 32H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 8V6M24 8V6M34 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-surface-muted relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-forest/8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-brand-forest" />
            <span className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase">Áreas de Conhecimento</span>
            <span className="h-px w-10 bg-brand-forest" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-brand-deep text-4xl sm:text-5xl font-bold"
          >
            Explore todas as categorias
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-brand-text text-lg mt-4 max-w-xl mx-auto"
          >
            Do iniciante ao avançado, temos o curso certo para cada etapa da sua jornada equestre.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl border border-brand-forest/10 p-6 cursor-pointer hover:border-brand-forest hover:shadow-xl hover:shadow-brand-forest/15 transition-all duration-300 overflow-hidden relative"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-4">
                <span className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md shadow-brand-forest/20`}>
                  {cat.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-brand-deep text-xl font-semibold mb-1.5 leading-snug group-hover:text-brand-forest transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-brand-text text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-forest/8 flex items-center">
                <span className="font-sans text-brand-forest text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  Ver cursos
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
