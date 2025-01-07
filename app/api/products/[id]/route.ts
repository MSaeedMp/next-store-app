import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const productId = params.id;

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required." },
      { status: 400 }
    );
  }

  try {
    // Fetch the product from the database
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}`, error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
