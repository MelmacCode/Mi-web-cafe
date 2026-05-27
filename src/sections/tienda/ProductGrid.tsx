import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductSkeletonGrid } from '@/components/ProductSkeleton';
import { products } from '@/data/products';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Listen for filter changes from FilterBar
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.category) {
        setIsLoading(true);
        setActiveCategory(detail.category);
      }
    };
    window.addEventListener('filter-change', handler);
    return () => window.removeEventListener('filter-change', handler);
  }, []);

  // Simulate network loading when category changes
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {isLoading ? (
          <ProductSkeletonGrid count={6} />
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-coffee-500 text-lg font-medium">
            No hay productos en esta categoría.
          </p>
          <p className="text-coffee-400 text-sm mt-1">
            Prueba con otra selección de filtros.
          </p>
        </div>
      )}
    </section>
  );
}