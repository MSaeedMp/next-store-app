import Image from "next/image";

const CartItemImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="relative md:h-48 h-64 w-full">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="w-full rounded-none object-cover"
      />
    </div>
  );
};
export default CartItemImage;
