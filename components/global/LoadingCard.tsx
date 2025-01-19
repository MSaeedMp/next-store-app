import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <Card className="transform group-hover:shadow-md transition-shadow duration-500 rounded-sm border-none shadow-md">
      <CardContent className="p-0">
        <Skeleton className="h-48 sm:h-64 w-full" />

        <div className="p-4">
          <Skeleton className="h-4 w-1/2 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-4" />
          <Skeleton className="h-4 w-1/5 mt-4" />
          <Skeleton className="h-4 w-1/4 mt-4" />
        </div>
      </CardContent>
    </Card>
  );
};
export default LoadingCard;
