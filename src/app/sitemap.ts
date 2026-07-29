import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seoConfig";
import { industriesData } from "@/data/industriesDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/company",
    "/waterworks-castings",
    "/products",
    "/capabilities",
    "/quality",
    "/industries",
    "/calculator",
    "/blog",
    "/homepage-two",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = Object.keys(industriesData).map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...industryPages];
}
