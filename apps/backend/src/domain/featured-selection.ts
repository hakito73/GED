export type FeaturedSelection = {
  slug: string;
  title: string;
  description: string;
  taxonomy: "universe" | "collection" | "publisher" | "editorial";
};

export const demoFeaturedSelection: FeaturedSelection[] = [
  {
    slug: "batman-essentiels",
    title: "Batman: essentiels",
    description: "Sélection éditoriale des incontournables Batman en VF.",
    taxonomy: "universe"
  },
  {
    slug: "urban-limited",
    title: "Urban Limited",
    description: "Éditions collector et tirages premium.",
    taxonomy: "collection"
  }
];
