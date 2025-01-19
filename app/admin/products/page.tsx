import { fetchAdminProdcuts } from "@/actions/action-product";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconButton } from "@/components/form/Buttons";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";

import { deleteProductAction } from "@/actions/action-product";
import FormContainer from "@/components/form/FormContainer";

const DeleteProduct = ({ productId }: { productId: string }) => {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer
      action={deleteProduct}
      resetFields={false}
      invalidateQuery="adminProducts"
    >
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

const AdminProductsPage = async () => {
  const products: Product[] = await fetchAdminProdcuts();
  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          Total products: {products?.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id: productId, name, company, price } = product;
            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(Number(price))}</TableCell>
                <TableCell className="flex items-center gap-1 justify-start">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default AdminProductsPage;
