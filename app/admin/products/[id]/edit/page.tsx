import { fetchAdminSingleProduct } from "@/actions/action-product";
import EditSingleProduct from "@/components/single-product/EditSingleProduct";

const ProductEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const productId = (await params).id;
  const product = await fetchAdminSingleProduct(productId);
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-8">Update product</h1>
      {product ? (
        <div className="border p-8 rounded">
          <EditSingleProduct product={JSON.parse(JSON.stringify(product))} />
        </div>
      ) : (
        <p className="text-lg">Product was not found.</p>
      )}
    </section>
  );
};
export default ProductEditPage;
