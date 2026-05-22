import { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '@/data/products';

// ═══════════════════════════════════════════════════════════════
// 1. TIPO DEL ITEM EN CARRITO
// ═══════════════════════════════════════════════════════════════
interface CartItem extends Product {
  quantity: number;
}

// ═══════════════════════════════════════════════════════════════
// 2. TIPO DEL CONTEXTO
// ═══════════════════════════════════════════════════════════════
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
  itemCount: number;
  clearCart: () => void;
}

// ═══════════════════════════════════════════════════════════════
// 3. CREAR EL CONTEXTO — UNA SOLA "<"
// ═══════════════════════════════════════════════════════════════
const CartContext = createContext<CartContextType | undefined>(undefined);

// ═══════════════════════════════════════════════════════════════
// 4. PROVEEDOR
// ═══════════════════════════════════════════════════════════════
export function CartProvider({ children }: { children: React.ReactNode }) {
  
  // UNA SOLA "<" en useState
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('donmoncho-cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Persistir en localStorage
  useEffect(() => {
    localStorage.setItem('donmoncho-cart', JSON.stringify(items));
  }, [items]);

  // Agregar producto
  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Eliminar producto
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Actualizar cantidad
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  // Vaciar carrito
  const clearCart = () => setItems([]);

  // Totales calculados
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, total, itemCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ═══════════════════════════════════════════════════════════════
// 5. HOOK PERSONALIZADO
// ═══════════════════════════════════════════════════════════════
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
};