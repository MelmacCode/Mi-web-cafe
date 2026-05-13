import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'
import { Link } from 'react-router'

export default function Process() {
  const textRef1 = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const parallaxRef1 = useParallax<HTMLDivElement>();
  const textRef2 = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const parallaxRef2 = useParallax<HTMLDivElement>();

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {/* Row 1 — Cultivo */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={parallaxRef1} className="parallax-block w-full md:w-1/2 rounded">
            <img
              src="/images/process-cultivo.jpg"
              alt="Cultivo de café en las montañas andinas"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
          <div ref={textRef1} className="w-full md:w-1/2 md:pl-16 max-w-lg">
            <AccentLabel text="DE LA TIERRA" />
            <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
              Cultivado a 1.600 metros de altitud
            </h2>
            <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
              En las laderas andinas de Tabay, nuestros cafetos crecen bajo la sombra de árboles nativos. El clima fresco, las lluvias constantes y la tierra volcánica crean las condiciones perfectas para granos de café excepcionales.
            </p>
          </div>
        </div>

        {/* Row 2 — Tostado */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div ref={textRef2} className="w-full md:w-1/2 md:pr-16 max-w-lg">
            <AccentLabel text="ARTESANÍA" />
            <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
              Tostado en pequeños lotes
            </h2>
            <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
              Cada lote se tuesta artesanalmente en nuestra finca. Controlamos el proceso de tostado grano por grano para resaltar las notas de origen que hacen único nuestro café: chocolate, frutos secos y un dulzor natural de las montañas.
            </p>
            <Link
              to="/nosotros"
              className="inline-block mt-6 text-xs font-sans font-bold uppercase tracking-[0.1em] text-cafe-500 hover:text-coffee-900 transition-colors duration-200"
            >
              Conoce el proceso completo &rarr;
            </Link>
          </div>
          <div ref={parallaxRef2} className="parallax-block w-full md:w-1/2 rounded">
            <img
              src="/images/process-tostado.jpg"
              alt="Proceso de tostado artesanal de café"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
