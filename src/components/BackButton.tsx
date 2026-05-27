import { useNavigate } from 'react-router';   // Hook para navegación programática
import { ArrowLeft } from 'lucide-react';      // Icono de flecha

// Props opcionales para personalizar
interface BackButtonProps {
  label?: string;      // Texto del botón (default: "Volver")
  className?: string;  // Clases CSS adicionales
}

export default function BackButton({ 
  label = 'Volver',           // ← Valor por defecto si no se pasa label
  className = ''              // ← Valor por defecto si no se pasa className
}: BackButtonProps) {
  
  const navigate = useNavigate();   // ← Hook que nos da la función para navegar

  return (
    <button
      onClick={() => navigate(-1)}  // ← -1 = retroceder una página en el historial
      className={`flex items-center gap-2 text-coffee-600 hover:text-coffee-900 transition-colors ${className}`}
    >
      <ArrowLeft size={18} />
      <span className="text-sm font-sans">{label}</span>
    </button>
  );
}