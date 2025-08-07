interface StructuredDataProps {
  type: "organization" | "website" | "breadcrumb";
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any;

  switch (type) {
    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Birga Store",
        description: "Complete store management solution for businesses",
        url: "https://birgastore.vercel.app",
        logo: "https://birgastore.vercel.app/logo.webp",
        sameAs: [
          // Add your social media links here when available
          "https://www.facebook.com/birgastore",
          "https://twitter.com/birgastore",
          "https://www.instagram.com/birgastore",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IQ", // Iraq
          addressRegion: "Kurdistan",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: "https://birgastore.vercel.app/support",
        },
      };
      break;

    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Birga Store",
        description: "Store management system for businesses",
        url: "https://birgastore.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://birgastore.vercel.app/products?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: ["ar", "kr", "en"],
      };
      break;

    case "breadcrumb":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items || [],
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbData(items: { name: string; url: string }[]) {
  return {
    items: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
