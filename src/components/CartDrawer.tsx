import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';

interface CartDrawerProps {
  triggerClassName?: string;
}

export default function CartDrawer({ triggerClassName }: CartDrawerProps) {
  const [open, setOpen] = useState(false);
  const { items, total, itemCount, updateQuantity, removeItem } = useCart();

  const generateWhatsAppMessage = () => {
    const lines = items.map(
      (item) =>
        `• ${item.name} (${item.weight}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    );

    const message = [
      '¡Hola Don Moncho! 👋',
      'Quiero hacer un pedido:',
      '',
      ...lines,
      '',
      `*Total: $${total.toFixed(2)}*`,
      '',
      '¿Cómo puedo completar mi compra?',
    ].join('\n');

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/584126094680?text=${generateWhatsAppMessage()}`;
 
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={`relative p-2 hover:bg-black/5 rounded-full transition-colors ${triggerClassName || 'text-coffee-900'}`}
        >
          <ShoppingCart size={22} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-coffee-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-cream border-l border-coffee-200 flex flex-col">
        <SheetHeader className="border-b border-coffee-200 pb-4">
          <SheetTitle className="font-serif text-2xl text-coffee-900">
            Tu Pedido
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart
                size={48}
                className="mx-auto text-coffee-300 mb-4"
              />
              <p className="text-coffee-500 text-lg">Tu carrito está vacío</p>
              <p className="text-coffee-400 text-sm mt-1">
                Explora nuestra tienda y descubre el sabor de los Andes
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center bg-white p-3 rounded-xl shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-coffee-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-sm text-coffee-500">
                    ${item.price.toFixed(2)} c/u
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-coffee-100 rounded-full p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 hover:bg-white rounded-full transition"
                  >
                    <Minus size={14} className="text-coffee-900" />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-coffee-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-white rounded-full transition"
                  >
                    <Plus size={14} className="text-coffee-900" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-coffee-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-coffee-200 pt-4 pb-2 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-coffee-500">Subtotal</span>
              <span className="font-serif text-xl text-coffee-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-coffee-400">
              Envío no incluido. Te confirmaremos el costo de envío por WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Pedir por WhatsApp
            </a>

            <p className="text-xs text-center text-coffee-400">
              Te redirigiremos a WhatsApp con tu pedido listo para enviar
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}