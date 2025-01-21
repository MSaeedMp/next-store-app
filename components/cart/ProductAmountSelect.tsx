"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

const ProductAmountSelect = ({
  name,
  label,
}: {
  name: string;
  label?: string;
}) => {
  const { setValue, getValues } = useFormContext();

  useEffect(() => {
    if (!getValues(name)) setValue(name, 1);
  }, [getValues, name, setValue]);

  return (
    <div className="max-w-[100px]">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select
        defaultValue={"1"}
        onValueChange={(value) => setValue(name, Number(value))}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder={"1"} />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 5 }, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
              <SelectItem key={selectValue} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProductAmountSelect;
