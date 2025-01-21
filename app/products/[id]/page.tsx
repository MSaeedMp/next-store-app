import LoadingProduct from "@/components/global/LoadingProduct";
import SingleProduct from "@/components/single-product/SingleProduct";
import { Suspense } from "react";
import Section from "@/components/global/Section";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const productId = (await params).id;
  return (
    <Section>
      <Suspense fallback={<LoadingProduct />}>
        <SingleProduct productId={productId} />
      </Suspense>
    </Section>
  );
};
export default SingleProductPage;
