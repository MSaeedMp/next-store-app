import { CiShoppingCart } from "react-icons/ci";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const FavoritesPage = () => {
  return (
    <>
      <div className="pt-[300px]">
        <CiShoppingCart className="w-6 h-6 text-black" />
      </div>
      <HiAdjustmentsHorizontal className="w-6 h-6" />
    </>
  );
};

export default FavoritesPage;
