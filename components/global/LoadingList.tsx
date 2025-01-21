import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingList = ({ className }: { className?: string }) => {
  const LoadingProduct = () => {
    return (
      <Card className="rounded-sm">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-x-10">
          <div>
            <Skeleton className="h-48 md:w-48 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-1/2 mt-4" />
            <Skeleton className="h-4 w-1/5 mt-4" />
            <Skeleton className="h-4 w-1/4 mt-4" />
            <Skeleton className="h-4 w-1/3 mt-4" />
            <Skeleton className="h-4 w-1/4 mt-4" />
            <Skeleton className="h-4 w-1/5 mt-4" />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={cn("space-y-4", className)}>
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};
export default LoadingList;
