import { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { products } from '../../data/products'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.1, childSelector: '.shop-card' });

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Listen for filter changes from FilterBar
  // We use a custom event since FilterBar and ProductGrid are siblings
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
          <div key={product.id} className="shop-card bg-white rounded-xl p-6 shadow-card">
            <div className="aspect-square bg-cream rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl text-coffee-700 mt-4">{product.name}</h3>
            <p className="text-xs uppercase text-cafe-300 tracking-[0.05em] font-sans mt-1">
              {product.weight}
            </p>
            <p className="text-sm text-coffee-500 font-sans mt-1 line-clamp-2">
              {product.description}
            </p>
            <p className="text-xl font-sans font-bold text-cafe-500 mt-3">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => alert(`${product.name} (${product.weight}) agregado al carrito`)}
              className="w-full mt-3 px-6 py-3 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors duration-200"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
