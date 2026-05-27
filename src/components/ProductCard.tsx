import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { LazyImage } from './LazyImage';
import { toast } from 'sonner';
import { ShoppingCart, Check } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useScrollAnimation('fade-up', { duration: 0.8 });
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async () => {
    if (isAdding) return;

    setIsAdding(true);

    // Pequeña latencia para feedback visual satisfactorio
    await new Promise((resolve) => setTimeout(resolve, 400));

    addItem(product);

    toast.success(`${product.name} añadido al carrito`, {
      description: `${product.weight} — $${product.price.toFixed(2)}`,
      duration: 2500,
    });

    setIsAdding(false);
  };

  return (
    <article
      ref={cardRef}
      className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out will-change-transform"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-coffee-100">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl text-coffee-900 group-hover:text-coffee-700 transition-colors duration-300">
            {product.name}
          </h3>
          <span className="text-sm font-medium text-coffee-500 bg-coffee-100 px-2.5 py-1 rounded-full shrink-0">
            {product.weight}
          </span>
        </div>

        <p className="text-coffee-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-serif text-2xl text-coffee-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAdd}
            disabled={isAdding}
            className={`
              inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
              ${isAdding
                ? 'bg-green-600 text-white scale-105'
                : 'bg-coffee-700 text-white hover:bg-coffee-900 hover:scale-105 active:scale-95'
              }
              disabled:cursor-not-allowed
            `}
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4" />
                Añadido
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}