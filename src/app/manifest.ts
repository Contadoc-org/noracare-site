import type { MetadataRoute } from "next";
import { appStores, siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0A153A",
    theme_color: "#0A153A",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    related_applications: [
      {
        platform: "play",
        url: appStores.playStoreUrl,
        id: appStores.playPackage,
      },
      { platform: "itunes", url: appStores.appStoreUrl },
    ],
  };
}
