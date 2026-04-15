# SPEC — Refonte e-commerce headless Excalibur Comics

## 1) Vision
Construire une plateforme e-commerce éditoriale spécialisée comics, orientée SEO et autonomie technique, découplée de PrestaShop et des modules propriétaires.

## 2) Contraintes non négociables
- Open source, auto-hébergeable, sans lock-in SaaS.
- Richesse taxonomique (univers/éditeurs/collections/personnages).
- Performance mobile et Core Web Vitals.
- Migration progressive sans interruption de vente.
- Découplage strict: expérimentation IA/reco ≠ cœur transactionnel.

## 3) Domaines fonctionnels
### 3.1 Catalogue éditorial
- Taxonomie normalisée: catégorie, collection, univers, éditeur, personnage, format, tags.
- Landing pages éditoriales: sélections, coups de cœur, promos, nouveautés, best-sellers.

### 3.2 Produit
Champs obligatoires: titre, slug, résumé, sommaire, EAN/ISBN, contributeurs, date de parution, statut stock/précommande, variantes, prix/promo, liens de recommandation.

### 3.3 Recherche/navigation
- Index Meilisearch enrichi + tolérance fautes.
- Facettes: univers, éditeur, collection, personnage, auteurs, illustrateurs, disponibilité, prix, date, promo.
- Breadcrumbs, tri, pagination SEO-safe.

### 3.4 Compte client
- Auth, profil, adresses, commandes, suivi, avoirs, coupons.
- Wishlist, alertes retour stock/précommande, SAV.

### 3.5 Checkout/commande
- Panier persistant.
- Paiements par adaptateurs (CB, PayPal, etc.).
- Idempotence + anti double-commande + webhooks fiables.
- Règles mixtes stock/précommande explicites.

### 3.6 Fidélisation/merchandising
- Promotions/coupons/cadeaux.
- Cross-sell/up-sell.
- Bloc “même univers/collection”.

### 3.7 Avis & modération
- Avis clients modérés, signalement, workflows admin.

### 3.8 Back-office métier
- Gestion contenus éditoriaux, taxonomie, merchandising homepage, redirections SEO, contenus légaux.

## 4) NFR (non-fonctionnels)
- TypeScript strict.
- Observabilité minimale: logs structurés, métriques, traces.
- Sécu: validation stricte, RBAC, audit log.
- Documentation runbook + checklist prod.

## 5) Hypothèses
- Monodevise EUR à MEP initiale.
- France métropolitaine prioritaire.
- PSP et transporteurs intégrés via adaptateurs plugin.

## 6) Critères d’acceptation MVP+
- SEO: conservation URL ou 301 exhaustive.
- Import produits/clients/commandes PrestaShop rejouable.
- Checkout stable production.
- Back-office utilisable par équipe métier sans développeur.
