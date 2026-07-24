import type { Dimensions } from "./Dimensions";
import type { Review } from "./Reviews";


export interface Vehicle {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  brand: string;
  price: number;
  rating: number;
  availabilityStatus: string;
  images: string[];
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  sku: string;
  stock: number;
  discountPercentage: number;
  dimensions: Dimensions;
  reviews: Review[];
  category: string;
}