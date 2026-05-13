export interface Product {
  id: number;
  name: string;
  slug: string;
  weight: string;
  description: string;
  price: number;
  category: 'moca' | 'torrefacto' | 'organico';
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Café Moca',
    slug: 'cafe-moca-250g',
    weight: '250g',
    description: 'Cuerpo medio con notas de chocolate y avellana. El sabor clásico de los Andes.',
    price: 12.00,
    category: 'moca',
    image: '/images/shop-moca-250.jpg',
  },
  {
    id: 2,
    name: 'Café Torrefacto',
    slug: 'cafe-torrefacto-250g',
    weight: '250g',
    description: 'Tostado tradicional con azúcar caramelizado. Intenso, aromático y lleno de carácter.',
    price: 14.00,
    category: 'torrefacto',
    image: '/images/shop-torrefacto-250.jpg',
  },
  {
    id: 3,
    name: 'Café Orgánico',
    slug: 'cafe-organico-250g',
    weight: '250g',
    description: 'Granos 100% orgánicos cultivados a 1.600m de altitud en Tabay, Mérida.',
    price: 12.00,
    category: 'organico',
    image: '/images/shop-organico-250.jpg',
  },
  {
    id: 4,
    name: 'Café Moca',
    slug: 'cafe-moca-500g',
    weight: '500g',
    description: 'Presentación familiar de nuestro Café Moca. Para los verdaderos amantes del café.',
    price: 20.00,
    category: 'moca',
    image: '/images/shop-moca-500.jpg',
  },
  {
    id: 5,
    name: 'Café Torrefacto',
    slug: 'cafe-torrefacto-500g',
    weight: '500g',
    description: 'Presentación familiar de nuestro Torrefacto. El doble de sabor para tu mesa.',
    price: 24.00,
    category: 'torrefacto',
    image: '/images/shop-torrefacto-500.jpg',
  },
  {
    id: 6,
    name: 'Café Orgánico',
    slug: 'cafe-organico-500g',
    weight: '500g',
    description: 'Presentación familiar de nuestro Orgánico. Puro, natural y sostenible.',
    price: 20.00,
    category: 'organico',
    image: '/images/shop-organico-500.jpg',
  },
];

export const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'moca', label: 'Café Moca' },
  { key: 'torrefacto', label: 'Torrefacto' },
  { key: 'organico', label: 'Orgánico' },
];
