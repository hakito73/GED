# DATA_MODEL — Modèle de données métier comics

## Entités cœur
- `Product`: infos commerciales + éditoriales.
- `ProductVariant`: SKU, prix, stock, collector.
- `TaxonomyNode`: catégorie, univers, éditeur, collection, personnage, format, tag.
- `Contributor`: scénariste, dessinateur, coloriste.
- `ProductContributor`: relation n-n + rôle.
- `EditorialPage`: landing, sélection, homepage blocks.
- `PromotionRule`: coupons, remises, bundles.
- `GiftCard`: bons cadeaux.
- `StockAlert`: alertes retour/précommande.
- `Review`: avis client + modération.
- `RedirectRule`: redirections 301 SEO.

## Champs produit spécifiques
- `isbn_ean`, `summary`, `table_of_contents`, `release_type`, `release_date`
- `availability_status`: `in_stock | back_soon | pre_order | unavailable`
- `preorder_available_at`
- `related_product_ids`, `same_collection_ids`, `same_universe_ids`

## Taxonomie normalisée
`TaxonomyNode(type, slug, parent_id, is_indexable, display_order)`

Types autorisés:
- `category`
- `universe`
- `publisher`
- `collection`
- `character`
- `format`
- `editorial_tag`

## Règles clés
- Slugs uniques par type.
- Un produit peut appartenir à plusieurs axes taxonomiques.
- SEO canonical configurable par page listing.
- Précommande compatible avec stock partiel.
