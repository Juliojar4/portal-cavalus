'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    id: 'equitacao',
    name: 'Equitação & Dressage',
    description: 'Técnicas de equitação, postura e harmonia entre cavaleiro e cavalo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12 3C9 3 7 5.5 7 8c0 2 1 3.5 3 4.5L9.5 18H12L12.5 14C13.2 14.3 14 14.5 15 14.5c2 0 4-1 4.5-3L20 8c0 0-2-2-4-1 0 0 1-2.5-1-4C14 2 13 3 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'saude',
    name: 'Saúde & Medicina Equina',
    description: 'Saúde, nutrição, doenças e medicina preventiva para equinos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'manejo',
    name: 'Manejo & Haras',
    description: 'Gestão de pastagens, instalações, reprodução e cuidados diários.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="4" y="12" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12L12 5L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20V15H14V20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'esportes',
    name: 'Esportes Equestres',
    description: 'Salto, CCE, polo, enduro e preparação para competições.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12 3l2.5 5.5H21l-5.5 4 2 6L12 15l-5.5 3.5 2-6L3 8.5h6.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'equoterapia',
    name: 'Equoterapia',
    description: 'Terapia assistida por cavalos para reabilitação e desenvolvimento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12 4C9 4 7 6 7 9c0 2 1 3.5 2.5 4.5L12 20l2.5-6.5C16 12.5 17 11 17 9c0-3-2-5-5-5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9.5 10c0 0 1 2 2.5 2s2.5-2 2.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'gestao',
    name: 'Gestão Equestre',
    description: 'Administração de negócios, clínicas veterinárias e haras.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10h8M8 13h5M8 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section id="categorias" className="py-16 lg:py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Áreas de Conhecimento
          </p>
          <h2 className="font-display text-brand-secondary text-3xl sm:text-4xl font-bold">
            Explore as categorias
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-xl border border-gray-100 p-5 cursor-pointer hover:border-brand-forest/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-forest/8 text-brand-forest flex items-center justify-center group-hover:bg-brand-forest group-hover:text-white transition-all duration-200">
                  {cat.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-brand-secondary text-sm font-semibold mb-1 group-hover:text-brand-forest transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-brand-text text-xs leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
