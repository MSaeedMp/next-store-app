import { cn } from "@/lib/utils";
import LoadingCard from "./LoadingCard";

const LoadingGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default LoadingGrid;
