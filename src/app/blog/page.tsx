import BlogClient from "./BlogClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("blog");

export default function BlogPage() {
  return <BlogClient />;
}
