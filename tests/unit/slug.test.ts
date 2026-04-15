import { describe, expect, test } from "vitest";
import { normalizeSlug } from "../../packages/utils/src/index";

describe("normalizeSlug", () => {
  test("normalise les accents et espaces", () => {
    expect(normalizeSlug("Édition Spéciale Batman")).toBe("edition-speciale-batman");
  });
});
