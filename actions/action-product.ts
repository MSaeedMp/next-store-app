"use server";
import db from "@/utils/db";
import {
  productSchema,
  updateProductSchema,
  validateWithZodSchema,
} from "@/lib/schemas";
import { deleteImage, uploadImage } from "@/lib/supabase";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { ActionResponseType } from "@/utils/types";
import {
  getAuthAdmin,
  getAuthUser,
  sendErrorToast,
  sendSuccessToast,
} from "./action-utils";

export const fetchAllProducts = async (
  search: string = ""
): Promise<Product[]> => {
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return products || [];
};

export const fetchSingleProduct = async (
  productId: string
): Promise<Product | null> => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product || null;
};

export const fetchRandomProducts = async (
  numProducts: number
): Promise<Product[]> => {
  const products = await db.$queryRaw<Product[]>`
      SELECT * FROM "Product"
      ORDER BY RANDOM()
      LIMIT ${numProducts}
    `;

  return products || [];
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products || [];
};

export const fetchNewProducts = async (): Promise<Product[]> => {
  const products = await db.product.findMany({
    where: {
      new: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products || [];
};

export const fetchRecommendedProducts = async (): Promise<Product[]> => {
  const products = await db.product.findMany({
    where: {
      recommended: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products || [];
};

export const fetchBestSellerProdcuts = async (): Promise<Product[]> => {
  const products = await db.product.findMany({
    where: {
      bestSeller: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products || [];
};

export const createProductAction = async (
  formData: Product
): Promise<ActionResponseType> => {
  try {
    const admin = await getAuthUser();
    if (!admin) throw new Error("You are not allowed to proceed.");

    const validatedData = validateWithZodSchema(productSchema, formData);
    const fullPath = await uploadImage(validatedData.image as File);

    await db.product.create({
      data: {
        ...validatedData,
        image: fullPath,
        userId: admin.userId as string,
      },
    });
    return sendSuccessToast("Product created successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const deleteProductAction = async (prevState: {
  productId: string;
}): Promise<ActionResponseType> => {
  const { productId } = prevState;
  try {
    const admin = await getAuthUser();
    if (!admin) throw new Error("You are not allowed to proceed.");

    const product = await db.product.delete({
      where: {
        id: productId,
        userId: admin.userId,
      },
    });
    await deleteImage(product.image);
    revalidatePath("/admin/products");
    return sendSuccessToast("Product deleted successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const updateProductAction = async (
  formData: Product & { url: string; image: File }
): Promise<ActionResponseType> => {
  try {
    const admin = await getAuthUser();
    if (!admin) throw new Error("You are not allowed to proceed.");

    const productId = formData["id"];
    const oldImageUrl = formData["url"];
    const newImage = formData["image"];

    const validatedData = validateWithZodSchema(updateProductSchema, formData);
    if (newImage) await deleteImage(oldImageUrl);

    const fullPath = newImage
      ? await uploadImage(validatedData.image as File)
      : oldImageUrl;

    const restData = Object.fromEntries(
      Object.entries(validatedData).filter(([key]) => key !== "url")
    );
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...restData,
        image: fullPath,
        updatedAt: new Date(),
      },
    });
    return sendSuccessToast("Updated product successfully");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const fetchAdminProdcuts = async (): Promise<Product[]> => {
  const admin = getAuthAdmin();
  if (!admin) return [];
  const products = await fetchAllProducts();
  return products || [];
};

export const fetchAdminSingleProduct = async (
  productId: string
): Promise<Product | null> => {
  const admin = getAuthAdmin();
  if (!admin) return null;
  const product = await fetchSingleProduct(productId);
  return product || null;
};
