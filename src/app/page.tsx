import HomePageClient from "./HomePageClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("home");

export default function Home() {
  return <HomePageClient />;
}
