import type { IncomingMessage, ServerResponse } from "node:http";

export const healthController = (_req: IncomingMessage, res: ServerResponse): void => {
  res.end(JSON.stringify({ status: "ok", service: "excalibur-backend" }));
};
