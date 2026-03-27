import type { Metadata, Viewport } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const openSans = Open_Sans({
  variable: '--font-opensans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Instituto Cavalus — Cursos Equestres Online',
  description: 'Cursos online especializados em equitação, manejo, saúde equina, gestão de haras e muito mais. Formação profissional para o mundo equestre brasileiro.',
  keywords: ['equitação', 'cavalos', 'cursos equestres', 'hipismo', 'saúde equina', 'manejo', 'haras'],
  openGraph: {
    title: 'Instituto Cavalus — Formação Equestre Profissional',
    description: 'A maior plataforma de cursos equestres do Brasil. Aprenda com especialistas certificados.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Instituto Cavalus' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
