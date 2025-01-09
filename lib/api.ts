import { Product } from "@prisma/client";

export const fetchProducts = async (
  category: "featured" | "all",
  search?: string,
  token?: string | null
): Promise<Product[]> => {
  let url = `/api/products?category=${category}`;
  if (search && search !== "undefined") url += `&search=${search}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};

export const fetchSingleProduct = async (
  id: string,
  token?: string
): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!response.ok) throw new Error("Error fetching the product");
  return response.json();
};
