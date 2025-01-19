import LoadingProduct from "@/components/global/LoadingProduct";
import SingleProduct from "@/components/single-product/SingleProduct";
import { Suspense } from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const productId = (await params).id;
  return (
    <section className="pt-36 sm:pt-28 min-h-[calc(100vh-34rem)]">
      <Suspense fallback={<LoadingProduct />}>
        <SingleProduct productId={productId} />
      </Suspense>
    </section>
  );
};
export default SingleProductPage;
