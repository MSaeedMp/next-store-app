import { cn } from "@/lib/utils";
import { IoPricetagsOutline } from "react-icons/io5";

const PriceTag = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "text-muted-foreground text-sm flex items-center gap-2",
        className
      )}
    >
      <IoPricetagsOutline className="w-5 h-5" />
      <span>Online price</span>
    </div>
  );
};
export default PriceTag;
