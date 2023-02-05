import { createError, ErrorTypes } from "../../handlers/errorGenerator.ts";
import { StopsApiResponse } from "../../interfaces/Stop.ts"

const RUTA_LINEA = 'http://www.larioja.miredbus.com.ar/rest/rutaLinea/'

export async function getStops(linea: string): Promise<StopsApiResponse>{
    // deno-lint-ignore no-explicit-any
    const res: any = await fetch(`${RUTA_LINEA}${linea}`)
    const data: StopsApiResponse = await <StopsApiResponse>res.json()
    if(!data.nodos.length){
        throw createError(ErrorTypes.NotFound, data)
    }
    return data

}

