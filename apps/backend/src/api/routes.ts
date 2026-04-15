import type { IncomingMessage, ServerResponse } from "node:http";
import { healthController } from "./controllers/health.js";
import { featuredController } from "./controllers/featured.js";

export type Handler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: Record<string, Handler> = {
  "/health": healthController,
  "/api/v1/featured": featuredController
};
