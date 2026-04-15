export type AdminModule =
  | "catalogue"
  | "taxonomy"
  | "homepage-merchandising"
  | "promotions"
  | "preorders"
  | "seo-redirects"
  | "legal-content";

export const enabledModules: AdminModule[] = [
  "catalogue",
  "taxonomy",
  "homepage-merchandising",
  "promotions",
  "preorders",
  "seo-redirects",
  "legal-content"
];
