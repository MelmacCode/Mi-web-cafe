// src/context/CartContext.tsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
  itemCount: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('donmoncho-cart');
        if (saved) {
          const parsed = JSON.parse(saved);
          console.log('✅ Carrito cargado desde localStorage:', parsed);
          return Array.isArray(parsed) ? parsed : [];
        }
      } catch (e) {
        console.error('❌ Error leyendo localStorage:', e);
      }
    }
    console.log('🆕 Carrito vacío (inicial)');
    return [];
  });

  useEffect(() => {
    console.log('💾 Guardando carrito:', items);
    localStorage.setItem('donmoncho-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product) => {
    console.log('🛒 addItem llamado:', product);
    setItems((prev) => {
      console.log('📦 Estado anterior:', prev);
      const existing = prev.find((i) => i.id === product.id);
      let newItems;
      if (existing) {
        newItems = prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...prev, { ...product, quantity: 1 }];
      }
      console.log('✨ Nuevo estado:', newItems);
      return newItems;
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  console.log('🔄 Render - items:', items.length, 'total:', total);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    total,
    itemCount,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
};