import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Coffee, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Don Moncho Café</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Coffee size={48} className="text-coffee-700" />
          </div>

          <h1 className="font-serif text-6xl text-coffee-900 mb-2">404</h1>
          <h2 className="font-serif text-2xl text-coffee-700 mb-4">
            Página no encontrada
          </h2>
          <p className="text-coffee-500 mb-8">
            Parece que esta página se nos enfrió como un café olvidado.
            Volvamos a la tienda.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-coffee-900 text-white font-sans font-bold uppercase tracking-[0.1em] text-xs hover:bg-cafe-500 transition-colors"
          >
            <Home size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
}