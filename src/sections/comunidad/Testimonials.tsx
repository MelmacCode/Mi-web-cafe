import { useState, useCallback } from 'react';
import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { testimonials } from '../../data/testimonials'
import { ChevronLeft, ChevronRight } from '../../components/Icons'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  }, [visibleCount]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= testimonials.length - visibleCount ? 0 : prev + 1));
  }, [visibleCount]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  // Wrap around if needed
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(...testimonials.slice(0, visibleCount - visibleTestimonials.length));
  }

  return (
    <section className="bg-coffee-100 py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <AccentLabel text="TESTIMONIOS" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Lo que dice nuestra comunidad
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-coffee-300 flex items-center justify-center text-coffee-500 hover:bg-coffee-100 transition-colors duration-200 bg-sand-50"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-coffee-300 flex items-center justify-center text-coffee-500 hover:bg-coffee-100 transition-colors duration-200 bg-sand-50"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl p-8 shadow-card"
              >
                <span className="font-serif text-5xl text-coffee-300 leading-none">&ldquo;</span>
                <p className="font-serif text-lg italic text-coffee-700 leading-relaxed -mt-2">
                  {t.quote}
                </p>
                <p className="font-sans font-bold text-sm text-coffee-900 mt-5">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-coffee-300 mt-1">
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
