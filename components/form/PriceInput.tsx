"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
        {...register(name)}
        required
      />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
}
export default PriceInput;
