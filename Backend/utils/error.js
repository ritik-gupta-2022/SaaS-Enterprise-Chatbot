// for generating error forcefully , for eg if user didn't provide all fields we can generate error from here
export const errorHandler = (statusCode, message)=>{
    const error = new Error(message);
    error.statusCode = statusCode;
    error.message=message;
    return error;
}