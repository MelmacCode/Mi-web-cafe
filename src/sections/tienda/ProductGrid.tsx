import { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.1, childSelector: '.shop-card' });

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Listen for filter changes from FilterBar
  useState(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.category) setActiveCategory(detail.category);
    };
    window.addEventListener('filter-change', handler);
    return () => window.removeEventListener('filter-change', handler);
  });

  return (
    <section id="product-grid" className="bg-sand-50 py-12 md:py-16 px-6 md:px-12 pb-24 md:pb-32">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}