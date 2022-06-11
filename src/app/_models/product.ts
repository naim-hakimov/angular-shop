export interface Product {
  product_id: string;
  name: string;
  description: string;
  images: string[],
  category_id: string;
  quantity: string;
  brand: string;
  model: string;
  price: number;
  featured: number;
  create_at: number;
}
