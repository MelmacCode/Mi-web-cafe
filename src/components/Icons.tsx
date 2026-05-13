interface IconProps {
  className?: string;
  size?: number;
}

export function IconOrganico({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M24 44V28" />
      <path d="M24 28c-6 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
      <path d="M18 14c2-4 6-6 6-6s4 2 6 6" />
      <circle cx="24" cy="8" r="2" fill="#6F4E37" stroke="none" />
      <path d="M16 36c2-2 5-3 8-3s6 1 8 3" />
    </svg>
  );
}

export function IconArtesanal({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 38h20" />
      <path d="M20 38V30c0-2 1-3 3-3h2c2 0 3 1 3 3v8" />
      <path d="M18 22c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M24 6v4" />
      <path d="M18 8l1 3" />
      <path d="M30 8l-1 3" />
    </svg>
  );
}

export function IconComunidad({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="24" cy="14" r="5" />
      <circle cx="12" cy="30" r="4" />
      <circle cx="36" cy="30" r="4" />
      <path d="M24 19v4" />
      <path d="M12 34v4" />
      <path d="M36 34v4" />
      <path d="M19 24l-3 4" />
      <path d="M29 24l3 4" />
    </svg>
  );
}

export function IconShipping({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="14" width="24" height="16" rx="2" />
      <path d="M26 20h6l4 6v4h-6" />
      <circle cx="12" cy="34" r="3" />
      <circle cx="30" cy="34" r="3" />
    </svg>
  );
}

export function IconPayment({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="8" width="32" height="24" rx="3" />
      <path d="M4 16h32" />
      <path d="M12 26h8" />
    </svg>
  );
}

export function IconQuality({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="#6F4E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 4l4 2 4-1 1 4 3 3-2 4 2 4-3 3-1 4-4-1-4 2-4-2-4 1-1-4-3-3 2-4-2-4 3-3 1-4 4 1 4-2z" />
      <path d="M15 20l3 3 7-7" />
    </svg>
  );
}

export function InstagramIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChevronDown({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronLeft({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRight({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
