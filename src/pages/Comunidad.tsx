import { Helmet } from 'react-helmet-async';
import BackButton from '@/components/BackButton';           // ← IMPORTAR

export default function Comunidad() {
  return (
    <>
      <Helmet>
        <title>Comunidad | Don Moncho Café</title>
        <meta name="description" content="Únete a la comunidad de amantes del café Don Moncho." />
      </Helmet>
      
      <div className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
        <BackButton />
        
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Comunidad
        </h1>
        
        {/* Resto del contenido de Comunidad... */}
      </div>
    </>
  )
}