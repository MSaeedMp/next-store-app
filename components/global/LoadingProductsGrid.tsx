import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingProduct = () => {
  return (
    <Card className="transform group-hover:shadow-md transition-shadow duration-500 rounded-sm border-[1px] shadow-none">
      <CardContent className="p-4">
        <Skeleton className="h-96 w-full" />
        <Skeleton className="h-4 w-1/4 mt-4" />
        <Skeleton className="h-4 w-1/5 mt-4" />
        <Skeleton className="h-[1px] w-full mt-4 mb-10" />
        <Skeleton className="h-4 w-1/4 mt-2" />
        <Skeleton className="h-4 w-1/4 mt-2" />
        <Skeleton className="h-4 w-1/2 mt-2" />
        <Skeleton className="h-8 w-full py-6 mt-4 mb-2" />
      </CardContent>
    </Card>
  );
};

const LoadingProductsGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export default LoadingProductsGrid;
