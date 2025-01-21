"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { HiShoppingCart } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { fetchCartItems } from "@/actions/action-cart";
import { useSession } from "next-auth/react";

const CartButton = () => {
  const session = useSession();
  const user = session.data?.user;
  const { data: numItemsInCart, isLoading } = useQuery({
    queryKey: ["numItemsInCart", user],
    queryFn: () => fetchCartItems(),
  });

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-black/20 hover:backdrop-blur-md "
      asChild
    >
      <Link href="/cart" className="p-6">
        <HiShoppingCart className="!w-6 !h-6 text-stone-100" />
        {user && !isLoading && (
          <span className="absolute z-10 -top-0 -right-2 bg-stone-100 rounded-full w-4 h-4 p-2.5 text-stone-950 text-center flex items-center justify-center text-xs font-[900]">
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
};
export default CartButton;
