import { cn } from "@/lib/utils";
import { CiDeliveryTruck } from "react-icons/ci";

const DeliveryTag = ({
  value = 2,
  unit = "days",
  className,
}: {
  value: number;
  unit: "hours" | "days" | "weeks";
  className?: string;
}) => {
  const getUnitLabel = (value: number, unit: string) => {
    if (value === 1) {
      if (unit === "days") return "day";
      if (unit === "hours") return "hour";
      if (unit === "weeks") return "week";
    }
    return unit;
  };

  const unitLabel = getUnitLabel(value, unit);

  return (
    <div
      className={cn("text-sm flex items-center gap-2 text-blue-600", className)}
    >
      <CiDeliveryTruck className="w-6 h-6" />
      <span>
        Usually dispatches in {value} {unitLabel}
      </span>
    </div>
  );
};

export default DeliveryTag;
