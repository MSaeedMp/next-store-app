import { z, ZodSchema } from "zod";

export const emptySchema = z.object({});

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Product name must be at least 2 characters.",
    })
    .max(100, {
      message: "Product name must be less than 100 characters.",
    }),
  company: z.string(),
  new: z.coerce.boolean(),
  featured: z.coerce.boolean(),
  bestSeller: z.coerce.boolean(),
  recommended: z.coerce.boolean(),
  price: z.coerce
    .number()
    .min(0, { message: "Price must be a positive number." })
    .refine(
      (value) => Number.isFinite(value) && Number(value.toFixed(2)) === value,
      {
        message: "Price must have at most two decimal places.",
      }
    ),

  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: "Description must be between 10 and 1000 words." }
  ),
  image: validateImageFile(),
});

export const updateProductSchema = productSchema.extend({
  image: validateImageFile({ requireImage: false }).optional(),
  id: z.string(),
  url: z.string(),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().nonempty("Password is required."),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least two characters long.")
      .max(50, "Name must be less than 50 characters long.")
      .nonempty("Name is required."),
    email: z
      .string()
      .email("Invalid email format")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character."
      )
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const reviewSchema = z.object({
  rating: z.coerce
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  title: z
    .string()
    .min(2, "Title must be more than two characters.")
    .max(100, "Title Cannot be more than 100 characters long."),
  comment: z
    .string()
    .min(10, "Comment must be more than 10 characters long.")
    .max(1000, "Comment cannot be more than 1000 characters long"),
  productId: z.string(),
});

export const AddToCartSchema = z.object({
  amount: z.number().int().min(1, "Amount must be at least 1"),
  productId: z.string(),
});

export const cartItemRemoveSchema = z.object({
  id: z.string(),
});

function validateImageFile({
  requireImage = true,
  validateSize = true,
  validateFormat = true,
} = {}) {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = "image/";
  const isServer = typeof window === "undefined";

  let schema: z.ZodType<File | null> = z
    .any()
    .refine(
      (value) => !value || value instanceof (isServer ? File : FileList),
      "Invalid file type"
    )
    .transform((value) =>
      value instanceof File ? value : value?.item?.(0) || null
    );

  if (requireImage) {
    schema = schema.refine(
      (file) => file && file.size > 0,
      "Please provide an image."
    );
  }

  if (validateSize) {
    schema = schema.refine(
      (file) => !file || file.size <= maxUploadSize,
      "Max image size is 1MB"
    );
  }

  if (validateFormat) {
    schema = schema.refine(
      (file) => !file || file.type?.startsWith(acceptedFileTypes),
      "Invalid image format"
    );
  }

  return schema;
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}
