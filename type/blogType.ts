export interface BlogPortal {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export interface ApiBlogItem {
  id: string;
  createdAt: string;
  sortOrder: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string | null;
  portal: BlogPortal;
  seoMetadata: any | null;
  coverImage: string | string[];
  content?: string; // HTML content, usually in detail view
}

export interface BlogListData {
  blogs: ApiBlogItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BlogListResponse {
  status: number;
  data: BlogListData;
  cached: boolean;
}

export interface SingleBlogResponse {
  status: number;
  blog: ApiBlogItem;
}

// Frontend-friendly mapped blog type to match static format
export interface MappedBlogItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  content: string;
}
