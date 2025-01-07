import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-6xl xl:max-w-7xl relative", className)}>
      {children}
    </div>
  );
};
export default Wrapper;
