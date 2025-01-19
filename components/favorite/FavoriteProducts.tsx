import { fetchFavoriteProducts } from "@/actions/action-favorite";
import ErrorContainer from "../global/ErrorContainer";
import ProductsGrid from "../products/ProductsGrid";

const FavoriteProducts = async () => {
  const products = await fetchFavoriteProducts();
  const isEmpty = products.length === 0;

  return (
    <div>
      {isEmpty ? (
        <ErrorContainer
          heading="There is no product in your favorite list. Please start adding items to your list by clicking on the product's heart icon."
          className="mt-16"
        />
      ) : (
        <ProductsGrid products={products} />
      )}
    </div>
  );
};
export default FavoriteProducts;
