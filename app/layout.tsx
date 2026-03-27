import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Instituto Cavalus — O Mundo Equestre em Um Clique',
  description: 'Cursos online especializados em equitação, manejo, saúde equina, gestão de haras e muito mais. Formação profissional para o mundo equestre brasileiro.',
  keywords: ['equitação', 'cavalos', 'cursos equestres', 'hipismo', 'saúde equina', 'manejo', 'haras'],
  openGraph: {
    title: 'Instituto Cavalus — Formação Equestre Profissional',
    description: 'A maior plataforma de cursos equestres do Brasil. Aprenda com especialistas certificados.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Instituto Cavalus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Cavalus',
    description: 'Formação profissional para o mundo equestre.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  )
}
