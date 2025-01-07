import { Product } from "@prisma/client";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "../single-product/FavoriteToggleButton";
import { Separator } from "../ui/separator";
import AddToCart from "../single-product/AddToCart";
import DeliveryEstimation from "../single-product/DeliveryTag";
import PriceTag from "../single-product/PriceTag";
import Price from "../single-product/Price";

const ProductCard = ({ product }: { product: Product }) => {
  const { id: productId, image, name, price, company } = product;
  const eurosAmount = formatCurrency(price);

  return (
    <article key={productId} className="group relative ">
      <Link href={`/products/${productId}`}>
        <Card className="transform group-hover:shadow-md transition-shadow duration-500 rounded-sm border-[1px] shadow-none">
          <CardContent className="p-4">
            <div className="relative h-96 rounded overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                priority
                className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-lg capitalize">{name}</h3>
              <p className="text-base text-muted-foreground">{company}</p>
              <Separator className="mt-4" />
              <div className="flex flex-col gap-2">
                <PriceTag className="mt-6" />
                <Price amount={eurosAmount} />
                <DeliveryEstimation className="mb-4" unit="days" value={2} />
              </div>
              <AddToCart className="w-full my-2 py-6" />
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-7 right-7 z-5">
        <FavoriteToggleButton productId={productId} />
      </div>
    </article>
  );
};
export default ProductCard;
