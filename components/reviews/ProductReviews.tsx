import { Review } from "@prisma/client";
import {
  fetchProductReviews,
  findExistingReview,
} from "@/actions/action-review";
import { Separator } from "../ui/separator";
import ReviewsContainer from "./ReviewsContainer";
import ReviewSummary from "./ReviewSummary";

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews: Review[] = await fetchProductReviews(productId);
  const isReviewed = !!(await findExistingReview(productId));

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
