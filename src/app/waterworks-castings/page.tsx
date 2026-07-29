import WaterworksCastingsClient from "./WaterworksCastingsClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("waterworksCastings");

export default function WaterworksCastingsPage() {
  return <WaterworksCastingsClient />;
}
