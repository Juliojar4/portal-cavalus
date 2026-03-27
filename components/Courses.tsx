'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { courses } from '@/data/courses'

const allCategories = ['Todos', ...Array.from(new Set(courses.map((c) => c.category)))]

const levelColors: Record<string, string> = {
  Iniciante: 'text-brand-accent',
  Intermediário: 'text-brand-olive',
  Avançado: 'text-brand-deep',
  Todos: 'text-brand-text',
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M7 4.5V7l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="8" width="3" height="5" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="5.5" y="5" width="3" height="8" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="2" width="3" height="11" rx="1" fill="currentColor"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = activeCategory === 'Todos' || c.category === activeCategory
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-brand-forest" />
            <span className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase">Nossa Grade</span>
            <span className="h-px w-10 bg-brand-forest" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-brand-secondary text-4xl sm:text-5xl font-bold"
          >
            Todos os cursos
          </motion.h2>
        </div>

        {/* Search + filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          {/* Search */}
          <div className="relative w-full sm:w-64 flex-shrink-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text/50">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar cursos..."
              className="w-full pl-10 pr-4 py-2.5 text-sm font-sans border border-brand-secondary/20 rounded-lg bg-white focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest/20 text-brand-secondary placeholder:text-brand-text/40 transition-all duration-200"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                layout
                className={`font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-forest text-white border-brand-forest shadow-md shadow-brand-forest/20'
                    : 'border-brand-secondary/30 text-brand-secondary hover:border-brand-forest hover:text-brand-forest bg-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl border border-brand-secondary/10 hover:border-brand-accent hover:shadow-lg hover:shadow-brand-forest/10 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card top accent */}
                <div className="h-1 bg-gradient-to-r from-brand-olive via-brand-forest to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full bg-brand-olive/12 text-brand-olive">
                      {course.category}
                    </span>
                    {course.free && (
                      <span className="font-sans text-xs font-bold px-3 py-1 rounded-full bg-brand-accent/15 text-brand-forest">
                        Gratuito
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-brand-secondary text-xl font-semibold leading-snug mb-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-brand-text text-sm leading-relaxed mb-4 flex-1">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-5 text-brand-text/60">
                    <span className="flex items-center gap-1.5 font-sans text-xs">
                      <ClockIcon />
                      {course.hours}h
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-xs">
                      <BarIcon />
                      <span className={levelColors[course.level] ?? 'text-brand-text'}>
                        {course.level}
                      </span>
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-brand-secondary/8">
                    {course.free ? (
                      <span className="font-display text-brand-forest text-2xl font-bold">Grátis</span>
                    ) : (
                      <div>
                        <span className="font-sans text-brand-text/40 text-xs">R$</span>
                        <span className="font-display text-brand-forest text-2xl font-bold ml-0.5">
                          {course.price.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    )}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-forest hover:text-white hover:bg-brand-forest px-4 py-2 rounded-lg border border-brand-forest/30 hover:border-brand-forest transition-all duration-200"
                    >
                      Acessar
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="font-display text-brand-secondary text-2xl mb-2">Nenhum curso encontrado</p>
            <p className="font-sans text-brand-text text-sm">Tente outro termo ou categoria.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
