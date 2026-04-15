import type { IncomingMessage, ServerResponse } from "node:http";
import { demoFeaturedSelection } from "../../domain/featured-selection.js";

export const featuredController = (_req: IncomingMessage, res: ServerResponse): void => {
  res.end(JSON.stringify({ items: demoFeaturedSelection }));
};
