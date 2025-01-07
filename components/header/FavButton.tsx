import Link from "next/link";
import { Button } from "../ui/button";
import { CiHeart } from "react-icons/ci";

const FavButton = () => {
  return (
    <Button
      variant="link"
      size="icon"
      className="hidden sm:flex relative p-6 hover:bg-black/20 hover:backdrop-blur-md"
      asChild
    >
      <Link href="/cart">
        <CiHeart className="sm:!w-6 sm:!h-6 !w-4 !h-4 text-stone-100" />
      </Link>
    </Button>
  );
};
export default FavButton;
