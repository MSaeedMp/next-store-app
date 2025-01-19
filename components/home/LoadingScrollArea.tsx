import LoadingCard from "../global/LoadingCard";

const LoadingScrollArea = () => {
  return (
    <div className="flex w-max space-x-2 sm:space-x-4 bg-white py-6 sm:px-6">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="w-[220px] sm:w-[300px] lg:w-[320px]">
          <LoadingCard />
        </div>
      ))}
    </div>
  );
};

export default LoadingScrollArea;
