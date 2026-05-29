## 📂 Arquitectura Inicial
Se basa en una estructura organizada para escalabilidad:
├── public/                # Imágenes estáticas
├── src/
│   ├── pages/             # Home, Tienda, Blog, Nosotros, Comunidad
│   ├── sections/          # Secciones reutilizables (Hero, ProductShowcase, etc.)
│   ├── components/        # UI (shadcn/ui), Navigation, Footer
│   ├── hooks/             # Lógica GSAP y utilidades de viewport
│   ├── data/              # Datos estáticos (Productos, Blog)
│   └── lib/               # Ayudantes (utils.ts)
