import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = "/opengraph-image.png",
  url,
  type = "website",
  noIndex = false,
  canonical,
}: SEOProps): Metadata {
  const baseUrl = "https://birgastore.vercel.app";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      "Birga Store",
      "store management",
      "inventory management",
      "business management",
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Birga Store",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "ar_IQ",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@birgastore", // Add your Twitter handle if available
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonical || fullUrl,
    },
  };
}

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  auth: {
    title: "Sign In",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: ["sign in", "login", "authentication"],
  },
  intro: {
    title: "Welcome to Birga Store",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: ["Birga Store", "online shopping", "best offers"],
  },
  home: {
    title: "Birga Store - Complete Store Management Solution",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: [
      "store management",
      "inventory tracking",
      "sales management",
      "business software",
    ],
  },

  products: {
    title: "Products Management",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: [
      "product management",
      "inventory",
      "stock tracking",
      "catalog management",
    ],
  },

  sales: {
    title: "Sales Management",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: [
      "sales tracking",
      "invoice generation",
      "transaction management",
      "business analytics",
    ],
  },

  dashboard: {
    title: "Dashboard",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: [
      "business dashboard",
      "analytics",
      "performance metrics",
      "store overview",
    ],
  },

  reports: {
    title: "Business Reports",
    description:
      "Manage your store efficiently with Birga Store. Track inventory, handle sales, manage products, and grow your business with our comprehensive management system.",
    keywords: [
      "business reports",
      "sales analytics",
      "inventory reports",
      "data analysis",
    ],
  },
};
