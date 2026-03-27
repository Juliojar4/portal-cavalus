'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const hidden = { opacity: 0, y: 24 }
const visible = { opacity: 1, y: 0 }

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — 100% width, natural proportion */}
      <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/5]">
        <Image
          src="/hero-horse.jpg"
          alt="Cavalo ao pôr do sol — Instituto Cavalus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay: left-side dark for text legibility, fade to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        {/* Bottom fade into white page */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />

        {/* Content — vertically centered on the image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <motion.div
                initial={hidden}
                animate={visible}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="h-px w-10 bg-brand-accent" />
                <span className="font-sans text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
                  Formação Profissional Equestre
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={hidden}
                animate={visible}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="font-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-5 drop-shadow-md"
              >
                Formação para o{' '}
                <span className="text-brand-accent">Mundo Equestre</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={hidden}
                animate={visible}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-sm"
              >
                Cursos online especializados em equitação, manejo, saúde equina e gestão de haras. Do iniciante ao profissional.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={hidden}
                animate={visible}
                transition={{ duration: 0.7, delay: 0.36 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="#cursos"
                  scroll={false}
                  className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-deep text-white font-sans font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-brand-forest/40 hover:-translate-y-0.5"
                >
                  Explorar Cursos
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="#sobre"
                  scroll={false}
                  className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:border-brand-accent hover:text-brand-accent font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  Saiba Mais
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
