import { api } from "@/config/axios-config";
import type { PortalResponse, PortalData, SinglePortalResponse, PortalItem } from "@/type/portalType";

export const portalService = {
  /**
   * Fetch all portals
   */
  async getPortals(): Promise<PortalData> {
    const response = await api.get<PortalResponse>("/portal/get-all");
    return response.data.data;
  },

  /**
   * Fetch a single portal by slug
   */
  async getPortalBySlug(slug: string): Promise<PortalItem> {
    const response = await api.get<SinglePortalResponse>(`/portal/get/${slug}`);
    return response.data.data;
  }
};

export default portalService;
