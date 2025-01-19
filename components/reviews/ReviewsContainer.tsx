"use client";

import { Review } from "@prisma/client";
import ReviewList from "./ReviewList";
import { useReviewsContext } from "@/hooks/useReviewsContext";
import ReviewForm from "./ReviewForm";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
// import { useAuthContext } from "@/hooks/useAuthContext";

const ReviewsContainer = ({
  ReviewSummary,
  reviews,
  productId,
  isReviewed,
}: {
  ReviewSummary: React.ReactNode;
  reviews: Review[];
  productId: string;
  isReviewed: boolean;
}) => {
  const { isReviewFormVisible, toggleReviewForm, setIsReviewFormVisible } =
    useReviewsContext();
  // const { user } = useAuthContext();
  const session = useSession();
  const user = session.data?.user;
  const isReviewEmpty = reviews.length === 0;

  useEffect(() => {
    if (isReviewEmpty && user) {
      setIsReviewFormVisible(true);
    } else {
      setIsReviewFormVisible(false);
    }
  }, [isReviewEmpty, setIsReviewFormVisible, user]);

  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-6 my-8">
      <div className="flex flex-col items-center gap-4">
        {ReviewSummary}
        {!isReviewed && user && (
          <Button
            className="mb-10 w-full"
            size="lg"
            variant="outline"
            type="button"
            onClick={toggleReviewForm}
          >
            {isReviewFormVisible ? "Close form" : "Leave a comment"}
          </Button>
        )}
      </div>
      {isReviewFormVisible ? (
        <ReviewForm productId={productId} />
      ) : isReviewEmpty ? (
        <p className="text-lg bg-white p-10 border border-stone-200 rounded-sm shadow-sm">
          There is still no review about this article.
        </p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </div>
  );
};
export default ReviewsContainer;
