import Link from "next/link";

type CartItemHeadingProps = {
  company: string;
  name: string;
  productId: string;
};

const CartItemHeading = ({
  company,
  name,
  productId,
}: CartItemHeadingProps) => {
  return (
    <div className="mr-10 mb-6 md:mb-0">
      <Link href={`/products/${productId}`}>
        <h3 className="capitalize text-base font-medium hover:underline">{name}</h3>
      </Link>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
    </div>
  );
};
export default CartItemHeading;
