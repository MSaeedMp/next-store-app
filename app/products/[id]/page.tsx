import SingleProductContainer from "@/components/single-product/SingleProductContainer";

const SingleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;
  return (
    <section className="pt-36 sm:pt-28">
      <SingleProductContainer productId={productId} />
    </section>
  );
};
export default SingleProductPage;
