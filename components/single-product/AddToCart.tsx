"use client";

import FormContainer from "../form/FormContainer";
import { AddToCartSignInButton, AddToCartSubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/actions/action-cart";
import FormInput from "../form/FormInput";
import ProductAmountSelect from "../cart/ProductAmountSelect";
// import { useAuthContext } from "@/hooks/useAuthContext";
import { useSession } from "next-auth/react";

const AddToCart = ({ productId }: { productId: string }) => {
  // const { user } = useAuthContext();
  const session = useSession();
  const user = session.data?.user;
  // const pathName = usePathname();

  return (
    <>
      {user ? (
        <FormContainer
          action={addToCartAction}
          schemaName="AddToCartSchema"
          invalidateQuery="numItemsInCart"
        >
          <ProductAmountSelect name="amount" />
          <FormInput type="hidden" name="productId" value={productId} />
          <AddToCartSubmitButton/>
        </FormContainer>
      ) : (
        <AddToCartSignInButton />
      )}
    </>
  );
};
export default AddToCart;
