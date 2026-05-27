import { Helmet } from 'react-helmet-async';

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <title>Nosotros | Don Moncho Café - Nuestra Historia</title>
        <meta name="description" content="Conoce la historia de Don Moncho Café, café 100% orgánico cultivado en Tabay, Mérida, Venezuela desde 1985." />
        <meta property="og:title" content="Nosotros | Don Moncho Café" />
        <meta property="og:description" content="La historia detrás del café orgánico de los Andes" />
        <meta property="og:image" content="https://donmoncho.com/images/og-nosotros.jpg" />
        <link rel="canonical" href="https://donmoncho.com/nosotros" />
      </Helmet>
      
      {/* BackButton YA NO VA AQUÍ — ahora está global en PageLayout */}
      
      <div className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Nuestra Historia
        </h1>
        
        {/* Resto del contenido de Nosotros... */}
      </div>
    </>
  )
}