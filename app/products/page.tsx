import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const params = await searchParams;
  const layout = params.layout || "grid";
  const search = params.search || "";

  return (
    <section className="pt-28">
      <ProductsContainer initialLayout={layout} search={search} />
    </section>
  );
};

export default ProductsPage;
