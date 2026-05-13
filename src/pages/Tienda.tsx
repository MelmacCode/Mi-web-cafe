import PageHero from '../sections/tienda/PageHero'
import FilterBar from '../sections/tienda/FilterBar'
import ProductGrid from '../sections/tienda/ProductGrid'
import FeaturedBundle from '../sections/tienda/FeaturedBundle'
import ShippingInfo from '../sections/tienda/ShippingInfo'

export default function Tienda() {
  return (
    <>
      <PageHero />
      <FilterBar />
      <ProductGrid />
      <FeaturedBundle />
      <ShippingInfo />
    </>
  )
}
