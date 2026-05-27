import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/tienda/PageHero'
import FilterBar from '../sections/tienda/FilterBar'
import ProductGrid from '../sections/tienda/ProductGrid'
import FeaturedBundle from '../sections/tienda/FeaturedBundle'
import ShippingInfo from '../sections/tienda/ShippingInfo'

export default function Tienda() {
  return (
    <>
      <Helmet>
        <title>Tienda | Don Moncho Café - Café 100% Orgánico de los Andes</title>
        <meta name="description" content="Descubre nuestros cafés orgánicos cultivados en Tabay, Mérida. Arábica, Orgánico y más. Envíos a toda Venezuela y el mundo." />
        <meta property="og:title" content="Tienda Don Moncho Café" />
        <meta property="og:description" content="Café 100% orgánico de los Andes venezolanos" />
        <meta property="og:image" content="https://donmoncho.com/images/og-tienda.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://donmoncho.com/tienda" />
      </Helmet>
      
      <PageHero />
      
      {/* BackButton YA NO VA AQUÍ — ahora está global en PageLayout */}
      
      <FilterBar />
      <ProductGrid />
      <FeaturedBundle />
      <ShippingInfo />
    </>
  )
}