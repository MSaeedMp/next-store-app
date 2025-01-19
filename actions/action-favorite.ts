"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { getAuthUser, sendErrorToast, sendSuccessToast } from "./action-utils";
import { ActionResponseType } from "@/utils/types";
import { Product } from "@prisma/client";

export const fetchFavoiriteId = async (
  productId: string
): Promise<string | null> => {
  const user = await getAuthUser();

  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      userId: user?.userId,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
};

export const fetchIsFavorite = async (productId: string): Promise<boolean> => {
  return !!(await fetchFavoiriteId(productId));
};

export const toggleFavoriteAction = async ({
  productId,
  pathname,
}: {
  productId: string;
  pathname: string;
}): Promise<ActionResponseType> => {
  try {
    const user = await getAuthUser();
    if (!user) throw new Error("You are not allowed to proceed.");

    const favoriteId = await fetchFavoiriteId(productId);

    const toggle = favoriteId
      ? db.favorite.delete({
          where: { id: favoriteId },
        })
      : db.favorite.create({
          data: { userId: user.userId as string, productId },
        });

    await toggle;

    const successMsg = favoriteId
      ? "Deleted from favorites."
      : "Added to favorites.";

    revalidatePath(pathname);
    return sendSuccessToast(successMsg);
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const fetchFavoriteProducts = async (): Promise<Product[]> => {
  const user = await getAuthUser();
  if (!user) return [];

  const products = await db.favorite.findMany({
    where: {
      userId: user.userId,
    },
    include: {
      product: true,
    },
  });

  return products.map((favorite) => favorite.product) || [];
};
