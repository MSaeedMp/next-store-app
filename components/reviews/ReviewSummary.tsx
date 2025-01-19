"use server";

import { fetchOveralRating, fetchStarRating } from "@/actions/action-review";
import { Progress } from "@/components/ui/progress";
import { FaStar } from "react-icons/fa";

const ReviewSummary = async ({ productId }: { productId: string }) => {
  const [starRating, overalRating] = await Promise.all([
    fetchStarRating(productId),
    fetchOveralRating(productId),
  ]);
  return (
    <div className="bg-white px-10 py-8 rounded-sm shadow-sm w-full border border-stone-200">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Customer reviews</h4>
        <div className="flex items-center gap-2">
          <FaStar className="w-5 h-5 text-yellow-400" />
          <span className="text-base font-semibold">{overalRating.rating} out of 5</span>
        </div>
        <p className="text-muted-foreground text-sm pt-4">
          {overalRating.count} global ratings
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        {starRating.map((rating) => {
          const { star, percentage } = rating;
          return (
            <ReviewRow
              key={star}
              text={`${star} Star`}
              percentage={Number(percentage)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ReviewSummary;

function ReviewRow({ text, percentage }: { text: string; percentage: number }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="capitalize whitespace-nowrap font">{text}</span>
      <Progress
        className="h-6 rounded-lg bg-white border border-stone-300"
        value={percentage}
      />
      <span className="capitalize whitespace-nowrap font">{percentage}%</span>
    </div>
  );
}
