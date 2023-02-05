import { createError, ErrorTypes } from "../handlers/errorGenerator.ts";
import { getStops } from "../services/stops/stops.service.ts";

// deno-lint-ignore no-explicit-any
export async function getStopByLinea(ctx: any, next:any) {
    try {
        const {linea} = ctx.params
        const stops = await getStops(linea)
        ctx.response.body = stops;  
    } catch (error) {
        const generic = createError(ErrorTypes.InternalError, error)
        ctx.response.status = error.status || generic.status 
        ctx.response.body = error.body || generic.body
        next()
    }
    
    
}