import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'
import { articles } from '../../data/blog'

const featured = articles.find((a) => a.featured)!;

export default function FeaturedArticle() {
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const imageRef = useParallax<HTMLDivElement>();

  return (
    <section className="bg-coffee-100 py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="relative w-full md:w-[55%]">
          <div className="absolute -top-3 -left-3 z-10">
            <AccentLabel text="DESTACADO" variant="highlight" />
          </div>
          <div ref={imageRef} className="parallax-block rounded-lg overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full md:w-[45%] md:pl-16 max-w-lg">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.08em] text-cafe-500">
            {featured.category}
          </span>
          <h2 className="font-serif text-3xl md:text-[40px] text-coffee-700 leading-[1.2] mt-4">
            {featured.title}
          </h2>
          <p className="text-base text-coffee-500 font-sans leading-relaxed mt-4 max-w-md">
            {featured.excerpt}
          </p>
          <p className="text-xs text-coffee-300 font-sans mt-3">
            {featured.date} &middot; {featured.readTime} de lectura
          </p>
          <span className="inline-block mt-5 text-sm font-sans font-bold text-cafe-500 hover:text-coffee-900 transition-colors duration-200 cursor-pointer">
            Leer artículo completo &rarr;
          </span>
        </div>
      </div>
    </section>
  )
}
