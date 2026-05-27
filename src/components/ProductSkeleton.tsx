export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card animate-shimmer">
      <div className="aspect-[4/3] bg-coffee-300/30" />
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="h-5 bg-coffee-300/30 rounded w-2/3" />
          <div className="h-4 bg-coffee-300/20 rounded w-14 shrink-0" />
        </div>
        <div className="h-3 bg-coffee-300/20 rounded w-full" />
        <div className="h-3 bg-coffee-300/20 rounded w-5/6" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 bg-coffee-300/30 rounded w-16" />
          <div className="h-10 bg-coffee-300/30 rounded-lg w-28" />
        </div>
      </div>
    </div>
  );
}

export function ProductSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </>
  );
}