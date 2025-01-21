import Section from "@/components/global/Section";
import OrderCard from "@/components/order/OrderCard";
import OrderTable from "@/components/order/OrderTable";

const OrdersPage = () => {
  return (
    <Section>
      <OrderCard />
      <OrderTable />
    </Section>
  );
};

export default OrdersPage;
