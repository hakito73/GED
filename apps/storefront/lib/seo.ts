export function productJsonLd(input: {
  name: string;
  description: string;
  sku: string;
  price: number;
  currency?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    sku: input.sku,
    offers: {
      "@type": "Offer",
      priceCurrency: input.currency ?? "EUR",
      price: input.price
    }
  });
}
