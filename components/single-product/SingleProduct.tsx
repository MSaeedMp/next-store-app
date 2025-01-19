import { fetchSingleProduct } from "@/actions/action-product";
import LoadingList from "@/components/global/LoadingList";
import LoadingSingleProduct from "@/components/global/LoadingProduct";
import SectionTitle from "@/components/global/SectionTitle";
import ProductReviews from "@/components/reviews/ProductReviews";
import SingleProductContainer from "@/components/single-product/SingleProductContainer";
import { Suspense } from "react";
import ErrorContainer from "../global/ErrorContainer";
import { Product } from "@prisma/client";

const SingleProduct = async ({ productId }: { productId: string }) => {
  const product: Product | null = await fetchSingleProduct(productId);
  if (!product) return <ErrorContainer heading="Product could not be found." />;
  return (
    <>
      <Suspense fallback={<LoadingSingleProduct />}>
        <SingleProductContainer product={product} />
      </Suspense>
      <SectionTitle className="mt-16">Product reviews</SectionTitle>
      <Suspense fallback={<LoadingList className="mt-16" />}>
        <ProductReviews productId={productId} />
      </Suspense>
    </>
  );
};
export default SingleProduct;
