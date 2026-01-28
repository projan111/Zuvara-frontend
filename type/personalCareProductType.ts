export interface Variant {
  id: number;
  image: string;
  size: string;
  weight?: string;
}

export interface Review {
  id: number;
  userName: string;
  userInitial: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  productImage: string;
  image: string;
  category: string;
  slug: string;
  inStock: boolean;
  variants: Variant[];
  description?: string;
  subDesc1?: string;
  highlights?: string[];
  features?: string[];
  reviewsData?: Review[];
  faqs?: FAQ[];
}
