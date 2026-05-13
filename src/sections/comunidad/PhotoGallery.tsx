import AccentLabel from '../../components/AccentLabel'
import { InstagramIcon } from '../../components/Icons'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
  '/images/gallery-12.jpg',
];

export default function PhotoGallery() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const gridRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.08, childSelector: '.gallery-item' });

  return (
    <section className="bg-sand-50 py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <AccentLabel text="MOMENTOS COMPARTIDOS" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Tu café, tu momento
          </h2>
          <p className="text-base text-coffee-500 font-sans mt-3">
            Etiquétanos @donmonchocafe y aparece en nuestra galería
          </p>
        </div>

        {/* Mosaic Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative aspect-square rounded-lg overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${i === 7 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={img}
                alt={`Momento Don Moncho ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(27,18,14,0.4)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
