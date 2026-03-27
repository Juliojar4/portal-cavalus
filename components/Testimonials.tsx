'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    city: 'São Paulo, SP',
    course: 'Equitação Básica para Iniciantes',
    initials: 'AP',
    text: 'O curso transformou completamente minha relação com minha égua. Os instrutores são incríveis e o conteúdo é muito prático. Recomendo para qualquer pessoa que queira começar no mundo equestre.',
  },
  {
    name: 'Ricardo Mendonça',
    city: 'Campinas, SP',
    course: 'Gestão de Haras e Propriedades Rurais',
    initials: 'RM',
    text: 'Consegui reorganizar toda a gestão do meu haras após o curso. Os módulos de finanças e logística foram particularmente valiosos. Já vi resultados concretos em apenas três meses.',
  },
  {
    name: 'Fernanda Lima',
    city: 'Belo Horizonte, MG',
    course: 'Equoterapia: Fundamentos e Prática',
    initials: 'FL',
    text: 'A formação em equoterapia é excepcional. O suporte dos especialistas foi fundamental para minha prática clínica. Hoje atendo crianças com resultados que me emocionam todos os dias.',
  },
  {
    name: 'Carlos Eduardo Silva',
    city: 'Porto Alegre, RS',
    course: 'Doma Natural e Comunicação com o Cavalo',
    initials: 'CE',
    text: 'Aprendi a "ouvir" meu cavalo de verdade. A metodologia de doma natural apresentada no curso mudou completamente minha abordagem. Meu cavalo está mais calmo, comunicativo e confiante.',
  },
  {
    name: 'Juliana Rodrigues',
    city: 'Ribeirão Preto, SP',
    course: 'Saúde e Nutrição Equina',
    initials: 'JR',
    text: 'Material riquíssimo e muito bem estruturado. As aulas sobre nutrição me ajudaram a identificar deficiências que meu veterinário havia perdido. Vale cada centavo investido.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [isPlaying, next])

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-brand-forest" />
            <span className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase">Depoimentos</span>
            <span className="h-px w-10 bg-brand-forest" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-brand-secondary text-4xl sm:text-5xl font-bold"
          >
            O que nossos alunos dizem
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Desktop: 3 visible */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {[-1, 0, 1].map((offset) => {
                const idx = (current + offset + testimonials.length) % testimonials.length
                const t = testimonials[idx]
                const isCenter = offset === 0
                return (
                  <motion.div
                    key={`${current}-${offset}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: isCenter ? 1 : 0.55, y: 0, scale: isCenter ? 1 : 0.97 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-surface-light rounded-xl p-7 border transition-all duration-300 ${
                      isCenter ? 'border-brand-accent/30 shadow-lg shadow-brand-forest/8' : 'border-brand-secondary/8'
                    }`}
                  >
                    <QuoteCard testimonial={t} />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet: 1 visible */}
          <div className="lg:hidden">
            <div className="relative h-[280px] sm:h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-surface-muted rounded-xl p-7 border border-brand-forest/20 shadow-lg shadow-brand-forest/10"
                >
                  <QuoteCard testimonial={testimonials[current]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-brand-secondary/20 hover:border-brand-forest flex items-center justify-center text-brand-text hover:text-brand-forest transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2.5 bg-brand-accent' : 'w-2.5 h-2.5 bg-brand-secondary/20 hover:bg-brand-accent/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full border border-brand-secondary/20 hover:border-brand-forest flex items-center justify-center text-brand-text hover:text-brand-forest transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#61CE70">
            <path d="M7 1.5L8.5 5H12L9.5 7.5L10.5 11L7 9L3.5 11L4.5 7.5L2 5H5.5L7 1.5Z"/>
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="font-sans text-brand-text text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-secondary/8">
        <span className="w-10 h-10 rounded-full bg-brand-forest/15 text-brand-forest font-display text-sm font-bold flex items-center justify-center flex-shrink-0">
          {testimonial.initials}
        </span>
        <div>
          <p className="font-sans text-brand-secondary text-sm font-semibold leading-tight">{testimonial.name}</p>
          <p className="font-sans text-brand-text/60 text-xs">{testimonial.city}</p>
          <p className="font-sans text-brand-olive text-xs mt-0.5">{testimonial.course}</p>
        </div>
      </div>
    </div>
  )
}
