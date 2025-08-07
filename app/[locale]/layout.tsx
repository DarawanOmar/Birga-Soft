import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { fontSirwan } from "@/public/fonts";
import { ThemeProvider } from "@/providers/theme-providers";
import { Viewport, Metadata } from "next";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} suppressHydrationWarning>
      <body className={`${fontSirwan.variable} font-sirwan font-medium`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {" "}
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Birga Store",
  description:
    "Birga Store is a store management for your business and products",
  keywords: [
    "Birga Store",
    "birgastore",
    "birga store",
    "E-commerce",
    "Store Management",
  ],
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
