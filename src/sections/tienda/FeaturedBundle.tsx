import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'

export default function FeaturedBundle() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const imageRef = useParallax<HTMLDivElement>();

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-3 -left-3 z-10">
            <AccentLabel text="MÁS VENDIDO" variant="highlight" />
          </div>
          <div ref={imageRef} className="parallax-block rounded-lg overflow-hidden">
            <img
              src="/images/bundle-image.jpg"
              alt="Combo Familiar Don Moncho"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full md:w-1/2 md:pl-16 max-w-lg">
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2]">
            Combo Familiar Don Moncho
          </h2>
          <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
            Lleva los tres sabores de Don Moncho a tu casa. Un Café Moca, un Torrefacto y un Orgánico, cada uno de 250g. La forma perfecta de descubrir todo lo que nuestras montañas tienen para ofrecer.
          </p>

          <ul className="mt-5 space-y-1">
            <li className="text-sm text-coffee-500 font-sans flex items-center gap-2">
              <span className="text-cafe-500">&#10003;</span> Café Moca 250g
            </li>
            <li className="text-sm text-coffee-500 font-sans flex items-center gap-2">
              <span className="text-cafe-500">&#10003;</span> Café Torrefacto 250g
            </li>
            <li className="text-sm text-coffee-500 font-sans flex items-center gap-2">
              <span className="text-cafe-500">&#10003;</span> Café Orgánico 250g
            </li>
          </ul>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-2xl font-sans font-bold text-cafe-500">$32.00</span>
            <span className="text-lg text-coffee-300 font-sans line-through">$38.00</span>
          </div>
          <p className="text-xs font-sans font-bold uppercase text-cafe-500 mt-1">
            ¡Ahorra $6.00!
          </p>

          <button
            onClick={() => alert('Combo Familiar agregado al carrito')}
            className="mt-6 px-8 py-3.5 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors duration-200"
          >
            Agregar Combo al Carrito
          </button>
        </div>
      </div>
    </section>
  )
}
