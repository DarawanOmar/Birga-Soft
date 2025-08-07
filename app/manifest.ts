import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Birga Store - Complete Store Management",
    short_name: "Birga Store",
    description:
      "Complete store management solution for businesses. Manage inventory, track sales, handle products, and grow your business efficiently.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#39847f",
    orientation: "portrait-primary",
    scope: "/",
    id: "birga-store-app",
    categories: [
      "business",
      "productivity",
      "finance",
      "shopping",
      "utilities",
    ],
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/1.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/2.png",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/report-screen.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Business Reports Dashboard",
      },
      {
        src: "/report-screen2.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Sales Analytics",
      },
    ],
    lang: "ar",
    dir: "rtl",
    prefer_related_applications: false,
  };
}
