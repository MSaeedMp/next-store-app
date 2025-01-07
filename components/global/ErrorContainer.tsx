import { cn } from "@/lib/utils";

const ErrorContainer = ({
  heading = "Something went wrong!",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
};
export default ErrorContainer;
