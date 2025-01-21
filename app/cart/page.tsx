import { getAuthUser } from "@/actions/action-utils";
import { fetchOrCreateCart, updateCart } from "@/actions/action-cart";
import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import ErrorContainer from "@/components/global/ErrorContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { redirect } from "next/navigation";
import Section from "@/components/global/Section";

const CartPage = async () => {
  const user = await getAuthUser();
  if (!user || !user.userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId: user.userId });
  const { currentCart, cartItems } = await updateCart(previousCart);
  const isEmpty = cartItems.length === 0;

  return (
    <Section>
      <SectionTitle>Shopping Cart</SectionTitle>
      {isEmpty ? (
        <ErrorContainer
          heading="There is no item in your shopping cart."
          className="mt-16"
        />
      ) : (
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItemsList cartItems={cartItems} />
          </div>
          <div className="lg:col-span-4">
            <CartTotals cart={currentCart} />
          </div>
        </div>
      )}
    </Section>
  );
};

export default CartPage;
