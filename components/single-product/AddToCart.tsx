import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { BsHandbag } from "react-icons/bs";

const AddToCart = ({
  size = "default",
  className,
}: {
  size?: "sm" | "lg" | "default" | "icon";
  className?: string;
}) => {
  return (
    <Button
      variant="default"
      size={size}
      className={cn(
        " bg-brand-500 hover:bg-brand-600 transition-colors duration-300 space-x-2 rounded-sm",
        className
      )}
    >
      <span>Add to cart</span>
      <BsHandbag />
    </Button>
  );
};
export default AddToCart;
