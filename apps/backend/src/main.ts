import { createServer } from "node:http";
import { routes } from "./api/routes.js";

const port = Number(process.env.PORT ?? 9000);

const server = createServer((req, res) => {
  const handler = routes[req.url ?? "/"];

  if (!handler) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  handler(req, res);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend API listening on :${port}`);
});
