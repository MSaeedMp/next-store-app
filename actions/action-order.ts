"use server";
import db from "@/utils/db";
import { getAuthUser, sendErrorToast } from "./action-utils";
import { fetchOrCreateCart } from "./action-cart";
import { redirect } from "next/navigation";

export const createOrderAction = async () => {
  const user = await getAuthUser();
  // let orderId: null | string = null;
  // let cartId: null | string = null;

  try {
    const cart = await fetchOrCreateCart({
      userId: user?.userId as string,
      errorOnFailure: true,
    });
    // cartId = cart.id;

    await db.order.deleteMany({
      where: {
        userId: user?.userId,
        isPaid: false,
      },
    });

    await db.order.create({
      data: {
        userId: user?.userId as string,
        products: cart.numItemsInCart,
        orderTotal: cart.orderTotal,
        tax: cart.tax,
        shipping: cart.shipping,
        email: user?.email as string,
      },
    });
    // orderId = order.id;
  } catch {
    return sendErrorToast("Failed to create order.");
  }
  // redirect(`/checkout?orderId=${orderId}&cartId=${cartId}`);
  redirect("/orders");
};

export const fetchUserOrders = async () => {
  const user = await getAuthUser();
  const orders = await db.order.findMany({
    where: {
      userId: user?.userId,
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

export const fetchAdminOrders = async () => {
  await getAuthUser();

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};
