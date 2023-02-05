import { ServiceError } from "../interfaces/Error.ts";

export enum ErrorTypes {
  NotFound = "notFound",
  InternalError = "internalError"
}
  
const errorResponses = {
    [ErrorTypes.NotFound]: {
        status: 404,
        body: {
            message: "Not Found",
            apiResponse: {}
        }
    },
    [ErrorTypes.InternalError]: {
        status: 500,
        body: {
            message: "Internal Server Error",
            apiResponse: {}
        }
    }
};


// deno-lint-ignore no-explicit-any
export function createError(code: ErrorTypes, data: any): ServiceError {
    const error = errorResponses[code]
    error.body.apiResponse = data
    return error
}