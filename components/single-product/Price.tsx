import { cn } from "@/lib/utils";
import { CiBag1 } from "react-icons/ci";

const Price = ({
  amount = "0",
  className,
}: {
  amount: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("text-muted-foreground flex items-center gap-2", className)}
    >
      <CiBag1 className="sm:w-6 sm:h-6 w-4 h-4" />
      <span className="font-semibold text-base sm:text-lg">{amount}</span>
    </div>
  );
};
export default Price;
