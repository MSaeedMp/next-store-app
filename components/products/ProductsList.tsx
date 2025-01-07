import { Product } from "@prisma/client";
import ProductCartListItem from "./ProductCartListItem";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="space-y-6 mt-12">
      {products.map((product) => (
        <ProductCartListItem product={product} key={product.id} />
      ))}
    </div>
  );
};
export default ProductsList;
