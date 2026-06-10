import { useQuery } from "@tanstack/react-query";
import { portalService } from "@/services/portalService";

export function usePortals() {
  return useQuery({
    queryKey: ["portals"],
    queryFn: () => portalService.getPortals(),
  });
}

export function usePortalBySlug(slug: string) {
  return useQuery({
    queryKey: ["portal", slug],
    queryFn: () => portalService.getPortalBySlug(slug),
    enabled: !!slug,
  });
}
