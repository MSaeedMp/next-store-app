import { Prisma } from "@prisma/client";

export type CartItemWithProducts = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ActionResponseType = {
  status: "success" | "error";
  message: string;
};

export type AuthUserType = {
  userId?: string;
  name?: string | null;
  email?: string | null;
  role?: string;
  image?: string | null;
};
