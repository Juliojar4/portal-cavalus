'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Alunos formados' },
  { value: '12', label: 'Cursos' },
  { value: '6', label: 'Áreas' },
  { value: '10+', label: 'Especialistas' },
]

export default function HeroLight() {
  return (
    <section className="relative w-full pt-[70px] bg-white overflow-hidden border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 sm:py-28 lg:py-32">

          {/* ── Left: copy ── */}
          <div>

            {/* Eyebrow badge */}
          

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display font-bold text-brand-secondary text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight mb-6"
            >
              Aprenda com os{' '}
              <span className="text-brand-forest">melhores especialistas</span>
              {' '}do mundo equestre
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-brand-text text-lg leading-relaxed mb-10 max-w-lg"
            >
              Cursos online em equitação, saúde equina, manejo, gestão de haras e
              esportes equestres — do iniciante ao profissional.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                href="#cursos"
                scroll={false}
                className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-deep text-white font-display font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                Explorar cursos
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#sobre"
                scroll={false}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-brand-forest text-brand-secondary hover:text-brand-forest font-display font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                Conheça o Instituto
              </Link>
            </motion.div>

          
          </div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative hidden lg:block"
          >
             
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/hero-horse.jpg"
                alt="Instituto Cavalus — Cursos Equestres"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover object-center"
              />
              {/* Subtle green tint overlay */}
              <div className="absolute inset-0 bg-brand-forest/10" />
            </div>
 
          </motion.div>

        </div>
      </div>
    </section>
  )
}
