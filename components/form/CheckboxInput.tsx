"use client";

import { useFormContext } from "react-hook-form";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

function CheckboxInput({ name, label, defaultChecked }: CheckboxInputProps) {
  const { register } = useFormContext();
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        defaultChecked={defaultChecked}
        {...register(name)}
        className="h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-stone-800 data-[state=checked]:text-primary-foreground cursor-pointer"
      />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
      >
        {label}
      </label>
    </div>
  );
}
export default CheckboxInput;
