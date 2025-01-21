import ErrorContainer from "@/components/global/ErrorContainer";
import Checkout from "@/components/order/Checkout";

const CheckoutPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; cartId?: string }>;
}) => {
  const params = await searchParams;
  const orderId = params.orderId;
  const cartId = params.cartId;

  if (!orderId || !cartId) return <ErrorContainer />;
  return <Checkout orderId={orderId} cartId={cartId} />;
};
export default CheckoutPage;
