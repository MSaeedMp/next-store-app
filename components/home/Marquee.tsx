import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="whitespace-nowrap animate-marquee">
        <span className="mx-4">{children}</span>
      </div>
    </div>
  );
}
