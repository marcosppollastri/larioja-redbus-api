export enum ErrorTypes {
    NotFound = "notFound"
  }
  
  const errorResponses = {
    [ErrorTypes.NotFound]: {
      status: 404,
      body: {
        message: "Not Found",
        apiResponse: {}
      }
    }
  };


// deno-lint-ignore no-explicit-any
export function createError(code: ErrorTypes, data: any): Error{
    const e = new Error()
    const error = errorResponses[code]
    error.body.apiResponse = data
    Object.assign(e, error)
    return e
}