import type { Article } from '../data/blog';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card group">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.06em] text-cafe-500">
          {article.category}
        </span>
        <h3 className="font-serif text-xl text-coffee-700 mt-2 leading-tight line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-coffee-500 font-sans mt-2 line-clamp-3">
          {article.excerpt}
        </p>
        <p className="text-xs text-coffee-300 font-sans mt-3">
          {article.date} &middot; {article.readTime} de lectura
        </p>
      </div>
    </div>
  );
}
