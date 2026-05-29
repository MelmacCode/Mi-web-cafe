☕ Proyecto Don Moncho - Sitio de Marketing + Catálogo

Este proyecto consiste en una plataforma web profesional para la marca Don Moncho, diseñada para evolucionar de un sitio informativo con catálogo a un e-commerce completo. 
Actualmente, el sitio funciona como un catálogo interactivo donde las ventas se canalizan a través de WhatsApp e Instagram.  

🚀 Estado Actual: Fase 1 Completada ✅ MVP (Producto Mínimo Viable): 
Carrito de compras funcional con generación de mensajes pre-formateados para WhatsApp.  
SEO Base: Implementación de meta tags dinámicos y datos estructurados para productos.  
UI/UX: Interfaz moderna utilizando Tailwind CSS y componentes de shadcn/ui.  

📂 Arquitectura del Proyecto

La estructura del código se ha diseñado para ser escalable y facilitar la migración a tecnologías más robustas en el futuro:  

├── public/                # Activos estáticos e imágenes de productos
├── src/
│   ├── App.tsx            # Configuración de rutas y componente raíz
│   ├── main.tsx           # Punto de entrada de la aplicación
│   ├── index.css          # Estilos globales y directivas de Tailwind
│   ├── pages/             # Vistas principales: Home, Tienda, Blog, Nosotros, Comunidad
│   ├── sections/          # Secciones reutilizables (Hero, ProductShowcase, Process)
│   ├── components/        # Componentes compartidos e UI (shadcn/ui, Nav, Footer)
│   ├── hooks/             # Lógica personalizada (GSAP para animaciones, use-mobile)
│   ├── data/              # Datos estáticos de productos, blogs y testimonios
│   └── lib/               # Utilidades de configuración (Tailwind merge)

Roadmap de Desarrollo

El proyecto está planeado para ejecutarse en 4 fases progresivas: 
 Fase 1 (Completada): Carrito funcional con redirección a WhatsApp y optimización SEO.  
 Fase 2 (En curso): Implementación de Base de Datos (PostgreSQL/Supabase) y panel de administración para gestionar contenido dinámicamente.  
 Fase 3: Sistema de Checkout completo con autenticación de usuarios y gestión de pedidos.  
 Fase 4: Integración de pasarelas de pago online (Stripe/MercadoPago).  
 
 Tecnologías Utilizadas
 Frontend: React + Vite.  
 Estilos: Tailwind CSS + shadcn/ui.  
 Animaciones: GSAP (ScrollTrigger).  
 SEO: React Helmet Async + JSON-LD.  
 Despliegue: Netlify.  