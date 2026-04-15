import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Excalibur Comics — Librairie comics en ligne",
  description: "Comics VF, éditions collector, nouveautés et sélections éditoriales.",
  metadataBase: new URL("https://www.excalibur-comics.fr")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
