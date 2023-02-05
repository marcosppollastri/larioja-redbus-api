import { StopsApiResponse } from "../../interfaces/Stop.ts"

const RUTA_LINEA = 'http://www.larioja.miredbus.com.ar/rest/rutaLinea/'

export async function getStops(linea: string): Promise<StopsApiResponse>{
    try {
        // deno-lint-ignore no-explicit-any
        const res: any = await fetch(`${RUTA_LINEA}${linea}`)
        const data: StopsApiResponse = await <StopsApiResponse> res.json()
        if(!data.nodos.length){
            const e = new Error()
            Object.assign(e, {
                status: 404,
                body: {
                    message: 'Línea invalida o sin paradas',
                    apiResponse: data
                }
            })
            throw e
        }
        return data
    } catch (error) {
        throw error
    }
}