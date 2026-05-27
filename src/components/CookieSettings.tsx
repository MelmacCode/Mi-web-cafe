import { useCookieConsent } from '@/context/CookieConsentContext';
import { X, Shield, BarChart3, Megaphone } from 'lucide-react';

interface CookieSettingsProps {
  onClose: () => void;
}

export default function CookieSettings({ onClose }: CookieSettingsProps) {
  const { consent, setCategory, acceptAll, rejectAll } = useCookieConsent();

  const categories = [
    {
      key: 'necessary' as const,
      title: 'Necesarias',
      description: 'Funcionamiento básico: carrito, preferencias, consentimiento.',
      icon: Shield,
      required: true,
    },
    {
      key: 'analytics' as const,
      title: 'Analytics',
      description: 'Google Analytics y Clarity. Entender cómo usas la tienda.',
      icon: BarChart3,
      required: false,
    },
    {
      key: 'marketing' as const,
      title: 'Marketing',
      description: 'Meta Pixel y remarketing. Mostrarte anuncios relevantes (próximamente).',
      icon: Megaphone,
      required: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-[80] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-coffee-200">
          <h2 className="font-serif text-2xl text-coffee-900">Preferencias de cookies</h2>
          <button onClick={onClose} className="p-2 hover:bg-coffee-100 rounded-full transition">
            <X size={20} className="text-coffee-700" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {categories.map((cat) => (
            <div key={cat.key} className="flex items-start gap-4 p-4 bg-white rounded-xl">
              <cat.icon size={20} className="text-coffee-700 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-sans font-bold text-coffee-900">{cat.title}</h3>
                  {cat.required ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Siempre activa</span>
                  ) : (
                    <button
                      onClick={() => setCategory(cat.key, !consent[cat.key])}
                      className={`w-12 h-6 rounded-full transition-colors relative ${consent[cat.key] ? 'bg-green-600' : 'bg-coffee-300'}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${consent[cat.key] ? 'left-7' : 'left-1'}`} />
                    </button>
                  )}
                </div>
                <p className="text-sm text-coffee-500">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 p-6 border-t border-coffee-200">
          <button onClick={rejectAll} className="flex-1 px-4 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] border border-coffee-300 text-coffee-700 hover:bg-coffee-100 transition-colors">
            Rechazar todo
          </button>
          <button onClick={onClose} className="flex-1 px-4 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] bg-coffee-900 text-white hover:bg-cafe-500 transition-colors">
            Guardar
          </button>
          <button onClick={acceptAll} className="flex-1 px-4 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] bg-cafe-500 text-white hover:bg-cafe-300 hover:text-coffee-900 transition-colors">
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}