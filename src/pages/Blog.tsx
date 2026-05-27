import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Don Moncho Café - Cultura Cafetera</title>
        <meta name="description" content="Artículos sobre café: preparación, origen, cultura y recetas. Todo sobre el mundo del café orgánico." />
        <meta property="og:title" content="Blog | Don Moncho Café" />
        <meta property="og:description" content="Descubre el arte del café orgánico" />
        <meta property="og:image" content="https://donmoncho.com/images/og-blog.jpg" />
        <link rel="canonical" href="https://donmoncho.com/blog" />
      </Helmet>
      
      {/* BackButton YA NO VA AQUÍ — ahora está global en PageLayout */}
      
      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl text-coffee-900 mt-6 mb-8">
          Blog
        </h1>
        
        {/* Resto del contenido del Blog... */}
      </div>
    </>
  )
}