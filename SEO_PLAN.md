# SEO_PLAN — Préservation et amélioration

## Objectifs
- Conserver le capital SEO historique.
- Renforcer l’indexation des pages éditoriales.

## Plan
1. Inventaire des URLs existantes et trafic associé.
2. Matrice 301 exhaustive (`migration/mappings/redirects.csv`).
3. Stratégie canonical (PDP/listing/pagination).
4. Sitemaps segmentés: produits, taxonomies, éditorial, légal.
5. JSON-LD: `Product`, `BreadcrumbList`, `Organization`.
6. Métadonnées dynamiques par taxonomie.
7. Gestion noindex pour filtres non stratégiques.
8. Monitoring GSC + logs crawl.

## Rendu
- SSR pour pages critiques SEO.
- ISR pour listings éditoriaux et nouveautés.
- Static generation pour pages légales/faible variabilité.

## KPI
- Erreurs crawl.
- Couverture index.
- Positions top pages.
- CWV mobile.
