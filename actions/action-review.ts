"use server";

import { reviewSchema, validateWithZodSchema } from "@/lib/schemas";
import { Review } from "@prisma/client";
import db from "@/utils/db";
import { getAuthUser, sendErrorToast, sendSuccessToast } from "./action-utils";
import { ActionResponseType } from "@/utils/types";
import { revalidatePath } from "next/cache";

export const createReviewAction = async (
  formData: Review
): Promise<ActionResponseType> => {
  try {
    const user = await getAuthUser();
    if (!user) throw new Error("You are not allowed to submit a review.");

    const validatedData = validateWithZodSchema(reviewSchema, formData);

    await db.review.create({
      data: {
        ...validatedData,
        authorName: user.name || "User",
        authorImageUrl: user.image || null,
        userId: user.userId as string,
      },
    });
    revalidatePath(`/products/${validatedData.productId}`);
    return sendSuccessToast("Review submitted Successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const fetchProductReviews = async (productId: string) => {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return reviews || [];
};

export const fetchOveralRating = async (productId: string) => {
  const result = await db.review.groupBy({
    where: {
      productId: productId,
    },
    by: ["productId"],
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
  });

  return {
    rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
    count: result[0]?._count.rating ?? 0,
  };
};

export const fetchStarRating = async (productId: string) => {
  const result = await db.review.groupBy({
    where: {
      productId: productId,
    },
    by: ["productId", "rating"],
    _count: {
      rating: true,
    },
  });

  const totalReviews = result.reduce(
    (sum, item) => sum + item._count.rating,
    0
  );

  const ratings = [1, 2, 3, 4, 5]
    .map((star) => {
      const starData = result.find((item) => item.rating === star);
      const count = starData?._count.rating ?? 0;
      const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
      return {
        star,
        count,
        percentage: percentage.toFixed(1),
      };
    })
    .reverse();

  return ratings;
};

export const findExistingReview = async (productId: string) => {
  const user = await getAuthUser();
  if (!user) return null;

  const review = await db.review.findFirst({
    where: {
      userId: user.userId,
      productId,
    },
  });

  if (!review) return null;

  return review;
};
