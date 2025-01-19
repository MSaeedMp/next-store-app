import BreadCrumpContainer from "./BreadCrumpContainer";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import FavoriteToggleButton from "./FavoriteToggleButton";
import Price from "./Price";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import AddToCart from "./AddToCart";
import { Product } from "@prisma/client";
import { fetchOveralRating } from "@/actions/action-review";

const SingleProductContainer = async ({ product }: { product: Product }) => {
  const productId = product.id;
  const { rating, count } = await fetchOveralRating(productId);
  const { name, image, company, description, price } = product;

  return (
    <>
      <BreadCrumpContainer name={name} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-10">
        <div className="relative min-h-[500px] w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover rounded w-full"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 lg:pt-0 pt-5">
          <div className="flex items-center  justify-between gap-5">
            <h1 className="md:text-3xl text-2xl font-semibold capitalize">
              {name}
            </h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <div className="flex items-center gap-2">
            <FaStar />
            <span className="text-sm">
              {rating} ({count}) reviews
            </span>
          </div>
          <Separator />
          <h3 className="capitalize text-foreground text-lg md:text-xl mb-4">
            {company}
          </h3>
          <Price
            className="bg-brand-100 border border-stone-400 rounded py-2 px-4 self-start text-stone-950"
            amount={formatCurrency(price.toNumber())}
          />
          <div className="space-y-2 ">
            <h4 className="font-semibold">About this item: </h4>
            <p className="leading-8">{description}</p>
          </div>
          <AddToCart productId={productId} />
        </div>
      </div>
    </>
  );
};
export default SingleProductContainer;
