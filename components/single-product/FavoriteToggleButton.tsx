import { Button } from "../ui/button";
import { CiHeart } from "react-icons/ci";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="cursor-pointer hover:bg-stone-900 bg-stone-900 bg-opacity-30 transition-color duration-500"
    >
      <CiHeart className="sm:!w-6 sm:!h-6 !w-5 !h-5 text-stone-50" />
      <p className="hidden"> {productId}</p>
    </Button>
  );
};
export default FavoriteToggleButton;
