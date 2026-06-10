export interface PortalItem {
  id: string;
  sortOrder: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  seoMetadata: any | null;
}

export interface PortalData {
  portal: PortalItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PortalResponse {
  status: number;
  data: PortalData;
  cached: boolean;
}

export interface SinglePortalResponse {
  status: number;
  data: PortalItem;
  cached: boolean;
}
