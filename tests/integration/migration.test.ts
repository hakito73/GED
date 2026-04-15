import { describe, expect, test } from "vitest";
import mapping from "../../migration/mappings/prestashop-to-target.json";

describe("mapping migration", () => {
  test("contient les clés critiques", () => {
    expect(mapping["ps_product.ean13"]).toBe("product.isbn_ean");
  });
});
