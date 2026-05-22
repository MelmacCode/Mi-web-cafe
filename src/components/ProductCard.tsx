import { useCart } from '@/context/CartContext';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  // "Conectamos" este componente al carrito. Ahora puede usar addItem.
  
  const [added, setAdded] = useState(false);
  // Estado local: ¿acaba de agregar este producto? Para mostrar feedback visual.

  const handleAdd = () => {
    addItem(product);
    // Llamamos a la función del contexto, pasándole el producto completo
    
    setAdded(true);
    // Mostramos "¡Agregado!" por 2 segundos
    
    setTimeout(() => setAdded(false), 2000);
    // Después de 2 segundos, volvemos al estado normal
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
      {/* Imagen del producto */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info del producto */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-serif text-xl text-coffee-900">{product.name}</h3>
            <p className="text-sm text-coffee-500">{product.weight}</p>
          </div>
          <span className="font-serif text-lg text-coffee-900">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-coffee-500 mb-4 line-clamp-2">{product.description}</p>

        {/* ─── BOTÓN AGREGAR AL CARRITO ─── */}
        <button
          onClick={handleAdd}
          disabled={added}
          className={`
            w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium transition-all duration-300
            ${added 
              ? 'bg-green-600 text-white'      // Estado "Agregado": verde
              : 'bg-coffee-900 text-white hover:bg-coffee-700'  // Estado normal: café
            }
          `}
        >
          {added ? (
            <>
              <Check size={18} />
              ¡Agregado!
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}