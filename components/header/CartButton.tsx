import Link from "next/link";
import { Button } from "../ui/button";
import { CiShoppingCart } from "react-icons/ci";

const CartButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative p-6 hover:bg-black/20 hover:backdrop-blur-md "
      asChild
    >
      <Link href="/cart">
        <CiShoppingCart className="sm:!w-6 sm:!h-6 !w-5 !h-5 text-stone-100 font-bold " />
        <span className="absolute z-10 top-1 -right-0 bg-stone-200 rounded-full w-3 h-3 text-stone-950  text-center flex items-center justify-center text-[10px]">
          1
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
