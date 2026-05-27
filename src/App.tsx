import { Routes, Route } from 'react-router'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Tienda from './pages/Tienda'
import Blog from './pages/Blog'
import Comunidad from './pages/Comunidad'
import Gracias from './pages/Gracias'  // ← AGREGAR

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/gracias" element={<Gracias />} />  // ← AGREGAR
      </Routes>
    </PageLayout>
  )
}
