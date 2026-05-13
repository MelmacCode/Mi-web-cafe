import AccentLabel from '../../components/AccentLabel'
import PillButton from '../../components/PillButton'
import { InstagramIcon } from '../../components/Icons'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const mosaicImages = [
  '/images/mosaic-1.jpg',
  '/images/mosaic-2.jpg',
  '/images/mosaic-3.jpg',
  '/images/mosaic-4.jpg',
  '/images/mosaic-5.jpg',
];

export default function Community() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const imageRef = useScrollAnimation<HTMLDivElement>('scale-in', { duration: 1.0 });
  const mosaicRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.1, childSelector: '.mosaic-item' });

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div ref={imageRef} className="w-full md:w-[55%] rounded overflow-hidden">
            <img
              src="/images/community-main.jpg"
              alt="Amigos compartiendo café Don Moncho"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div ref={textRef} className="w-full md:w-[45%] md:pl-16 max-w-lg">
            <AccentLabel text="COMUNIDAD" />
            <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
              Sé parte de la familia Don Moncho
            </h2>
            <p className="text-base text-coffee-500 font-sans leading-relaxed mt-6">
              Comparte tus momentos con nuestro café, descubre recetas exclusivas y conecta con amantes del café de toda Venezuela. Síguenos en Instagram y únete a la conversación.
            </p>
            <div className="mt-8">
              <PillButton
                text="@donmonchocafe"
                href="https://instagram.com/donmonchocafe"
                className="inline-flex items-center gap-2"
              >
                <InstagramIcon size={18} />
                <span>@donmonchocafe</span>
              </PillButton>
            </div>
          </div>
        </div>

        {/* Photo Mosaic */}
        <div ref={mosaicRef} className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-16">
          {mosaicImages.map((img, i) => (
            <div key={i} className="mosaic-item aspect-square rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Comunidad Don Moncho ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
