class ResponseHandler {
    static success (res, data, message = 'success', statusCode = 200){

        return res.status(statusCode).json({
            status: 'success',
            statusCode: statusCode ,
            message: message,
            data: data

        })
    } 

    static error (res, errorMessage = 'error', statusCode = 500){
        return res.status(statusCode).json({
            status: 'error',
            statusCode: statusCode,
            message: errorMessage,
            data: []
        })
        
    }
}

export default ResponseHandler