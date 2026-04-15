import type { ReactNode } from "react";

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ border: "1px solid #222", borderRadius: 8, padding: 16 }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
