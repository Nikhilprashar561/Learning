import Joi from "joi";

class baseDto {
    static schema = Joi.object({});

    static val(data){
        const {error, value } = this.schema.validate(data, {
            abortEarly: false,
            stripUnknown: true
        }) 

        if(error){
            const err = error.map((e) => e.message);
            return {err, value: null}
        }
        return {error: null, value }
    }
}

export { baseDto }
