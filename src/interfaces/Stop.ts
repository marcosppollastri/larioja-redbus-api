export interface StopsApiResponse {
    error: number;
    nodos: Nodo[];
  }
  
  export interface Nodo {
    latitud: number;
    longitud: number;
    parada: boolean;
    codigoParada?: string;
    descripcionParada?: string;
  }