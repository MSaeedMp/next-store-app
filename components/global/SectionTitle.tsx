import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>

      <h2
        className={cn(
          "text-2xl sm:text-3xl font-[800] capitalize "
        )}
      >
        {children}
      </h2>

    </div>
  );
};
export default SectionTitle;
