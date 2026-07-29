import HomepageTwoClient from "./HomepageTwoClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("homepageTwo");

export default function HomepageTwo() {
  return <HomepageTwoClient />;
}
