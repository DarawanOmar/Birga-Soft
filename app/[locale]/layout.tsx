import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { fontSirwan } from "@/public/fonts";
import { ThemeProvider } from "@/providers/theme-providers";

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
