"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { updateCartItemAction } from "@/actions/action-cart";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";

type ProductAmountChangeProps = {
  name: string;
  amount: number;
  cartItemId: string;
  label?: string;
};

const ProductAmountChange = ({
  name,
  amount,
  cartItemId,
  label,
}: ProductAmountChangeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleAmountChange = async (value: string) => {
    setIsLoading(true);
    toast({ description: "Calculating..." });
    const result = await updateCartItemAction({
      amount: Number(value),
      cartItemId,
    });
    queryClient.invalidateQueries(["numItemsInCart"] as InvalidateQueryFilters);
    toast({ description: result.message });
    setIsLoading(false);
  };

  return (
    <div className="mb-2">
      <span className="capitalize text-sm">{label || name}</span>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => handleAmountChange(value)}
        disabled={isLoading ? true : false}
      >
        <SelectTrigger className="w-[65px]">
          <SelectValue placeholder={amount.toString()} />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: amount + 5 }, (_, index) => {
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
export default ProductAmountChange;
