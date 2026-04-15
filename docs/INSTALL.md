# Installation

## Prérequis
- Node.js 22+
- pnpm 9+
- Docker + Docker Compose

## Étapes
1. `cp .env.example .env`
2. `docker compose -f infra/docker/docker-compose.yml up -d`
3. `pnpm install`
4. `pnpm dev`

## Services
- Storefront: http://localhost:3000
- Backend: http://localhost:9000/health
- Meilisearch: http://localhost:7700
- MinIO console: http://localhost:9001
