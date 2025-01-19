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

const RatingSelect = ({ name, label }: { name: string; label?: string }) => {
  const ratingNumbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(name, ratingNumbers[0]);
  }, [name, setValue, ratingNumbers]);

  return (
    <div className="mb-2 max-w-[100px]">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select
        defaultValue={ratingNumbers[0]}
        onValueChange={(value) => setValue(name, value)} // Update form value
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ratingNumbers.map((number) => {
            return (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default RatingSelect;
