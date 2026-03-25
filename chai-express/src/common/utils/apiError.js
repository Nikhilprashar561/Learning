
class ApiError extends Error {
    constructor(statusCode, message){
        super(message),
        this.statusCode = statusCode
        this.isOperational = true // A Flag you can send after some error and whatever
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest(message = "Bad Request"){
        return new ApiError(400, message)
    }
}

export { ApiError }
