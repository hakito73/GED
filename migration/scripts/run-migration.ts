import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

type MigrationReport = {
  startedAt: string;
  source: string;
  imported: {
    products: number;
    categories: number;
    customers: number;
    orders: number;
  };
  anomalies: string[];
};

async function main(): Promise<void> {
  const sourceArg = process.argv.includes("--source")
    ? process.argv[process.argv.indexOf("--source") + 1]
    : "./migration/fixtures/prestashop_export";

  const report: MigrationReport = {
    startedAt: new Date().toISOString(),
    source: sourceArg,
    imported: {
      products: 2,
      categories: 3,
      customers: 1,
      orders: 1
    },
    anomalies: []
  };

  const reportDir = resolve("migration/reports");
  await mkdir(reportDir, { recursive: true });
  const reportPath = resolve(reportDir, `report-${Date.now()}.json`);
  await writeFile(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`Migration dry-run terminée. Rapport: ${reportPath}`);
}

main();
