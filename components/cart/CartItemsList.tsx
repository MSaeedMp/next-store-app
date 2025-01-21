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
    <div className="flex flex-col gap-4">
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;
        return (
          <Card key={id} className="grid grid-cols-1 md:grid-cols-4 rounded-none border-none shadow-md">
            <CartItemImage image={image} name={name} />
            <div className="md:col-span-3 flex flex-col md:flex-row md:justify-between p-6">
              <CartItemHeading
                productId={productId}
                company={company}
                name={name}
              />
              <div className="flex items-center md:flex-col md:items-start md:ml-auto">
                <CartItemAmount amount={amount} cartItemId={id} />
              </div>
              <Price
                amount={formatCurrency(Number(price))}
                className="flex md:items-start items-center text-lg font-medium md:ml-4 ml-auto"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default CartItemsList;
