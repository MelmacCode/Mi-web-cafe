import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-coffee-100">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-coffee-300/30 z-10" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover transition-all duration-700 ease-out
          ${loaded ? 'blur-0 scale-100 opacity-100' : 'blur-md scale-105 opacity-0'}
          ${className}
        `}
      />
    </div>
  );
}