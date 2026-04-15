import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

async function main(): Promise<void> {
  const path = resolve("migration/fixtures/demo-products.json");
  const raw = await readFile(path, "utf8");
  const products = JSON.parse(raw) as Array<{ title: string; slug: string }>;
  console.log(`Seed prêt: ${products.length} produits de démonstration chargés.`);
}

main();
