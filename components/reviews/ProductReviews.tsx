import { Review } from "@prisma/client";
import { Separator } from "../ui/separator";
import ReviewsContainer from "./ReviewsContainer";
import ReviewSummary from "./ReviewSummary";

type ProductReviewsProps = {
  productId: string;
  reviews: Review[];
  isReviewed: boolean;
};

const ProductReviews = async ({
  productId,
  reviews,
  isReviewed,
}: ProductReviewsProps) => {
  return (
    <div>
      <Separator className="my-10" />
      <ReviewsContainer
        ReviewSummary={<ReviewSummary productId={productId} />}
        reviews={reviews}
        productId={productId}
        isReviewed={isReviewed}
      />
    </div>
  );
};
export default ProductReviews;
