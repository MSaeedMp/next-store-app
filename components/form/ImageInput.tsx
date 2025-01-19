"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ErrorLabel from "./ErrorLabel";

const ImageInput = () => {
  const name = "image";
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input id={name} type="file" accept="image/*" {...register(name)} />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
};

export default ImageInput;
