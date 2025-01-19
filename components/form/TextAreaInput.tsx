"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        {...register(name)}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
};
export default TextAreaInput;
