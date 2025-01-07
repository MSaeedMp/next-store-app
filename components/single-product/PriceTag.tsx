import { cn } from "@/lib/utils";
import { IoPricetagsOutline } from "react-icons/io5";

const PriceTag = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "text-muted-foreground text-xs sm:text-sm flex items-center gap-2",
        className
      )}
    >
      <IoPricetagsOutline className="sm:w-5 sm:h-5 w-4 h-4" />
      <span>Online price</span>
    </div>
  );
};
export default PriceTag;
