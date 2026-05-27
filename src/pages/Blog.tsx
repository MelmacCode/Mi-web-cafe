import { Helmet } from 'react-helmet-async';
import BackButton from '@/components/BackButton';           // ← IMPORTAR

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Don Moncho Café</title>
        <meta name="description" content="Artículos sobre café, preparación, origen y cultura cafetera." />
      </Helmet>
      
      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        <BackButton />
        
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Blog
        </h1>
        
        {/* Resto del contenido del Blog... */}
      </div>
    </>
  )
}