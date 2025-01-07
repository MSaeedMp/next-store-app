import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingProductsList = ({ className }: { className: string }) => {
  const LoadingProduct = () => {
    return (
      <Card>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-x-10">
          <div>
            <Skeleton className="h-48 md:w-48 w-full" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Skeleton className="h-4 w-1/4 mt-4" />
              <Skeleton className="h-4 w-1/5 mt-4" />
              <Skeleton className="h-[1px] w-full mt-4 mb-6" />
            </div>
            <div>
              <Skeleton className="h-4 w-20 mt-2" />
              <Skeleton className="h-4 w-40 mt-2" />
            </div>
          </div>
          <div className="w-36 flex flex-col justify-between mt-2 md:mt-0">
            <Skeleton className="h-4 w-full " />
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={cn("space-y-4", className)}>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};
export default LoadingProductsList;
