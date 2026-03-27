'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-8 h-8 rounded-lg bg-brand-forest flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7 2 5 4.5 5 7c0 2 1 3.5 3 4.5L7.5 16H10L10.5 12C11.2 12.3 12 12.5 13 12.5c2 0 4-1 4.5-3L18 6c0 0-2-2-4-1 0 0 1-2.5-1-4C12 0.5 11 2 10 2z" fill="white"/>
              </svg>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-brand-secondary font-bold text-base tracking-tight leading-none">
                Instituto Cavalus
              </span>
              <span className="text-brand-forest text-[10px] font-sans font-semibold tracking-wide">
                Cursos Equestres Online
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                className="font-sans text-sm font-medium text-brand-text hover:text-brand-forest px-4 py-2 rounded-md hover:bg-brand-forest/6 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#cursos"
              scroll={false}
              className="font-display text-sm font-semibold bg-brand-forest hover:bg-brand-deep text-white px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm"
            >
              Ver Cursos
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-brand-secondary hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-sm font-medium text-brand-text hover:text-brand-forest py-2.5 px-3 rounded-md hover:bg-brand-forest/6 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="#cursos"
                  scroll={false}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center font-display text-sm font-semibold bg-brand-forest text-white py-3 rounded-lg"
                >
                  Ver Cursos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
