"use client";
import FormInput from "../form/FormInput";
import FormContainer from "../form/FormContainer";
import PriceInput from "../form/PriceInput";
import TextAreaInput from "../form/TextAreaInput";
import CheckboxInput from "../form/CheckboxInput";
import { SubmitButton } from "../form/Buttons";
import ImageInput from "../form/ImageInput";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { updateProductAction } from "@/actions/action-product";
import { Product } from "@prisma/client";

const EditSingleProduct = ({ product }: { product: Product }) => {
  const [isImageUpdateVisible, setIsImageUpdateVisible] =
    useState<boolean>(false);

  const {
    name,
    company,
    description,
    featured,
    new: newProduct,
    bestSeller,
    recommended,
    price,
    image,
  } = product;

  return (
    <>
      <FormContainer
        action={updateProductAction}
        schemaName="updateProductSchema"
        redirectPath="/admin/products"
        invalidateQuery="adminProducts"
      >
        <div className="mb-8">
          <Image
            src={image}
            width={200}
            height={200}
            className="rounded object-cover mb-4 w-[200px] h-[200px]"
            alt={name}
            priority
          />
          <Button
            variant="outline"
            type="button"
            size="sm"
            className="mb-4"
            onClick={() => setIsImageUpdateVisible((prev) => !prev)}
          >
            Update image
          </Button>

          {isImageUpdateVisible && <ImageInput />}
        </div>

        <div className="grid gap-4 md:grid-cols-2 my-4">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <FormInput
            type="text"
            name="company"
            label="Company"
            defaultValue={company}
          />
          <PriceInput defaultValue={Number(price)} />
        </div>
        <TextAreaInput
          name="description"
          labelText="Product description"
          defaultValue={description}
        />
        <div className="flex flex-col gap-4 mt-6">
          <CheckboxInput name="new" label="New" defaultChecked={newProduct} />
          <CheckboxInput
            name="featured"
            label="Featured"
            defaultChecked={featured}
          />
          <CheckboxInput
            name="bestSeller"
            label="Best Seller"
            defaultChecked={bestSeller}
          />
          <CheckboxInput
            name="recommended"
            label="Recommended"
            defaultChecked={recommended}
          />
        </div>

        <SubmitButton text="Update product" className="mt-8" />

        <FormInput type="hidden" name="id" value={product.id} />
        <FormInput type="hidden" name="url" value={image} />
      </FormContainer>
    </>
  );
};
export default EditSingleProduct;
