"use client";

import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => {
        // const { comment, authorName, rating, authorImageUrl, title } = review;
        // const reviewInfo = {
        //   comment,
        //   name: authorName,
        //   rating,
        //   image: authorImageUrl || "",
        //   title,
        // };
        return <ReviewCard key={review.id} review={review} />;
      })}
    </div>
  );
};
export default ReviewList;
