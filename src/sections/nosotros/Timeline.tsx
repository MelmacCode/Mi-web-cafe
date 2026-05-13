import { useRef, useEffect } from 'react';
import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '1962',
    title: 'Los inicios',
    description: 'Don Ramón "Moncho" establece la primera finca cafetalera en las laderas de Tabay, Mérida.',
  },
  {
    year: '1995',
    title: 'Segunda generación',
    description: 'Los hijos de Moncho expanden la finca e introducen métodos de cultivo orgánico certificado.',
  },
  {
    year: '2018',
    title: 'Don Moncho Café',
    description: 'Nace la marca Don Moncho Café, llevando el café artesanal de los Andes a toda Venezuela y el mundo.',
  },
];

export default function Timeline() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const entriesRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.2, childSelector: '.timeline-entry' });
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-sand-50 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <AccentLabel text="NUESTRA TRAYECTORIA" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Más de 60 años de tradición
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[26px] left-0 right-0 h-0.5 bg-coffee-300 origin-left"
          />

          {/* Entries */}
          <div ref={entriesRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {timelineData.map((entry) => (
              <div key={entry.year} className="timeline-entry text-center">
                <span className="font-serif text-4xl text-cafe-500">{entry.year}</span>
                <div className="hidden md:flex justify-center mt-3">
                  <div className="w-4 h-4 rounded-full bg-cafe-500 border-[3px] border-sand-50 relative z-10" />
                </div>
                <h3 className="font-serif text-xl text-coffee-700 mt-4">{entry.title}</h3>
                <p className="text-sm text-coffee-500 font-sans mt-2">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
