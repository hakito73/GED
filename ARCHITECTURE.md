# ARCHITECTURE — Référence Medusa + Next.js

## 1. Vue d’ensemble
Architecture hexagonale modulaire:
- **Canal public**: `apps/storefront` (Next.js SSR/ISR)
- **Cœur commerce**: `apps/backend` (Medusa + modules métier)
- **Canal admin**: `apps/admin` (extensions back-office)
- **Search**: Meilisearch indexé async
- **Infra data**: PostgreSQL + Redis + S3

## 2. Bounded contexts
1. Catalogue éditorial
2. Pricing & promotions
3. Inventory & précommandes
4. Checkout & order lifecycle
5. Customer & CRM léger
6. Content légal/SEO
7. Migration & data quality

## 3. Principes
- Cœur transactionnel stable, modules innovation branchés par événements.
- APIs versionnées (`/api/v1`).
- Événementiel interne (outbox/job queue Redis) pour indexation, alerts, emails.
- Idempotency keys sur création commande/paiement.

## 4. Flots critiques
- PDP -> cart -> checkout -> paiement -> webhook PSP -> order confirmed.
- Update stock/prix -> event -> reindex Meilisearch + invalidation cache storefront.
- Précommande -> split logistique selon date disponibilité.

## 5. Déploiement
- Docker Compose local.
- Production: backend/storefront stateless + DB/Redis/Meili/S3 managés ou auto-hébergés.
- Reverse proxy (Traefik/Nginx) + TLS + WAF léger.

## 6. Extensibilité
- Recommandation/IA via service séparé lisant events catalog/orders.
- A/B testing par feature flags open-source.
- PWA ajoutable côté storefront sans impact checkout backend.
