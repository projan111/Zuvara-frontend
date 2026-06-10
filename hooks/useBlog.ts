import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => blogService.getBlogs(),
  });
}

export function useBlogBySlug(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogService.getBlogBySlug(slug),
    enabled: !!slug,
  });
}
