import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shimmer?: boolean;
}

function Skeleton({ className, shimmer = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-muted",
        shimmer && "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-mint/40 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

function JobCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-border/50">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-9 w-24 rounded-full" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <Skeleton className="w-14 h-14 rounded-2xl mb-6" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <Skeleton className="h-8 w-32 rounded-full" />
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm">
      <Skeleton className="w-12 h-12 rounded-2xl mb-6" />
      <div className="space-y-2 mb-8">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-4/6" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}

export { Skeleton, JobCardSkeleton, ServiceCardSkeleton, TestimonialSkeleton };
