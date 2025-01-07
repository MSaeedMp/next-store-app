import SingleProductContainer from "@/components/single-product/SingleProductContainer";

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  return (
    <section className="pt-28 sm:pt-32">
      <SingleProductContainer productId={productId} />
    </section>
  );
};

export default SingleProductPage;
