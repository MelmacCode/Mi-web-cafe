import AccentLabel from '../../components/AccentLabel'
import PillButton from '../../components/PillButton'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'

export default function InstagramCTA() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const imageRef = useParallax<HTMLDivElement>();

  const stats = [
    { number: '1,203', label: 'Seguidores' },
    { number: '20', label: 'Publicaciones' },
    { number: '+50', label: 'Etiquetas' },
  ];

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Phone Mockup */}
        <div ref={imageRef} className="parallax-block w-full md:w-[45%] flex justify-center">
          <img
            src="/images/phone-mockup.png"
            alt="Perfil de Instagram @donmonchocafe"
            className="max-w-[320px] w-full rounded-2xl shadow-card"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full md:w-[55%] max-w-lg">
          <AccentLabel text="SÍGUENOS EN INSTAGRAM" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            @donmonchocafe
          </h2>
          <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
            Más de 1.200 amantes del café ya forman parte de nuestra comunidad. Descubre recetas exclusivas, detrás de cámaras de nuestra finca, consejos de preparación y mucho más. ¡Etiquétanos con tu taza de Don Moncho!
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block font-serif text-3xl text-cafe-500">{stat.number}</span>
                <span className="block text-xs font-sans uppercase tracking-[0.05em] text-coffee-300 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <PillButton
              text="Seguir a @donmonchocafe"
              href="https://instagram.com/donmonchocafe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
