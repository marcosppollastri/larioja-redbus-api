
const RUTA_LINEA = 'http://www.larioja.miredbus.com.ar/rest/rutaLinea/'

export async function getStops(linea: string){
    try {
        const res = await fetch(`${RUTA_LINEA}${linea}`)
        return res.json()
    } catch (error) {
        throw error
        
    }
}