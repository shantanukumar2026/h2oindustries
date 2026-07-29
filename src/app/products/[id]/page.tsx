import ProductDetailClient from "./ProductDetailClient";
import homeData from "@/data/home.json";
import { SITE_URL } from "@/data/seoConfig";

const allProducts = homeData.products.items;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    id: p.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id: idStr } = await params;
  const id = parseInt(idStr, 10);
  const product = allProducts.find((p) => p.id === id);

  if (!product) return { title: "Product Not Found | H2 Industries" };

  const canonicalUrl = `${SITE_URL}/products/${id}`;

  return {
    title: `${product.name} | H2 Industries Waterworks`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "H2 Industries",
      "waterworks castings",
      "hydro infrastructure",
      "AWWA compliant hardware"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: canonicalUrl,
      siteName: "H2 Industries",
      type: "website",
      images: [
        {
          url: product.image || "/images/2.webp",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
