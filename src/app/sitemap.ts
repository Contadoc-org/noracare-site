import type { MetadataRoute } from "next";
import { helpPages } from "@/content/help/nav";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/produto",
    "/sobre",
    "/contato",
    "/privacidade",
    "/privacidade-app",
    "/exclusao-de-dados",
    "/help",
    ...helpPages.map((page) => `/help/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
