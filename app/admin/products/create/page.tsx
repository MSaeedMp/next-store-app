import { createProductAction } from "@/actions/action-product";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { faker } from "@faker-js/faker";

const ProductCreatePage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer
          action={createProductAction}
          schemaName="productSchema"
          redirectPath="/admin/products"
          resetFields={true}
          className="flex flex-col"
        >
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="Product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Product description"
            defaultValue={description}
          />
          <div className="flex flex-col gap-4 mt-6">
            <CheckboxInput name="new" label="New" defaultChecked={true} />
            <CheckboxInput name="featured" label="Featured" />
            <CheckboxInput name="bestSeller" label="Best Seller" />
            <CheckboxInput name="recommended" label="Recommended" />
          </div>
          <SubmitButton text="create product" className="mt-8 self-end" />
        </FormContainer>
      </div>
    </section>
  );
};
export default ProductCreatePage;
