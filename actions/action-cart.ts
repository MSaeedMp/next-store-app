"use server";

import db from "@/utils/db";
import { getAuthUser, sendErrorToast, sendSuccessToast } from "./action-utils";
import { Cart, CartItem } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const fetchCartItems = async () => {
  const user = await getAuthUser();
  const cart = await db.cart.findFirst({
    where: {
      userId: user?.userId ?? "",
    },
    select: {
      numItemsInCart: true,
    },
  });

  return cart?.numItemsInCart || 0;
};

export const DoesProductExist = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  return !!product;
};

const includeProductClause = {
  cartItems: {
    include: {
      product: true,
    },
  },
};

export const fetchOrCreateCart = async ({
  userId,
  errorOnFailure = false,
}: {
  userId: string;
  errorOnFailure?: boolean;
}) => {
  let cart = await db.cart.findFirst({
    where: {
      userId,
    },
    include: includeProductClause,
  });
  if (!cart && errorOnFailure) {
    throw new Error("Cart not found.");
  }
  if (!cart) {
    cart = await db.cart.create({
      data: {
        userId,
      },
      include: includeProductClause,
    });
  }
  return cart;
};

export const updateOrCreateCartItem = async ({
  productId,
  cartId,
  amount,
}: {
  productId: string;
  cartId: string;
  amount: number;
}) => {
  let cartItem = await db.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });

  if (cartItem) {
    cartItem = await db.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        amount: cartItem.amount + amount,
      },
    });
  } else {
    cartItem = await db.cartItem.create({
      data: { amount, productId, cartId },
    });
  }
};

export const updateCart = async (cart: Cart) => {
  const cartItems = await db.cartItem.findMany({
    where: {
      cartId: cart.id,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  let numItemsInCart = 0;
  let cartTotal = 0;

  for (const item of cartItems) {
    numItemsInCart += item.amount;
    cartTotal += item.amount * item.product.price.toNumber();
  }

  const tax = cart.taxRate * cartTotal;
  const shipping = cartTotal ? cart.shipping : 0;
  const orderTotal = cartTotal + tax + shipping;

  const currentCart = await db.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal,
    },
    include: includeProductClause,
  });
  return { cartItems, currentCart };
};

export const addToCartAction = async (
  formData: CartItem & { productId: string }
) => {
  try {
    const user = await getAuthUser();
    if (!user || !user.userId) throw new Error("User not found.");
    const productId = formData["productId"];
    const amount = formData["amount"];
    const checkProduct = await DoesProductExist(productId);
    if (!checkProduct) throw new Error("Product does not exist.");
    const cart = await fetchOrCreateCart({ userId: user.userId });
    await updateOrCreateCartItem({ productId, cartId: cart.id, amount });
    await updateCart(cart);
    return sendSuccessToast("Added to your cart.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const removeCartItemAction = async (formData: CartItem) => {
  const user = await getAuthUser();
  try {
    const cartItemId = formData["id"];
    const cart = await fetchOrCreateCart({
      userId: user?.userId as string,
      errorOnFailure: true,
    });
    await db.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });

    await updateCart(cart);
    revalidatePath("/cart");
    return sendSuccessToast("Item removed from your cart.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const updateCartItemAction = async ({
  amount,
  cartItemId,
}: {
  amount: number;
  cartItemId: string;
}) => {
  const user = await getAuthUser();
  try {
    const cart = await fetchOrCreateCart({
      userId: user?.userId as string,
      errorOnFailure: true,
    });

    await db.cartItem.update({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
      data: {
        amount,
      },
    });

    await updateCart(cart);
    revalidatePath("/cart");
    return sendSuccessToast("Cart updated.");
  } catch (error) {
    return sendErrorToast(error);
  }
};
