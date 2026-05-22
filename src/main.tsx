import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext'  // ← IMPORTAMOS
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>  {/* ← ENVOLVEMOS: ahora toda la app tiene acceso al carrito */}
      <App />
    </CartProvider>
  </StrictMode>,
)