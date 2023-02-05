import { getStops } from "../services/stops/stops.service.ts";

// deno-lint-ignore no-explicit-any
export async function getStopByLinea(ctx: any, next:any) {
    try {
        const {linea} = ctx.params
        const stops = await getStops(linea)
        ctx.response.body = stops;  
    } catch (error) {
        ctx.response.status = error.status || 500
        ctx.response.body = error.body || error.message
        next()
    }
    
    
}