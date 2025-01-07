import Link from "next/link";
import { Button } from "../ui/button";
import { BiSolidCart } from "react-icons/bi";

const CartButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative p-6 hover:bg-black/20 hover:backdrop-blur-md "
      asChild
    >
      <Link href="/cart">
        <BiSolidCart className="!w-6 !h-6 text-stone-100 font-bold " />
        <span className="absolute z-10 top-0 -right-1 bg-stone-100 rounded-full w-4 h-4 text-stone-950  text-center flex items-center justify-center text-xs">
          1
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
