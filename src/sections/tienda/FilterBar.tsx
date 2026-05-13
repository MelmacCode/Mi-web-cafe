import { useState } from 'react';
import { categories } from '../../data/products';

interface FilterBarProps {
  onFilterChange?: (category: string) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [active, setActive] = useState('todos');

  const handleClick = (key: string) => {
    setActive(key);
    onFilterChange?.(key);
  };

  return (
    <div className="sticky top-16 z-40 bg-sand-50 border-b border-coffee-300 py-4 px-6 md:px-12">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleClick(cat.key)}
            className={`px-5 py-2 rounded-pill text-xs font-sans font-bold uppercase tracking-[0.08em] border transition-colors duration-200 ${
              active === cat.key
                ? 'bg-coffee-900 text-white border-coffee-900'
                : 'bg-transparent text-coffee-500 border-coffee-300 hover:bg-coffee-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
