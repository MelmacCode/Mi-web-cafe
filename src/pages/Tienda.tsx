import { Helmet } from 'react-helmet-async';
import BackButton from '@/components/BackButton';           // ← IMPORTAR
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
      </Helmet>
      
      <PageHero />
      
      {/* ← BackButton debajo del hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-4">
        <BackButton label="Seguir comprando" />
      </div>
      
      <FilterBar />
      <ProductGrid />
      <FeaturedBundle />
      <ShippingInfo />
    </>
  )
}