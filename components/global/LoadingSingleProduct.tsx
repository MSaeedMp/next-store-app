import { Skeleton } from "../ui/skeleton";

const LoadingSingleProduct = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 p-6 mt-12">
      <div>
        <Skeleton className="h-[500px] w-full rounded" />
      </div>
      <div className="flex flex-col gap-4 mt-4 lg:mt-0">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-8 w-8" />
        </div>
        <div className="flex items-start gap-2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-1/5" />
        </div>
        <Skeleton className="h-[1px] w-full my-2" />
        <Skeleton className="h-3 w-1/5" />
        <Skeleton className="h-3 w-1/5" />
        <div className="mt-auto"></div>
        <Skeleton className="h-10 w-1/4" />
        <Skeleton className="h-3 w-1/5" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-10 w-full lg:w-1/5 mt-10" />
      </div>
    </div>
  );
};
export default LoadingSingleProduct;
