'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full pt-[70px]">
      {/* Image container — full width, fixed height */}
      <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px]">
        <Image
          src="/hero-horse.jpg"
          alt="Instituto Cavalus — Cursos Equestres"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Green bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-forest" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
 

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="font-display text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
              >
                Aprenda com os melhores
                <br />
                especialistas do{' '}
                <span className="text-brand-accent">mundo equestre</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              >
                Cursos online em equitação, saúde equina, manejo, gestão de haras e esportes equestres. Do iniciante ao avançado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="#cursos"
                  scroll={false}
                  className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-deep text-white font-display font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-150 shadow-lg"
                >
                  Ver todos os cursos
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="#sobre"
                  scroll={false}
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-display font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-150 backdrop-blur-sm"
                >
                  Conheça o Instituto
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start divide-x divide-gray-100 py-4">
            {[
              { value: '500+', label: 'Alunos formados' },
              { value: '12', label: 'Cursos disponíveis' },
              { value: '6', label: 'Áreas de estudo' },
              { value: '10+', label: 'Especialistas' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 px-5 sm:px-8 py-1 first:pl-0">
                <span className="font-display font-bold text-brand-forest text-xl">{s.value}</span>
                <span className="font-sans text-brand-text text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
