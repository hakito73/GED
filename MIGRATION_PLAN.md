# MIGRATION_PLAN — PrestaShop -> Medusa

## Stratégie
Migration par lots idempotents, validée en préproduction, avec rollback opérationnel.

## Étapes
1. Audit schéma et qualité data PrestaShop.
2. Mapping cible (`migration/mappings/*.json`).
3. Export source (DB/CSV/API) sans scraping principal.
4. Transform normalisée + rapport anomalies.
5. Import séquencé: taxonomie -> produits -> clients -> commandes -> promotions.
6. Import SEO (meta/slugs) + génération redirects 301.
7. Reprise médias dans S3 compatible.
8. Reconciliation (compteurs, contrôles hash, échantillonnage).
9. Dry run complet en préprod.
10. Cutover progressif + monitoring + rollback plan.

## Idempotence
- Clé technique `source_system + source_id`.
- Upsert systématique.
- Logs d’exécution et journal erreurs (`migration/reports`).

## Rollback
- Snapshot DB pré-cutover.
- Réversibilité DNS/edge vers ancien front.
- Gel commandes pendant fenêtre critique (si nécessaire).
