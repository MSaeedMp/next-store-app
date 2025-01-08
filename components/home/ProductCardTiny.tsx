import { Product } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const ProductCardTiny = ({ product }: { product: Product }) => {
  const { id: productId, image, name } = product;

  return (
    <article className="group">
      <Link href={`/products/${productId}`}>
        <Card className="rounded-none border-none shadow-none ">
          <CardContent className="flex flex-col lg:w-auto w-full p-0">
            <div className="relative w-full lg:h-44 aspect-square overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-110 duration-300 "
              />
            </div>
            <div className="pt-2 overflow-hidden">
              <h3 className="capitalize sm:text-sm text-xs text-muted-foreground sm:font-semibold">
                {name}
              </h3>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};
export default ProductCardTiny;
