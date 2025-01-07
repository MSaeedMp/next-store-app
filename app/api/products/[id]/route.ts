import prisma from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (
  requeset: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  if (!requeset?.url)
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });

  const productId = (await params).id;

  if (!productId)
    return NextResponse.json(
      { error: "Product ID is required." },
      { status: 400 }
    );

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product)
      return NextResponse.json(
        { error: "Product not found!" },
        { status: 404 }
      );
    return NextResponse.json(product);
  } catch (error) {
    console.error(`Failed to fecth product wih ID ${productId}`, error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
