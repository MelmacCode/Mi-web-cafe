import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { articles } from '../../data/blog'
import ArticleCard from '../../components/ArticleCard'

const gridArticles = articles.filter((a) => !a.featured);

export default function ArticleGrid() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const gridRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.12, childSelector: '.article-card' });

  return (
    <section className="bg-sand-50 py-20 md:py-24 px-6 md:px-12 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-12">
          <AccentLabel text="ARTÍCULOS RECIENTES" variant="dark" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-4">
            Todo sobre el café
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article) => (
            <div key={article.id} className="article-card">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
