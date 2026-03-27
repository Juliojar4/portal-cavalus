'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instrutores de Campo',
    description: 'Profissionais com anos de experiência prática em equitação, medicina e gestão equestre.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L16.5 9.5H23.5L18 13.5L20 20L14 16L8 20L10 13.5L4.5 9.5H11.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certificado Reconhecido',
    description: 'Certificados com validade profissional, aceitos por associações e entidades do setor equestre.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14C4 19.5 8.5 24 14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 4L24 4L24 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8L24 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 9V14L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Acesso Vitalício',
    description: 'Pague uma vez e acesse o conteúdo para sempre, incluindo todas as atualizações futuras.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a5 5 0 100 10A5 5 0 0014 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 24a9 9 0 0118 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 14l2 2-2 2M23 16h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Suporte com Especialistas',
    description: 'Tire suas dúvidas diretamente com os instrutores por fórum e sessões ao vivo.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 14h8M10 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Conteúdo Atualizado',
    description: 'Material revisado constantemente com as mais recentes pesquisas e práticas do setor.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 14c0-5 4-9 9-9s9 4 9 9-4 9-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 23C7 21.5 5 18.5 5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="2" fill="currentColor"/>
        <circle cx="18" cy="11" r="2" fill="currentColor"/>
        <path d="M11 17s1 2 3.5 2 3.5-2 3.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Comunidade Exclusiva',
    description: 'Faça parte de uma rede de apaixonados por cavalos que se ajudam e crescem juntos.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-forest relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="why-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#why-dots)"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-deep/30 rounded-full blur-[80px] -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand-accent/15 rounded-full blur-[60px] translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-brand-accent" />
            <span className="font-sans text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">Por Que Nós</span>
            <span className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-white text-4xl sm:text-5xl font-bold"
          >
            Por que escolher o Instituto Cavalus?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/70 text-lg mt-4 max-w-xl mx-auto"
          >
            Formação de qualidade com quem realmente entende do universo equestre.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:bg-white/20 hover:border-brand-accent/50 transition-all duration-300"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white/15 text-white mb-4 group-hover:bg-brand-accent group-hover:text-brand-deep transition-all duration-300">
                {b.icon}
              </span>
              <h3 className="font-display text-white text-xl font-semibold mb-2">
                {b.title}
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
