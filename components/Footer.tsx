'use client'

import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Sobre o Instituto', href: '#sobre' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Todos os Cursos', href: '#cursos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const categories = [
  'Equitação & Dressage',
  'Saúde & Medicina Equina',
  'Manejo & Haras',
  'Esportes Equestres',
  'Equoterapia',
  'Gestão Equestre',
]

export default function Footer() {
  return (
    <footer className="bg-[#071410] relative overflow-hidden">

  

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-display text-white text-2xl font-semibold tracking-wide">
                Instituto Cavalus
              </span>
              <span className="text-brand-accent/60 text-xs font-sans font-light tracking-[0.2em] uppercase mt-0.5">
                O Mundo Equestre em Um Clique
              </span>
            </Link>
            <p className="font-sans text-white text-sm leading-relaxed mt-4 mb-6">
              A plataforma de referência em formação equestre profissional no Brasil.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: '#',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 9l6 3-6 3V9z" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: '#',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 12a9 9 0 01-9 9 8.97 8.97 0 01-4.72-1.33L3 21l1.35-4.15A8.97 8.97 0 013 12a9 9 0 019-9 9 9 0 019 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M9 10c.5 1.5 2 3 3.5 3.5l1-1c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7C14.8 15.6 13 16 11 14c-2-2-2.6-3.8-1.7-4.7.2-.2.5-.2.7 0L11.5 11c.2.2.2.5 0 .7L10 13" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-forest/40 text-white/50 hover:text-brand-accent flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-white text-xs font-semibold tracking-[0.18em] mb-5 uppercase">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    scroll={false}
                    className="font-sans text-white hover:text-brand-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-brand-forest/40 group-hover:w-5 group-hover:bg-brand-accent transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans text-white text-xs font-semibold tracking-[0.18em] mb-5 uppercase">
              Categorias
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="#categorias"
                    scroll={false}
                    className="font-sans text-white hover:text-brand-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-brand-forest/40 group-hover:w-5 group-hover:bg-brand-accent transition-all duration-200" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white text-xs font-semibold tracking-[0.18em] mb-5 uppercase">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@institutocavalus.com.br" className="flex items-start gap-3 group">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 text-brand-accent/70 flex-shrink-0">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  <span className="font-sans text-white group-hover:text-brand-accent text-sm transition-colors duration-200 break-all">
                    contato@institutocavalus.com.br
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 text-brand-accent/70 flex-shrink-0">
                  <circle cx="8" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M8 2C5.2 2 3 4.2 3 7c0 3.5 5 8 5 8s5-4.5 5-8c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span className="font-sans text-white text-sm">São Paulo, Brasil</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/6">
              <p className="font-sans text-white text-xs leading-relaxed">
                Receba novidades sobre cursos e promoções.
              </p>
              <a
                href="mailto:contato@institutocavalus.com.br"
                className="inline-flex items-center gap-1.5 mt-3 font-sans text-brand-accent text-xs font-semibold hover:text-brand-accent/70 transition-colors"
              >
                Inscrever-se
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6">
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white text-sm">
              © 2025 Instituto Cavalus. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="font-sans text-white hover:text-white/70 text-xs transition-colors duration-200">
                Política de Privacidade
              </a>
              <span className="text-white">·</span>
              <a href="#" className="font-sans text-white hover:text-white/70 text-xs transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
