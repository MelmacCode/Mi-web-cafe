import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { IconShipping, IconPayment, IconQuality } from '../../components/Icons'

const services = [
  {
    icon: IconShipping,
    title: 'Envío a Todo el País',
    description: 'Entregamos en toda Venezuela',
  },
  {
    icon: IconPayment,
    title: 'Pago Seguro',
    description: 'Múltiples métodos de pago',
  },
  {
    icon: IconQuality,
    title: 'Calidad Garantizada',
    description: '100% satisfacción o devolución',
  },
];

export default function ShippingInfo() {
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15, childSelector: '.service-card' });

  return (
    <section className="bg-sand-50 py-16 px-6 md:px-12">
      <div ref={ref} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="service-card flex items-center gap-4">
            <service.icon size={40} />
            <div>
              <h4 className="text-sm font-sans font-bold uppercase tracking-[0.05em] text-coffee-700">
                {service.title}
              </h4>
              <p className="text-[13px] text-coffee-500 font-sans mt-0.5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
