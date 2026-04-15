# Excalibur Comics — Plateforme e-commerce headless (Medusa + Next.js)

Ce dépôt initialise un **monorepo auto-hébergeable** pour reconstruire `www.excalibur-comics.fr` sans PrestaShop, sans plugins payants, avec un socle orienté SEO, migration maîtrisée et extensibilité long terme.

## Stack de référence
- **Backend commerce**: Medusa (architecture modulaire TypeScript)
- **Storefront**: Next.js App Router + TypeScript strict
- **DB**: PostgreSQL
- **Cache / jobs**: Redis
- **Search**: Meilisearch
- **Médias**: S3-compatible (MinIO en local)
- **UI**: Tailwind CSS + composants partagés
- **Tests**: Vitest + Playwright
- **Infra locale**: Docker Compose

## Structure
- `apps/backend`: API commerce + modules métier comics
- `apps/storefront`: storefront SEO-first en français
- `apps/admin`: extensions back-office métier
- `packages/*`: UI, types, utilitaires, config partagée
- `migration/`: mapping et scripts idempotents PrestaShop -> nouveau modèle
- `infra/`: compose, variables d’environnement, notes d’exploitation
- `docs/`: documentation installation/exploitation/go-live

## Démarrage rapide
```bash
cp .env.example .env
pnpm install
pnpm dev
```

> Le détail fonctionnel, les hypothèses et la feuille de route sont documentés dans:
> `SPEC.md`, `ARCHITECTURE.md`, `DATA_MODEL.md`, `MIGRATION_PLAN.md`, `SEO_PLAN.md`, `SECURITY.md`.

## Commandes principales
```bash
pnpm lint
pnpm test
pnpm test:e2e
pnpm seed:demo
pnpm migration:run -- --source ./migration/fixtures/prestashop_export
```

## État du socle
Cette version fournit:
1. Spécification et architecture cible détaillées.
2. Monorepo initial avec fondations backend/storefront/admin.
3. Modèle de données métier comics.
4. Pipeline de migration rejouable (squelettes + mapping).
5. Stratégie SEO/SSR/ISR/redirects prête production.
6. Documentation de mise en œuvre et d’exploitation.
