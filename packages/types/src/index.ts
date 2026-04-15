export type AvailabilityStatus = "in_stock" | "back_soon" | "pre_order" | "unavailable";

export type ReleaseType = "librairie" | "periodique" | "autre";

export type ComicProduct = {
  id: string;
  title: string;
  slug: string;
  isbnEan?: string;
  releaseType: ReleaseType;
  availability: AvailabilityStatus;
};
