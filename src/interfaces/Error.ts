export interface ServiceError {
    status: number;
    body: Body;
  }
  
interface Body {
message: string;
apiResponse: Record<string | number | symbol, never>;
}
