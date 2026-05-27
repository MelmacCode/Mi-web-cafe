import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { CartProvider } from './context/CartContext'
import { CookieConsentProvider } from './context/CookieConsentContext'    // ← NUEVO
import { Toaster } from '@/components/ui/sonner'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <CookieConsentProvider>    {/* ← NUEVO */}
        <CartProvider>
          <HashRouter>
            <App />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#3d2b1f',
                  color: '#fff',
                  border: '1px solid #c4a77d',
                },
              }}
            />
          </HashRouter>
        </CartProvider>
      </CookieConsentProvider>    {/* ← NUEVO */}
    </HelmetProvider>
  </StrictMode>,
)