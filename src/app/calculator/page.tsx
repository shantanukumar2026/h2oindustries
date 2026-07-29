import CalculatorClient from "./CalculatorClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("calculator");

export default function CalculatorPage() {
  return <CalculatorClient />;
}
