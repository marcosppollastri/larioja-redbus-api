import { getStops } from "../services/stops.service.ts";

export async function getStopByLinea(ctx: any) {
    const {linea} = ctx.params
    const stops = await getStops(linea)
    ctx.response.body = stops;
}