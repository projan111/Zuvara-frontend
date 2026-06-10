import { api } from "@/config/axios-config";
import type { Product as BabyProduct } from "@/type/babyCareProductType";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";
import type { Product as PersonalProduct } from "@/type/personalCareProductType";

// General product type that can represent any of the categories
export type AppProduct = BabyProduct | ClothingProduct | StrollerProduct | PersonalProduct;

export const productService = {
  /**
   * Fetch all products or filter them by query parameters
   * @param params optional query params like { category: "clothing" }
   */
  async getProducts(params?: Record<string, string | number>): Promise<AppProduct[]> {
    const response = await api.get<AppProduct[]>("/products", { params });
    return response.data;
  },

  /**
   * Fetch products by category
   * Example: productService.getProductsByCategory("baby-care")
   */
  async getProductsByCategory(category: string): Promise<AppProduct[]> {
    const response = await api.get<AppProduct[]>(`/products`, {
      params: { category }
    });
    return response.data;
  },

  /**
   * Fetch a single product by its unique slug
   */
  async getProductBySlug(slug: string): Promise<AppProduct> {
    const response = await api.get<AppProduct>(`/products/${slug}`);
    return response.data;
  },

  /**
   * Create a new product (admin feature example)
   */
  async createProduct(productData: Partial<AppProduct>): Promise<AppProduct> {
    const response = await api.post<AppProduct>("/products", productData);
    return response.data;
  },

  /**
   * Update an existing product (admin feature example)
   */
  async updateProduct(slug: string, productData: Partial<AppProduct>): Promise<AppProduct> {
    const response = await api.put<AppProduct>(`/products/${slug}`, productData);
    return response.data;
  },

  /**
   * Delete a product
   */
  async deleteProduct(slug: string): Promise<void> {
    await api.delete(`/products/${slug}`);
  }
};
