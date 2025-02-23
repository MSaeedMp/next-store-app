"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  autocomplete?: string;
  disablePaste?: boolean;
};

const FormInput = ({
  name,
  type = "text",
  label,
  defaultValue,
  value,
  placeholder,
  disabled,
  autocomplete,
  disablePaste = false,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-2">
      {label && (
        <Label htmlFor={name} className="capitalize">
          {label}
        </Label>
      )}
      <Input
        id={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...register(name)}
        disabled={disabled}
        required
        onPaste={disablePaste ? (e) => e.preventDefault() : undefined}
      />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
};

export default FormInput;
