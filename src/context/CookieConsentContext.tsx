import { createContext, useContext, useState, useEffect } from 'react';

type CookieCategory = 'necessary' | 'analytics' | 'marketing';

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
}

interface CookieConsentContextType {
  consent: ConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  setCategory: (category: CookieCategory, value: boolean) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

// ← CORREGIDO: Agregar tipo genérico
const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

const STORAGE_KEY = 'donmoncho-cookies';

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
};

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Error leyendo consentimiento:', e);
      }
    }
    return defaultConsent;
  });

  const [showBanner, setShowBanner] = useState(!consent.decided);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  }, [consent]);

  const acceptAll = () => {
    setConsent({ necessary: true, analytics: true, marketing: true, decided: true });
    setShowBanner(false);
  };

  const rejectAll = () => {
    setConsent({ necessary: true, analytics: false, marketing: false, decided: true });
    setShowBanner(false);
  };

  const setCategory = (category: CookieCategory, value: boolean) => {
    setConsent((prev) => ({ ...prev, [category]: value, decided: true }));
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, acceptAll, rejectAll, setCategory, showBanner, setShowBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
};