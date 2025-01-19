import LoadingGrid from "@/components/global/LoadingGrid";
import LoadingList from "@/components/global/LoadingList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsContainer from "@/components/products/ProductsContainer";
import { Suspense } from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const params = await searchParams;
  const layout = params.layout || "grid";
  const search = params.search || "";

  return (
    <section className="pt-36 sm:pt-28">
      <SectionTitle className="mb-8">Products</SectionTitle>
      <Suspense
        fallback={layout === "grid" ? <LoadingGrid /> : <LoadingList />}
      >
        <ProductsContainer layout={layout} search={search} />
      </Suspense>
    </section>
  );
};

export default ProductsPage;
