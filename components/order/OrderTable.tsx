import { fetchUserOrders } from "@/actions/action-order";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/utils/format";

const OrderTable = async () => {
  const orders = await fetchUserOrders();
  console.log(orders)
  return (
    <Table>
      <TableCaption> Total orders: {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Products</TableHead>
          <TableHead>Order Total</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const { products, orderTotal, tax, shipping, createdAt } = order;
          return (
            <TableRow key={order.id}>
              <TableCell>{products}</TableCell>
              <TableCell>{formatCurrency(orderTotal)}</TableCell>
              <TableCell>{formatCurrency(tax)}</TableCell>
              <TableCell>{formatCurrency(shipping)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default OrderTable;
