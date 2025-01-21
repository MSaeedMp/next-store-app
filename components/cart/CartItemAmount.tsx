import { removeCartItemAction } from "@/actions/action-cart";
import FormContainer from "../form/FormContainer";
import ProductAmountChange from "./ProductAmountChange";
import FormInput from "../form/FormInput";
import { SubmitButton } from "../form/Buttons";

const CartItemAmount = ({
  amount,
  cartItemId,
}: {
  amount: number;
  cartItemId: string;
}) => {
  return (
    <>
      <ProductAmountChange
        name="amount"
        amount={amount}
        cartItemId={cartItemId}
      />
      <FormContainer
        action={removeCartItemAction}
        schemaName="cartItemRemoveSchema"
        className="-mb-4 ml-4 md:m-0"
        invalidateQuery="numItemsInCart"
      >
        <FormInput type="hidden" name="id" value={cartItemId} />
        <SubmitButton size="sm" text="remove" />
      </FormContainer>
    </>
  );
};
export default CartItemAmount;
