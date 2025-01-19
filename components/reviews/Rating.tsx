import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const isFilledArr = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className="flex items-center gap-1">
      {isFilledArr.map((isFilled, i) => {
        const className = `w-4 h-4 ${
          isFilled ? "text-yellow-500" : "text-stone-500"
        }`;
        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
};
export default Rating;
