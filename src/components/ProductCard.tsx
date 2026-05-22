import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { duration: 0.8 });
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={ref} className="bg-white rounded-xl p-6 shadow-card">
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
        onClick={handleAdd}
        disabled={added}
        className={`w-full mt-3 px-6 py-3 rounded-pill text-xs font-sans font-bold uppercase tracking-[0.1em] transition-colors duration-300 flex items-center justify-center gap-2 ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-coffee-900 text-white hover:bg-cafe-500'
        }`}
      >
        {added ? (
          <>
            <Check size={16} />
            ¡Agregado!
          </>
        ) : (
          <>
            <ShoppingCart size={16} />
            Agregar al carrito
          </>
        )}
      </button>
    </div>
  );
}