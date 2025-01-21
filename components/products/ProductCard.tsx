import { Product } from "@prisma/client";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "../single-product/FavoriteToggleButton";
import PriceTag from "../single-product/PriceTag";
import Price from "../single-product/Price";

const ProductCard = ({ product }: { product: Product }) => {
  const { id: productId, image, name, price, company } = product;
  const eurosAmount = formatCurrency(Number(price));

  return (
    <article key={productId} className="group relative">
      <Link href={`/products/${productId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 rounded-sm p-0 border-none shadow-md">
          <CardContent className="p-0">
            <div className="relative h-48 sm:h-64 rounded-tr-sm rounded-tl-sm overflow-hidden mb-2">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                priority
                className="w-full object-cover transform group-hover:scale-110 transition-transform rounded-tr-sm rounded-tl-sm duration-500"
              />
            </div>
            <div className="sm:px-4 p-2">
              <h3 className="text-base sm:text-lg capitalize">{name}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {company}
              </p>
              <div className="flex flex-col gap-2 mb-4">
                <PriceTag className="mt-6" />
                <Price amount={eurosAmount} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-3 right-3 z-5">
        <FavoriteToggleButton productId={productId} />
      </div>
    </article>
  );
};
export default ProductCard;
