import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative sm:-mx-6 -mx-4 lg:-mx-8", className)}>

      <h2
        className={cn(
          "text-2xl sm:text-3xl font-[800] capitalize sm:py-4 sm:px-10 px-5 py-1 inline-block"
        )}
      >
        {children}
      </h2>

    </div>
  );
};
export default SectionTitle;
