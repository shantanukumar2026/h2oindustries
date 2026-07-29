import BlogDetailClient from "./BlogDetailClient";
import blogsData from "@/data/blogs.json";
import { SITE_URL } from "@/data/seoConfig";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) return { title: "Article Not Found | H2 Industries" };

  const canonicalUrl = `${SITE_URL}/blog/${id}`;

  return {
    title: `${blog.title} | H2 Industries Insights`,
    description: blog.excerpt,
    keywords: [
      blog.title,
      blog.category,
      "H2 Industries",
      "waterworks engineering blog",
      "stormwater research"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: "H2 Industries",
      type: "article",
      images: [
        {
          url: blog.image || "/images/6.webp",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function BlogDetailPage() {
  return <BlogDetailClient />;
}
