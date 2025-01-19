import Link from "next/link";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa6";

const FavButton = () => {
  return (
    <Button
      variant="link"
      size="icon"
      className="hidden sm:flex relative p-6 hover:bg-black/20 hover:backdrop-blur-md"
      asChild
    >
      <Link href="/favorites">
        <FaHeart className="!w-6 !h-6  text-stone-100" />
      </Link>
    </Button>
  );
};
export default FavButton;
