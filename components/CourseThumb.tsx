import type { ReactElement } from 'react'
import Image from 'next/image'

// Courses that have real photos — others fall back to SVG illustrations
const photoThumbs: Record<number, string> = {
  1: '/course-1.jpg',
  2: '/course-2.jpg',
  4: '/course-4.jpg',
  5: '/course-5.jpg',
  7: '/course-7.jpg',
  8: '/course-8.jpg',
  9: '/course-9.jpg',
  10: '/course-10.jpg',
  11: '/course-11.jpg',
  12: '/course-12.jpg',
}

// SVG thumbnail illustrations for courses without photos

const thumbs: Record<number, ReactElement> = {
  // 1 — Equitação Básica para Iniciantes
  1: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a4f1a"/>
          <stop offset="100%" stopColor="#22A731"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g1)"/>
      {/* Ground */}
      <rect x="0" y="145" width="320" height="35" fill="#071f0b" opacity="0.5"/>
      {/* Horse body */}
      <ellipse cx="160" cy="118" rx="55" ry="30" fill="#071f0b" opacity="0.8"/>
      {/* Horse head + neck */}
      <ellipse cx="205" cy="95" rx="16" ry="22" fill="#071f0b" opacity="0.8" transform="rotate(-20,205,95)"/>
      <rect x="196" y="88" width="22" height="28" fill="#071f0b" opacity="0.8" transform="rotate(-15,196,88)"/>
      {/* Legs */}
      <rect x="125" y="142" width="10" height="24" rx="4" fill="#071f0b" opacity="0.8"/>
      <rect x="143" y="142" width="10" height="24" rx="4" fill="#071f0b" opacity="0.8"/>
      <rect x="170" y="142" width="10" height="24" rx="4" fill="#071f0b" opacity="0.8"/>
      <rect x="188" y="142" width="10" height="24" rx="4" fill="#071f0b" opacity="0.8"/>
      {/* Rider */}
      <ellipse cx="155" cy="97" rx="10" ry="11" fill="white" opacity="0.85"/>
      <rect x="146" y="107" width="19" height="16" rx="3" fill="white" opacity="0.75"/>
      {/* Star accent */}
      <circle cx="48" cy="38" r="18" fill="white" opacity="0.06"/>
      <circle cx="48" cy="38" r="10" fill="white" opacity="0.08"/>
      {/* Level pill */}
      <rect x="14" y="14" width="72" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="50" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">INICIANTE</text>
    </svg>
  ),

  // 2 — Doma Natural
  2: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a4a2e"/>
          <stop offset="100%" stopColor="#2d8a50"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g2)"/>
      {/* Abstract flowing lines — connection */}
      <path d="M60,90 Q130,40 200,90 Q260,130 300,80" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
      <path d="M60,100 Q130,55 200,100 Q260,140 300,90" fill="none" stroke="white" strokeWidth="1" opacity="0.12"/>
      {/* Horse head silhouette */}
      <path d="M180,60 C185,45 200,40 210,48 C218,54 215,65 212,72 L205,85 L190,82 Z" fill="white" opacity="0.8"/>
      <path d="M205,85 L190,82 L185,100 L200,105 Z" fill="white" opacity="0.7"/>
      {/* Human hand reaching */}
      <path d="M90,95 L108,88 L112,82 L116,80 L118,84 L114,87 L120,80 L122,84 L116,89 L122,83 L124,87 L118,92 L120,88 L122,92 L108,100 Z" fill="white" opacity="0.8"/>
      {/* Dots */}
      <circle cx="150" cy="90" r="4" fill="white" opacity="0.3"/>
      <circle cx="162" cy="84" r="3" fill="white" opacity="0.2"/>
      <circle cx="170" cy="78" r="2" fill="white" opacity="0.15"/>
      <rect x="14" y="14" width="96" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="62" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">INTERMEDIÁRIO</text>
    </svg>
  ),

  // 3 — Saúde e Nutrição Equina
  3: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d4a6b"/>
          <stop offset="100%" stopColor="#1a7a9a"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g3)"/>
      {/* Stethoscope circle */}
      <circle cx="170" cy="90" r="45" fill="none" stroke="white" strokeWidth="3" opacity="0.25"/>
      <circle cx="170" cy="90" r="32" fill="white" opacity="0.08"/>
      {/* Cross */}
      <rect x="160" y="68" width="20" height="44" rx="4" fill="white" opacity="0.85"/>
      <rect x="149" y="79" width="42" height="20" rx="4" fill="white" opacity="0.85"/>
      {/* Apple */}
      <circle cx="60" cy="85" r="22" fill="white" opacity="0.15"/>
      <path d="M60,62 Q65,55 70,60" fill="none" stroke="white" strokeWidth="2" opacity="0.4"/>
      <circle cx="60" cy="85" r="16" fill="white" opacity="0.2"/>
      {/* Leaf */}
      <path d="M56,50 Q70,44 68,58 Q54,62 56,50Z" fill="white" opacity="0.25"/>
      <rect x="14" y="14" width="55" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="41" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">TODOS</text>
    </svg>
  ),

  // 4 — Primeiros Socorros (FREE)
  4: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7b1d1d"/>
          <stop offset="100%" stopColor="#c0392b"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g4)"/>
      {/* Medical bag */}
      <rect x="110" y="65" width="100" height="75" rx="8" fill="white" opacity="0.15"/>
      <rect x="130" y="55" width="60" height="20" rx="6" fill="white" opacity="0.12"/>
      {/* Cross on bag */}
      <rect x="150" y="80" width="20" height="44" rx="4" fill="white" opacity="0.9"/>
      <rect x="139" y="91" width="42" height="20" rx="4" fill="white" opacity="0.9"/>
      {/* Handle */}
      <path d="M145,56 Q160,44 175,56" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
      {/* Free badge */}
      <rect x="244" y="14" width="62" height="22" rx="11" fill="#22A731"/>
      <text x="275" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700">GRATUITO</text>
      <rect x="14" y="14" width="55" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="41" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">TODOS</text>
    </svg>
  ),

  // 5 — Gestão de Haras
  5: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a3200"/>
          <stop offset="100%" stopColor="#8a6020"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g5)"/>
      {/* Barn shape */}
      <polygon points="160,30 240,80 240,150 80,150 80,80" fill="white" opacity="0.12"/>
      <polygon points="160,25 248,78 72,78" fill="white" opacity="0.18"/>
      {/* Barn body */}
      <rect x="96" y="78" width="128" height="72" fill="white" opacity="0.1"/>
      {/* Door */}
      <rect x="140" y="108" width="40" height="42" rx="3" fill="white" opacity="0.25"/>
      <path d="M160,108 L160,150" stroke="white" strokeWidth="1.5" opacity="0.4"/>
      {/* Windows */}
      <rect x="104" y="90" width="22" height="22" rx="2" fill="white" opacity="0.2"/>
      <rect x="194" y="90" width="22" height="22" rx="2" fill="white" opacity="0.2"/>
      {/* Chart bars */}
      <rect x="48" y="110" width="12" height="30" rx="2" fill="white" opacity="0.3"/>
      <rect x="64" y="98" width="12" height="42" rx="2" fill="white" opacity="0.3"/>
      <rect x="80" y="88" width="12" height="52" rx="2" fill="#61CE70" opacity="0.6"/>
      <rect x="14" y="14" width="96" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="62" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">INTERMEDIÁRIO</text>
    </svg>
  ),

  // 6 — Equoterapia
  6: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g6" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a1560"/>
          <stop offset="100%" stopColor="#7b2d9a"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g6)"/>
      {/* Heart */}
      <path d="M160,130 L100,85 C85,70 85,48 105,44 C120,41 135,52 160,72 C185,52 200,41 215,44 C235,48 235,70 220,85 Z" fill="white" opacity="0.85"/>
      {/* Horse silhouette inside heart area */}
      <path d="M155,80 C148,72 140,68 138,75 C136,80 140,86 146,88 L144,105 L150,105 L151,95 C154,96 157,96 160,95 L161,105 L167,105 L165,88 C171,86 175,80 173,75 C171,68 163,72 155,80Z" fill="#7b2d9a" opacity="0.5"/>
      {/* Glow rings */}
      <circle cx="160" cy="90" r="55" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
      <circle cx="160" cy="90" r="70" fill="none" stroke="white" strokeWidth="1" opacity="0.06"/>
      <rect x="14" y="14" width="68" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="48" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">AVANÇADO</text>
    </svg>
  ),

  // 7 — Manejo Reprodutivo
  7: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g7" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d3a5a"/>
          <stop offset="100%" stopColor="#1a6090"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g7)"/>
      {/* DNA helix */}
      <path d="M130,30 Q160,55 130,80 Q100,105 130,130 Q160,155 130,175" fill="none" stroke="white" strokeWidth="3" opacity="0.6"/>
      <path d="M190,30 Q160,55 190,80 Q220,105 190,130 Q160,155 190,175" fill="none" stroke="white" strokeWidth="3" opacity="0.6"/>
      {/* Cross bars */}
      <line x1="138" y1="45" x2="182" y2="45" stroke="white" strokeWidth="2" opacity="0.4"/>
      <line x1="123" y1="63" x2="197" y2="63" stroke="white" strokeWidth="2" opacity="0.4"/>
      <line x1="130" y1="80" x2="190" y2="80" stroke="white" strokeWidth="2" opacity="0.4"/>
      <line x1="123" y1="97" x2="197" y2="97" stroke="white" strokeWidth="2" opacity="0.4"/>
      <line x1="130" y1="115" x2="190" y2="115" stroke="white" strokeWidth="2" opacity="0.4"/>
      <line x1="138" y1="132" x2="182" y2="132" stroke="white" strokeWidth="2" opacity="0.4"/>
      {/* Nodes */}
      {[45,63,80,97,115,132].map((y, i) => (
        <g key={i}>
          <circle cx="130" cy={y} r="4" fill="white" opacity="0.7"/>
          <circle cx="190" cy={y} r="4" fill="white" opacity="0.7"/>
        </g>
      ))}
      <rect x="14" y="14" width="96" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="62" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">INTERMEDIÁRIO</text>
    </svg>
  ),

  // 8 — Treinamento para Esporte
  8: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g8" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7a4400"/>
          <stop offset="100%" stopColor="#c07010"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g8)"/>
      {/* Trophy */}
      <rect x="144" y="118" width="32" height="10" rx="2" fill="white" opacity="0.8"/>
      <rect x="136" y="128" width="48" height="8" rx="2" fill="white" opacity="0.8"/>
      <path d="M152,40 L160,62 L178,62 L164,74 L169,96 L160,88 L151,96 L156,74 L142,62 L160,62 Z" fill="white" opacity="0.85"/>
      <path d="M160,40 L168,62 L186,62 L172,74 L177,96 L160,88" fill="white" opacity="0.85"/>
      {/* Cup body */}
      <path d="M140,42 Q120,42 118,60 Q116,75 135,82 L140,90 L180,90 L185,82 C204,75 204,60 202,42 Z" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
      <path d="M140,90 Q140,105 150,108 L170,108 Q180,105 180,90" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
      <rect x="14" y="14" width="68" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="48" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">AVANÇADO</text>
    </svg>
  ),

  // 9 — Ferração e Cascos
  9: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g9" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2a3a"/>
          <stop offset="100%" stopColor="#4a5080"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g9)"/>
      {/* Horseshoe */}
      <path d="M160,50 C120,50 95,75 95,108 C95,130 108,145 125,148 C135,150 140,140 145,130 L175,130 C180,140 185,150 195,148 C212,145 225,130 225,108 C225,75 200,50 160,50Z" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.8"/>
      {/* Nail holes */}
      <circle cx="112" cy="96" r="5" fill="white" opacity="0.5"/>
      <circle cx="105" cy="118" r="5" fill="white" opacity="0.5"/>
      <circle cx="208" cy="96" r="5" fill="white" opacity="0.5"/>
      <circle cx="215" cy="118" r="5" fill="white" opacity="0.5"/>
      {/* Hammer */}
      <rect x="56" y="58" width="16" height="36" rx="3" fill="white" opacity="0.3" transform="rotate(30,64,76)"/>
      <rect x="48" y="52" width="32" height="20" rx="4" fill="white" opacity="0.4" transform="rotate(30,64,62)"/>
      <rect x="14" y="14" width="55" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="41" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">TODOS</text>
    </svg>
  ),

  // 10 — Comportamento e Bem-Estar
  10: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g10" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a4a2a"/>
          <stop offset="100%" stopColor="#3a8a50"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g10)"/>
      {/* Horse head profile */}
      <path d="M175,40 C188,35 200,44 202,56 C204,65 196,74 190,80 L185,95 L162,98 L158,85 C148,82 140,74 142,62 C144,48 160,42 175,40Z" fill="white" opacity="0.8"/>
      {/* Eye */}
      <circle cx="188" cy="58" r="5" fill="#1a4a2a"/>
      <circle cx="190" cy="56" r="1.5" fill="white"/>
      {/* Smile lines */}
      <path d="M165,78 Q170,82 178,80" fill="none" stroke="#1a4a2a" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Mane */}
      <path d="M178,40 C172,30 168,20 172,14 M175,40 C175,28 178,18 182,12 M172,40 C164,32 158,24 162,15" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      {/* Leaves */}
      <circle cx="60" cy="70" r="20" fill="white" opacity="0.07"/>
      <circle cx="80" cy="110" r="15" fill="white" opacity="0.05"/>
      <circle cx="260" cy="90" r="25" fill="white" opacity="0.06"/>
      <rect x="14" y="14" width="55" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="41" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">TODOS</text>
    </svg>
  ),

  // 11 — Preparação para Salto
  11: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g11" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b1a00"/>
          <stop offset="100%" stopColor="#c04020"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g11)"/>
      {/* Jump fence */}
      <rect x="60" y="120" width="8" height="45" rx="3" fill="white" opacity="0.7"/>
      <rect x="252" y="120" width="8" height="45" rx="3" fill="white" opacity="0.7"/>
      <rect x="55" y="118" width="210" height="9" rx="4" fill="white" opacity="0.8"/>
      <rect x="55" y="135" width="210" height="6" rx="3" fill="white" opacity="0.5"/>
      <rect x="55" y="148" width="210" height="5" rx="2.5" fill="white" opacity="0.3"/>
      {/* Horse jumping (arc) */}
      <path d="M80,118 Q160,40 240,118" fill="none" stroke="white" strokeWidth="3" strokeDasharray="6 4" opacity="0.4"/>
      {/* Horse silhouette mid-jump */}
      <ellipse cx="160" cy="78" rx="32" ry="16" fill="white" opacity="0.75" transform="rotate(-10,160,78)"/>
      <ellipse cx="186" cy="66" rx="10" ry="13" fill="white" opacity="0.75" transform="rotate(-20,186,66)"/>
      {/* Legs */}
      <line x1="140" y1="90" x2="128" y2="108" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
      <line x1="150" y1="92" x2="142" y2="112" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
      <line x1="172" y1="90" x2="178" y2="108" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
      <line x1="180" y1="88" x2="190" y2="106" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
      <rect x="14" y="14" width="68" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="48" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">AVANÇADO</text>
    </svg>
  ),

  // 12 — Administração de Clínica
  12: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="g12" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a2a4a"/>
          <stop offset="100%" stopColor="#1a5a8a"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#g12)"/>
      {/* Clipboard */}
      <rect x="110" y="38" width="100" height="120" rx="6" fill="white" opacity="0.15"/>
      <rect x="110" y="38" width="100" height="120" rx="6" fill="none" stroke="white" strokeWidth="2" opacity="0.5"/>
      {/* Clipboard clip */}
      <rect x="138" y="32" width="44" height="16" rx="8" fill="white" opacity="0.5"/>
      {/* Lines */}
      <rect x="122" y="68" width="76" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="122" y="80" width="60" height="4" rx="2" fill="white" opacity="0.3"/>
      <rect x="122" y="92" width="70" height="4" rx="2" fill="white" opacity="0.3"/>
      {/* Checkboxes */}
      <rect x="122" y="106" width="10" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
      <path d="M123,111 L126,114 L131,107" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <rect x="122" y="120" width="10" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
      <path d="M123,125 L126,128 L131,121" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      {/* Stethoscope */}
      <path d="M220,70 Q240,70 240,90 Q240,115 220,115 Q200,115 200,95" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      <circle cx="200" cy="95" r="8" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
      <circle cx="220" cy="65" r="5" fill="white" opacity="0.5"/>
      <line x1="220" y1="55" x2="220" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      <rect x="14" y="14" width="96" height="22" rx="11" fill="white" opacity="0.15"/>
      <text x="62" y="26.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="600">INTERMEDIÁRIO</text>
    </svg>
  ),
}

export function CourseThumb({ id }: { id: number }) {
  const photo = photoThumbs[id]

  if (photo) {
    return (
      <div className="w-full aspect-video overflow-hidden relative">
        <Image
          src={photo}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>
    )
  }

  return (
    <div className="w-full aspect-video overflow-hidden bg-gray-800">
      {thumbs[id] ?? (
        <div className="w-full h-full bg-gradient-to-br from-brand-forest to-brand-deep flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white/40">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      )}
    </div>
  )
}
