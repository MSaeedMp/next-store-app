import { NextResponse } from "next/server";
import prisma from "@/utils/db";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  if (!request?.url)
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });

  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") as "featured" | "all";
    const search = searchParams.get("search") || "";

    let products;
    switch (category) {
      case "all":
        products = await prisma.product.findMany({
          where: {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { company: { contains: search, mode: "insensitive" } },
            ],
          },
          orderBy: { createdAt: "desc" },
        });
        break;
      // case "bestsellers":
      //   products = await prisma.product.findMany({ where: { bestseller: true } });
      //   break;
      // case "recommended":
      //   products = await prisma.product.findMany({
      //     where: { recommended: true },
      //   });
      //   break;
      case "featured":
        products = await prisma.product.findMany({ where: { featured: true } });
        break;
      default:
        return NextResponse.json(
          { error: "Invalid category" },
          { status: 400 }
        );
    }
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
