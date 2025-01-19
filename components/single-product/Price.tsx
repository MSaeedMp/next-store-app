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
      <CiBag1 className="w-6 h-6" />
      <span className="font-semibold sm:text-lg">{amount}</span>
    </div>
  );
};
export default Price;
