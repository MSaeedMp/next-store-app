import {
  fetchSingleProduct,
} from "@/actions/action-product";
import SectionTitle from "@/components/global/SectionTitle";
import ProductReviews from "@/components/reviews/ProductReviews";
import SingleProductContainer from "@/components/single-product/SingleProductContainer";
import ErrorContainer from "../global/ErrorContainer";
import {
  fetchOveralRating,
  fetchProductReviews,
  findExistingReview,
} from "@/actions/action-review";

const SingleProduct = async ({ productId }: { productId: string }) => {
  const [product, reviews, userReview, overalRating] = await Promise.all([
    fetchSingleProduct(productId),
    fetchProductReviews(productId),
    findExistingReview(productId),
    fetchOveralRating(productId),
  ]);

  if (!product) return <ErrorContainer heading="Product could not be found." />;
  return (
    <>
      <SingleProductContainer product={product} overalRating={overalRating} />
      <SectionTitle className="mt-16">Product reviews</SectionTitle>
      <ProductReviews
        reviews={reviews}
        isReviewed={!!userReview}
        productId={productId}
      />
    </>
  );
};
export default SingleProduct;
