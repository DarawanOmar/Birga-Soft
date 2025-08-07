import { Metadata, Viewport } from "next";
import { routing } from "@/i18n/routing";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Birga Store",
    template: "%s - Birga Store",
  },
  description:
    "Birga Store is a store management for your business and products",
  abstract: "Birga Store is a store management for your business and products",
  applicationName: "Birga Store",
  keywords: [
    "Birga Store",
    "birgastore",
    "birga store",
    "E-commerce",
    "Store Management",
  ],
  authors: [
    {
      name: "Birga Soft",
      url: "https://birgastore.vercel.app",
    },
  ],
  creator: "Birga Soft",
  publisher: "Birga Soft",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  category: "Store Management",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://birgastore.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
    noarchive: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1,
  minimumScale: 1,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  height: "device-height",
  interactiveWidget: "resizes-content",
};
