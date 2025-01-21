import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";
import { createOrderAction } from "@/actions/action-order";

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div>
      <Card className="p-8 rounded-none border-none shadow-md">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="OrderTotal" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place order" className="w-full mt-6" />
      </FormContainer>
    </div>
  );
};
export default CartTotals;

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}
