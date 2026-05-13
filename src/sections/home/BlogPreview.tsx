import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { articles } from '../../data/blog'
import { Link } from 'react-router'

const previewArticles = articles.filter(a => !a.featured).slice(0, 3);

export default function BlogPreview() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const cardsRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.12, childSelector: '.blog-card' });

  return (
    <section className="bg-sand-50 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <AccentLabel text="BLOG" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Historias del café
          </h2>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewArticles.map((article) => (
            <div key={article.id} className="blog-card group">
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.06em] text-cafe-500 mt-4">
                {article.category}
              </span>
              <h3 className="font-serif text-xl text-coffee-700 mt-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-coffee-500 font-sans mt-2 line-clamp-2">
                {article.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs font-sans font-bold text-cafe-500 hover:text-coffee-900 transition-colors duration-200 cursor-pointer">
                Leer más &rarr;
              </span>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="text-sm font-sans font-bold text-cafe-500 hover:text-coffee-900 transition-colors duration-200"
          >
            Ver todos los artículos &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
