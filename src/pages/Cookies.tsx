import { Helmet } from 'react-helmet-async';
import { Shield, BarChart3, Megaphone } from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Don Moncho Café</title>
        <meta name="description" content="Información sobre cómo usamos cookies en Don Moncho Café." />
      </Helmet>

      <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-coffee max-w-none">
          <p className="text-coffee-500 text-lg mb-8">
            En Don Moncho Café usamos cookies para mejorar tu experiencia de compra.
            A continuación te explicamos qué cookies utilizamos y para qué.
          </p>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-coffee-700" />
              <h2 className="font-serif text-2xl text-coffee-900">Cookies Necesarias</h2>
            </div>
            <p className="text-coffee-500 mb-4">Esenciales para el funcionamiento del sitio. No pueden desactivarse.</p>
            <ul className="bg-white rounded-xl p-6 space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <code className="bg-coffee-100 px-2 py-1 rounded text-sm">donmoncho-cart</code>
                  <p className="text-sm text-coffee-500 mt-1">Guarda los productos de tu carrito</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Siempre activa</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <code className="bg-coffee-100 px-2 py-1 rounded text-sm">donmoncho-cookies</code>
                  <p className="text-sm text-coffee-500 mt-1">Recuerda tus preferencias de cookies</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Siempre activa</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={24} className="text-coffee-700" />
              <h2 className="font-serif text-2xl text-coffee-900">Cookies de Analytics</h2>
            </div>
            <p className="text-coffee-500 mb-4">Nos ayudan a entender cómo usas la tienda.</p>
            <ul className="bg-white rounded-xl p-6 space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <code className="bg-coffee-100 px-2 py-1 rounded text-sm">_ga, _gid</code>
                  <p className="text-sm text-coffee-500 mt-1">Google Analytics: páginas vistas, tiempo en sitio</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Opcional</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone size={24} className="text-coffee-700" />
              <h2 className="font-serif text-2xl text-coffee-900">Cookies de Marketing</h2>
            </div>
            <p className="text-coffee-500 mb-4">Usadas para mostrarte anuncios relevantes (próximamente).</p>
            <ul className="bg-white rounded-xl p-6 space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <code className="bg-coffee-100 px-2 py-1 rounded text-sm">_fbp</code>
                  <p className="text-sm text-coffee-500 mt-1">Meta Pixel: remarketing en Facebook/Instagram</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Próximamente</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-4">¿Cómo gestionar tus cookies?</h2>
            <p className="text-coffee-500 mb-4">
              Puedes cambiar tus preferencias en cualquier momento haciendo clic en el botón
              de cookies en la parte inferior de la página.
            </p>
            <button
              onClick={() => {
                localStorage.removeItem('donmoncho-cookies');
                window.location.reload();
              }}
              className="px-6 py-3 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors"
            >
              Restablecer preferencias
            </button>
          </section>
        </div>
      </div>
    </>
  );
}