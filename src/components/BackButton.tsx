import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({ label = 'Volver', className = '' }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 text-coffee-600 hover:text-coffee-900 transition-colors ${className}`}
    >
      <ArrowLeft size={18} />
      <span className="text-sm font-sans">{label}</span>
    </button>
  );
}