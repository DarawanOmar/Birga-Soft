import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://birgastore.vercel.app";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/intro`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://birgastore.vercel.app/opengraph-image.png",
        "https://birgastore.vercel.app/logo.webp",
      ],
    },
    {
      url: `${baseUrl}/sign-in`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://birgastore.vercel.app/opengraph-image.png",
        "https://birgastore.vercel.app/logo.webp",
      ],
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://birgastore.vercel.app/opengraph-image.png",
        "https://birgastore.vercel.app/logo.webp",
      ],
    },
    {
      url: `${baseUrl}/expired-session`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://birgastore.vercel.app/opengraph-image.png",
        "https://birgastore.vercel.app/logo.webp",
      ],
    },
  ];
}
