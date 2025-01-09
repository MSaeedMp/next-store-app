import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingProduct = () => {
  return (
    <Card className="transform group-hover:shadow-md transition-shadow duration-500 rounded-sm border-none shadow-md">
      <CardContent className="p-0">
        <Skeleton className="h-48 sm:h-64 w-full" />

        <div className="p-4">
          <Skeleton className="h-4 w-1/2 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-4" />
          <Skeleton className="h-4 w-1/5 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-4" />
          {/* <Skeleton className="h-4 w-1/2 mt-2" />
          <Skeleton className="h-8 w-full py-6 mt-4 mb-2" /> */}
        </div>
      </CardContent>
    </Card>
  );
};

const LoadingProductsGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export default LoadingProductsGrid;
