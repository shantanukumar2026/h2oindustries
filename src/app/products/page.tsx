import ProductsClient from "./ProductsClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("products");

export default function ProductsPage() {
  return <ProductsClient />;
}
