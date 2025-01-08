import Link from "next/link";
import { Button } from "../ui/button";
import { HiShoppingCart } from "react-icons/hi2";

const CartButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-black/20 hover:backdrop-blur-md "
      asChild
    >
      <Link href="/cart" className="p-6">
        <HiShoppingCart className="!w-6 !h-6 text-stone-100" />
        <span className="absolute z-10 top-1 right-0 bg-stone-200 rounded-full w-3 h-3 text-stone-950  text-center flex items-center justify-center text-[10px]">
          1
        </span>
      </Link>
    </Button>

  );
};
export default CartButton;
