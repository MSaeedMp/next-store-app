import { Skeleton } from "../ui/skeleton";

const LoadingCompositionGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 lg:gap-4 gap-2 gap-y-4 bg-white shadow-lg lg:p-4 p-2">
      {Array.from({ length: 4 }, (_, i) => {
        return (
          <Skeleton
            key={i}
            className="w-full aspect-square flex items-center justify-center "
          ></Skeleton>
        );
      })}
    </div>
  );
};
export default LoadingCompositionGrid;
