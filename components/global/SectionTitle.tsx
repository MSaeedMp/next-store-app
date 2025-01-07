import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative mb-8 sm:-mx-6 -mx-4 lg:-mx-8", className)}>
      <h2
        className={cn(
          "text-2xl sm:text-3xl font-light tracking-wider  bg-stone-900 text-stone-100 capitalize sm:py-4 sm:px-10 px-5 py-3 inline-block"
        )}
      >
        {children}
      </h2>
      {/* <h2
        className={cn(
          "text-2xl sm:text-3xl font-[900] tracking-wide  capitalize sm:py-4 sm:px-10 px-5 py-3 inline-block"
        )}
      >
        {children}
      </h2> */}
      {/* <div className="h-[1px] w-full bg-stone-950 absolute -translate-y-1/2 top-1/2 left-0 -z-10"></div> */}
      <div className="h-[1px] w-full bg-stone-950 absolute bottom-0 left-0 -z-10"></div>
    </div>
  );
};
export default SectionTitle;
