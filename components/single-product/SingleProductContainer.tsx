"use client";
import { fetchSingleProduct } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorContainer from "../global/ErrorContainer";
import BreadCrumpContainer from "./BreadCrumpContainer";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import FavoriteToggleButton from "./FavoriteToggleButton";
import Price from "./Price";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import AddToCart from "./AddToCart";
import LoadingSingleProduct from "../global/LoadingSingleProduct";

const SingleProductContainer = ({ productId }: { productId: string }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => fetchSingleProduct(productId),
    queryKey: ["singleProduct", productId],
  });

  if (isLoading) return <LoadingSingleProduct />;
  if (!product || error) return <ErrorContainer />;

  const { name, image, company, description, price } = product;
  const rating = 4.2;
  const count = 25;

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
            priority
            className="object-cover rounded w-full"
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
            amount={formatCurrency(price)}
          />
          <div className="space-y-2 ">
            <h4 className="font-semibold">About this item: </h4>
            <p className="leading-8">{description}</p>
          </div>
          <AddToCart className="lg:self-start mt-10 " size="lg" />
        </div>
      </div>
    </>
  );
};
export default SingleProductContainer;
