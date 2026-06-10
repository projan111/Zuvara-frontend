import { api } from "@/config/axios-config";
import type { BlogListResponse, BlogListData, SingleBlogResponse, ApiBlogItem } from "@/type/blogType";

export const blogService = {
  /**
   * Fetch all blogs
   */
  async getBlogs(): Promise<BlogListData> {
    const response = await api.get<BlogListResponse>("/blog/get-all");
    return response.data.data;
  },

  /**
   * Fetch a single blog by its unique slug
   */
  async getBlogBySlug(slug: string): Promise<ApiBlogItem> {
    const response = await api.get<SingleBlogResponse>(`/blog/get/${slug}`);
    return response.data.blog;
  }
};

export default blogService;
