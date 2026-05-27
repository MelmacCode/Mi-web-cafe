import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';                 // ← AGREGAR
import BackButton from '@/components/BackButton';             // ← IMPORTAR
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';

export default function Gracias() {
  return (
    <>
      <Helmet>                                                {/* ← AGREGAR */}
        <title>¡Gracias! | Don Moncho Café</title>
        <meta name="description" content="Tu pedido ha sido enviado. Te contactaremos pronto." />
      </Helmet>
      
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          
          {/* ← BackButton arriba */}
          <div className="mb-6">
            <BackButton label="Volver a la tienda" />
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            
            <h1 className="font-serif text-3xl text-coffee-900 mb-4">
              ¡Pedido enviado!
            </h1>
            
            <p className="text-coffee-500 mb-2">
              Hemos recibido tu pedido por WhatsApp.
            </p>
            <p className="text-coffee-400 text-sm mb-8">
              Te contactaremos pronto para confirmar los detalles de pago y envío.
            </p>

            <div className="space-y-3">
              <Link
                to="/tienda"
                className="flex items-center justify-center gap-2 w-full bg-coffee-900 text-white py-3 rounded-full font-medium hover:bg-cafe-500 transition-colors"
              >
                <ArrowLeft size={18} />
                Volver a la tienda
              </Link>
              
              <a
                href="https://wa.me/584123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={18} />
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}