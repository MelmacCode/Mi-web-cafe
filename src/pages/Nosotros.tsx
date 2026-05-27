import { Helmet } from 'react-helmet-async';
import BackButton from '@/components/BackButton';           // ← IMPORTAR

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <title>Nosotros | Don Moncho Café</title>
        <meta name="description" content="Conoce la historia de Don Moncho Café, café 100% orgánico cultivado en Tabay, Mérida." />
      </Helmet>
      
      {/* ← BackButton arriba del contenido */}
      <div className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
        <BackButton />
        
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Nuestra Historia
        </h1>
        
        {/* Resto del contenido de Nosotros... */}
      </div>
    </>
  )
}