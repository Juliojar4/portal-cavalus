'use client'

import { motion } from 'framer-motion'
import { courses } from '@/data/courses'
import { CourseThumb } from '@/components/CourseThumb'

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 4.5V7l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="8" width="3" height="5" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="5.5" y="5" width="3" height="8" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="2" width="3" height="11" rx="1" fill="currentColor"/>
    </svg>
  )
}

export default function Courses() {
  return (
    <section id="cursos" className="py-16 lg:py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-brand-forest text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Grade Completa
          </p>
          <h2 className="font-display text-brand-secondary text-3xl sm:text-4xl font-bold">
            Nossos Cursos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="group bg-white rounded-xl border border-gray-100 hover:border-brand-forest/30 hover:shadow-lg hover:shadow-brand-forest/8 transition-all duration-250 flex flex-col overflow-hidden"
            >
              <CourseThumb id={course.id} />

              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block self-start font-sans text-[11px] font-semibold px-2.5 py-1 rounded-md bg-brand-forest/8 text-brand-forest mb-3">
                  {course.category}
                </span>

                <h3 className="font-display text-brand-secondary font-semibold text-base leading-snug mb-2 group-hover:text-brand-forest transition-colors duration-150">
                  {course.title}
                </h3>

                <p className="font-sans text-brand-text text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-brand-text/55 mb-4">
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <ClockIcon />
                    {course.hours}h de conteúdo
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <BarIcon />
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {course.free ? (
                    <span className="font-display text-brand-forest text-lg font-bold">Gratuito</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans text-brand-text/50 text-xs">R$</span>
                      <span className="font-display text-brand-secondary text-xl font-bold">
                        {course.price.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  )}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold bg-brand-forest text-white px-4 py-2 rounded-lg hover:bg-brand-deep transition-colors duration-150"
                  >
                    Ver curso
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
