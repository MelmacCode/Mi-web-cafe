interface AccentLabelProps {
  text: string;
  variant?: 'light' | 'dark' | 'highlight';
  className?: string;
}

export default function AccentLabel({ text, variant = 'dark', className = '' }: AccentLabelProps) {
  const variants = {
    light: 'bg-white/15 border-white/30 text-cream',
    dark: 'bg-coffee-100 text-coffee-500 border-coffee-300',
    highlight: 'bg-cafe-500 text-white',
  };

  return (
    <span
      className={`inline-block px-5 py-1.5 rounded-pill border text-xs font-sans font-bold uppercase tracking-[0.1em] ${variants[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
