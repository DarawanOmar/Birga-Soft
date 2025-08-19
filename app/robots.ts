import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://birgastoresystem.vercel.app/sitemap.xml",
    host: "https://birgastoresystem.vercel.app",
  };
}
