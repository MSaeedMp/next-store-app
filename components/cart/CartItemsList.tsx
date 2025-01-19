import { CartItemWithProducts } from "@/utils/types";
import { Card } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import Price from "../single-product/Price";
import CartItemImage from "./CartItemImage";
import CartItemHeading from "./CartItemHeading";
import CartItemAmount from "./CartItemAmount";

const CartItemsList = ({
  cartItems,
}: {
  cartItems: CartItemWithProducts[];
}) => {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;
        return (
          <Card
            key={id}
            className="grid grid-cols-1 md:grid-cols-4 rounded-sm "
          >
            <CartItemImage image={image} name={name} />
            <div className="md:col-span-3 flex flex-col md:flex-row md:justify-between p-6">
              <CartItemHeading
                productId={productId}
                company={company}
                name={name}
              />
              <CartItemAmount amount={amount} cartItemId={id} />
              <Price
                amount={formatCurrency(Number(price))}
                className="flex md:items-start items-center text-lg font-medium ml-auto "
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default CartItemsList;
