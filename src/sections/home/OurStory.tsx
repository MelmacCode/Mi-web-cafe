import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'
import { Link } from 'react-router'

export default function OurStory() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const parallaxRef = useParallax<HTMLDivElement>();

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0">
        {/* Image */}
        <div ref={parallaxRef} className="parallax-block w-full md:w-[55%] rounded">
          <img
            src="/images/story-image.jpg"
            alt="Manos seleccionando granos de café tostado"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full md:w-[45%] md:pl-16 max-w-lg">
          <AccentLabel text="NUESTRA HISTORIA" />

          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Raíces en la tierra, pasión en cada grano
          </h2>

          <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
            Somos una familia de caficultores de Tabay, un pequeño pueblo andino de Mérida, Venezuela. En Don Moncho cultivamos café 100% orgánico a más de 1.600 metros de altitud, donde el clima fresco y la tierra fértil de los Andes nos regalan granos únicos. Cada taza de nuestro café cuenta la historia de tres generaciones dedicadas a la tierra.
          </p>

          <Link
            to="/nosotros"
            className="inline-block mt-6 text-xs font-sans font-bold uppercase tracking-[0.1em] text-cafe-500 hover:text-coffee-900 transition-colors duration-200"
          >
            Conoce nuestra historia &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
