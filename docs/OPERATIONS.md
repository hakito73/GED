# Exploitation

## Observabilité minimale
- Logs JSON backend/storefront.
- Sondes `/health`.
- Alertes sur erreurs checkout/auth.

## Sauvegardes
- Dump PostgreSQL quotidien.
- Versioning bucket médias.
- Test de restauration mensuel.

## Incident majeur
1. Activer mode maintenance checkout.
2. Vérifier PSP/webhooks/idempotence.
3. Basculer sur snapshot stable si corruption.
4. Publier REX.
