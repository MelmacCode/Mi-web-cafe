import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'

export default function FamilyStory() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const parallaxRef = useParallax<HTMLDivElement>();

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div ref={textRef} className="w-full md:w-[55%] max-w-xl">
          <AccentLabel text="LAS RAÍCES" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Todo comenzó en una finca de Tabay
          </h2>
          <div className="mt-6 space-y-6 text-base text-coffee-500 font-sans leading-relaxed">
            <p>
              Don Ramón — "Moncho" para todos — llegó a Tabay en los años sesenta con una mula, una machete y un sueño: cultivar el mejor café de los Andes venezolanos. Con las manos en la tierra y el corazón en su familia, fue transformando laderas de montaña en cafetales prósperos.
            </p>
            <p>
              Hoy, sus nietos siguen su legado. Cada grano que tostamos lleva consigo la tercera generación de conocimiento cafetalero, el respeto por la tierra y la pasión de quienes entienden que el café no es solo una bebida — es una forma de vida.
            </p>
            <p>
              Nuestro café es 100% orgánico, cultivado sin pesticidas ni químicos, con prácticas sostenibles que protegen los ecosistemas andinos que nos han dado tanto.
            </p>
          </div>
          <blockquote className="mt-8 pl-5 border-l-[3px] border-cafe-500">
            <p className="font-serif text-xl italic text-cafe-500 leading-relaxed">
              "El café nos enseñó que las cosas buenas toman tiempo."
            </p>
          </blockquote>
        </div>

        {/* Image */}
        <div ref={parallaxRef} className="parallax-block w-full md:w-[45%] rounded">
          <img
            src="/images/familia-image.jpg"
            alt="Familia de caficultores Don Moncho"
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
