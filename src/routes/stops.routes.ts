import { Router } from "../../deps.ts";
import { getStopByLinea } from "../controllers/stops.controller.ts";

const stopsRouter = new Router()
  .get("/stops/:linea", getStopByLinea)

export default stopsRouter; 