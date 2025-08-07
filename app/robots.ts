import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/intro", "/sign-in", "/support", "/expired-session"],
        disallow: [
          "/api/",
          "/dashboard",
          "/products",
          "/sales",
          "/purchases",
          "/users",
          "/reports",
          "/expenses",
          "/loans",
          "/notification",
          "/role",
          "/setting",
          "/history-transaction",
          "/_next/",
          "/uploads/",
        ],
      },
    ],
    sitemap: "https://birgastore.vercel.app/sitemap.xml",
    host: "https://birgastore.vercel.app",
  };
}
