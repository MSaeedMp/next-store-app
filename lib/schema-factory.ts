import {
  productSchema,
  signInSchema,
  signUpSchema,
  updateProductSchema,
  reviewSchema,
  AddToCartSchema,
  cartItemRemoveSchema,
} from "./schemas";

// Add other schemas here
const schemas = {
  productSchema,
  updateProductSchema,
  signInSchema,
  signUpSchema,
  reviewSchema,
  AddToCartSchema,
  cartItemRemoveSchema,
  // Add other schemas like `userSchema` here
};

export type SchemaKeys = keyof typeof schemas;

// Factory function
const schemaFactory = (name: SchemaKeys) => {
  return schemas[name];
};

export default schemaFactory;
