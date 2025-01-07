import Link from "next/link";
import Image from "next/image";
import AddToCart from "../single-product/AddToCart";
import DeliveryEstimation from "../single-product/DeliveryTag";
import PriceTag from "../single-product/PriceTag";
import Price from "../single-product/Price";
import { Card, CardContent } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import { Product } from "@prisma/client";

const ProductCartListItem = ({ product }: { product: Product }) => {
  const { id: productId, name, price, image, company } = product;
  const eurosAmount = formatCurrency(price);

  return (
    <article key={productId} className="realtive group">
      <Link href={`/products/${productId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
          <CardContent className="grid md:grid-cols-[auto_1fr_auto] md:gap-8 p-4 md:p-5">
            <div className="relative group h-64 md:h-48 md:w-48 overflow-hidden rounded">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
                priority
                className="w-full object-cover object-center rounded transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl capitalize mt-4 md:mt-0">{name}</h2>
              <h4 className="text-muted-foreground">{company}</h4>
              <Separator className="mt-2" />
              <div className="mt-auto"></div>
              <div className="flex flex-col gap-2">
                <PriceTag className="mt-10 md:mt-0" />
                <DeliveryEstimation className="mb-2" unit="days" value={2} />
              </div>
            </div>
            <div className="flex flex-col justify-between md:gap-0 gap-4">
              <Price
                amount={eurosAmount}
                className="md:ml-auto self-start md:self-end"
              />
              <AddToCart className="md:my-0 my-3" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};
export default ProductCartListItem;
