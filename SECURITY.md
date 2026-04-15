# SECURITY — Baseline sécurité plateforme

## Contrôles applicatifs
- Validation stricte des payloads (zod/class-validator).
- Protection CSRF et headers de sécurité.
- Sanitization des contenus riches.
- Rate limit sur auth/recherche/checkout.
- Idempotency key obligatoire pour création commande.

## Auth & rôles
- RBAC: `admin`, `operator`, `editorial`, `support`.
- MFA recommandé pour rôles sensibles.
- Audit trail sur actions critiques (prix, stock, remboursements, redirects).

## Secrets & infra
- Secrets via variables injectées (jamais en git).
- Rotation des clés PSP/webhooks.
- Sauvegardes chiffrées DB + tests de restauration.

## Observabilité sécurité
- Logs JSON centralisés.
- Alerting sur anomalies checkout/paiement/auth.
- Playbook incident dans `docs/OPERATIONS.md`.
