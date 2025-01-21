"use client";

import FormContainer from "../form/FormContainer";
import { AddToCartSignInButton, AddToCartSubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/actions/action-cart";
import FormInput from "../form/FormInput";
import ProductAmountSelect from "../cart/ProductAmountSelect";
import { useSession } from "next-auth/react";

const AddToCart = ({ productId }: { productId: string }) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <>
      {user ? (
        <FormContainer
          action={addToCartAction}
          schemaName="AddToCartSchema"
          invalidateQuery="numItemsInCart"
        >
       <div className="flex items-center justify-between w-full">
            <ProductAmountSelect name="amount" />
            <FormInput type="hidden" name="productId" value={productId} />
            <AddToCartSubmitButton className="self-end" />
       </div>
        </FormContainer>
      ) : (
        <AddToCartSignInButton />
      )}
    </>
  );
};
export default AddToCart;
