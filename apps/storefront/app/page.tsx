const featured = [
  { title: "Nouveautés", href: "/nouveautes" },
  { title: "Meilleures ventes", href: "/best-sellers" },
  { title: "Coups de cœur", href: "/coups-de-coeur" },
  { title: "Précommandes", href: "/precommandes" }
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Excalibur Comics</h1>
      <p>Librairie comics en ligne, pensée pour la découverte éditoriale.</p>
      <ul>
        {featured.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
