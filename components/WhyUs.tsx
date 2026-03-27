'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instrutores de Campo',
    description: 'Profissionais com anos de experiência prática em equitação, medicina e gestão equestre.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.5 7H22l-6.5 4.5 2.5 7L12 17l-6 4.5 2.5-7L3 9h7.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certificado Reconhecido',
    description: 'Certificados aceitos por associações e entidades do setor equestre brasileiro.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Acesso Vitalício',
    description: 'Pague uma vez e acesse o conteúdo para sempre, incluindo todas as atualizações futuras.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 4a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 12l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Suporte com Especialistas',
    description: 'Tire suas dúvidas diretamente com os instrutores por fórum e sessões ao vivo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Conteúdo Atualizado',
    description: 'Material revisado constantemente com as mais recentes pesquisas e práticas do setor.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Comunidade Exclusiva',
    description: 'Faça parte de uma rede de apaixonados por cavalos que se ajudam e crescem juntos.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Por Que Nos Escolher
          </p>
          <h2 className="font-display text-brand-secondary text-3xl sm:text-4xl font-bold">
            Tudo que você precisa para evoluir
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-brand-forest/30 hover:bg-surface-light transition-all duration-200"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-forest/8 text-brand-forest flex items-center justify-center">
                {b.icon}
              </span>
              <div>
                <h3 className="font-display text-brand-secondary text-sm font-semibold mb-1">
                  {b.title}
                </h3>
                <p className="font-sans text-brand-text text-xs leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
