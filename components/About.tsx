'use client'

import { motion } from 'framer-motion'

const vp = { once: true }

const differentials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Especialistas Certificados',
    desc: 'Profissionais com experiência real de campo',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8h18" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    label: 'Conteúdo Prático',
    desc: 'Aulas aplicáveis ao dia a dia com cavalos',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Acesso Flexível',
    desc: 'Aprenda no seu ritmo, a qualquer hora',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Quem Somos
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.08 }}
              className="font-display text-brand-secondary text-3xl sm:text-4xl font-bold leading-tight mb-5"
            >
              Democratizando o conhecimento equestre no Brasil
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.15 }}
              className="font-sans text-brand-text text-base leading-relaxed mb-8"
            >
              O Instituto Cavalus nasceu com a missão de democratizar o conhecimento equestre no Brasil. Reunimos especialistas em equitação, medicina veterinária, gestão de propriedades e bem-estar animal para oferecer formações práticas e acessíveis, do iniciante ao profissional.
            </motion.p>

            {/* Differentials */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.22 }}
              className="flex flex-col gap-4"
            >
              {differentials.map((d) => (
                <div key={d.label} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-forest text-white flex items-center justify-center">
                    {d.icon}
                  </span>
                  <div>
                    <p className="font-sans text-brand-secondary text-sm font-semibold leading-none mb-0.5">{d.label}</p>
                    <p className="font-sans text-brand-text text-xs">{d.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats / info block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '500+', label: 'Alunos formados', sub: 'em todo o Brasil' },
              { value: '12', label: 'Cursos disponíveis', sub: '6 áreas de estudo' },
              { value: '10+', label: 'Especialistas', sub: 'com experiência de campo' },
              { value: '100%', label: 'Online', sub: 'acesse de qualquer lugar' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-surface-light rounded-xl p-5 border border-gray-100"
              >
                <p className="font-display text-brand-forest text-3xl font-bold leading-none mb-1">{s.value}</p>
                <p className="font-sans text-brand-secondary text-sm font-semibold leading-tight">{s.label}</p>
                <p className="font-sans text-brand-text/60 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
