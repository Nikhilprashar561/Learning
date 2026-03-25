import { ApiError } from "../utils/apiError.js";


const validation = (classDto) => {
    return (req, res, next) => {
        const{errors, value } = classDto.validate(req.body);

        if(errors){
            throw ApiError.badRequest(errors.join(": "))
        }
        req.body = value;
        next()
    }
}