import { Helmet } from 'react-helmet-async';

export default function Comunidad() {
  return (
    <>
      <Helmet>
        <title>Comunidad | Don Moncho Café - Únete</title>
        <meta name="description" content="Únete a la comunidad de amantes del café Don Moncho. Eventos, talleres y más." />
        <meta property="og:title" content="Comunidad | Don Moncho Café" />
        <meta property="og:description" content="La comunidad del café orgánico" />
        <meta property="og:image" content="https://donmoncho.com/images/og-comunidad.jpg" />
        <link rel="canonical" href="https://donmoncho.com/comunidad" />
      </Helmet>
      
      {/* BackButton YA NO VA AQUÍ — ahora está global en PageLayout */}
      
      <div className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Comunidad
        </h1>
        
        {/* Resto del contenido de Comunidad... */}
      </div>
    </>
  )
}