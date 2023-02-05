import { Application } from "../deps.ts";
import stopsRouter from "./routes/stops.routes.ts";

// Create an instance of the Oak application
const app = new Application();

// Mount the domain-based router on the main router
app.use(stopsRouter.routes());
app.use(stopsRouter.allowedMethods());

// Start the server
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });