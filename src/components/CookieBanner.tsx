import { useCookieConsent } from '@/context/CookieConsentContext';
import { Cookie, Settings } from 'lucide-react';
import { useState } from 'react';
import CookieSettings from './CookieSettings';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[70] bg-coffee-900 text-white p-4 md:p-6 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie size={24} className="text-cafe-300 flex-shrink-0 mt-1" />
            <div>
              <p className="font-sans text-sm md:text-base">
                Usamos cookies para mejorar tu experiencia. Las necesarias funcionan siempre.
                Las de analytics nos ayudan a entender cómo usas la tienda.
              </p>
              <a href="/#/cookies" className="text-cafe-300 hover:text-white text-xs underline mt-1 inline-block">
                Más información
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 flex-shrink-0">
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] border border-cafe-300 text-cafe-300 hover:bg-cafe-300 hover:text-coffee-900 transition-colors flex items-center gap-2"
            >
              <Settings size={14} />
              Personalizar
            </button>
            <button
              onClick={rejectAll}
              className="px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] border border-white/30 text-white/80 hover:bg-white/10 transition-colors"
            >
              Rechazar todo
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] bg-cafe-500 text-white hover:bg-cafe-300 hover:text-coffee-900 transition-colors"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>

      {showSettings && <CookieSettings onClose={() => setShowSettings(false)} />}
    </>
  );
}