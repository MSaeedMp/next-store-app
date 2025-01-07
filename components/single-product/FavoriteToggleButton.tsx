import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  console.log(productId);
  return (
    <Button size={"icon"} variant={"ghost"} className="cursor-pointer bg-stone-100">
      <FaHeart className="w-4 h-4 text-stone-900"/>
    </Button>
  );
};
export default FavoriteToggleButton;
