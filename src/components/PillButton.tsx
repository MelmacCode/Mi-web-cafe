import { Link } from 'react-router';

interface PillButtonProps {
  text?: string;
  to?: string;
  href?: string;
  variant?: 'filled' | 'outline';
  color?: 'brown' | 'white';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export default function PillButton({
  text,
  to,
  href,
  variant = 'filled',
  color = 'brown',
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  children,
}: PillButtonProps) {
  const baseClasses = `inline-block px-8 py-3.5 rounded-pill text-xs font-sans font-bold uppercase tracking-[0.1em] transition-colors duration-250 text-center ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const filledClasses =
    color === 'brown'
      ? 'bg-cafe-500 text-white hover:bg-coffee-900'
      : 'bg-white text-coffee-900 hover:bg-cream';

  const outlineClasses =
    color === 'brown'
      ? 'bg-transparent border border-coffee-300 text-coffee-700 hover:bg-coffee-100'
      : 'bg-transparent border border-white/40 text-white hover:bg-white/10';

  const classes = `${baseClasses} ${variant === 'filled' ? filledClasses : outlineClasses}`;

  const content = children || text;

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
