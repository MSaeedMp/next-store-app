import { cn } from "@/lib/utils";
import { FieldErrors } from "react-hook-form";

type ErrorLabelProps = {
  errors: FieldErrors;
  name: string;
  className?: string;
};

const ErrorLabel = ({ errors, name, className }: ErrorLabelProps) => {
  return (
    <>
      {errors[name] && (
        <p className={cn("text-red-500 mt-2 font-semibold text-sm", className)}>
          {errors[name]?.message as string}
        </p>
      )}
    </>
  );
};
export default ErrorLabel;
