import Section from "@/components/global/Section";
import SectionTitle from "@/components/global/SectionTitle";
import OrderTable from "@/components/order/OrderTable";

const OrdersPage = () => {
  return (
    <Section>
      <SectionTitle className="mb-8">Your orders</SectionTitle>
      <div className="p-10 bg-white shadow-md">
        <OrderTable />
      </div>
    </Section>
  );
};

export default OrdersPage;
