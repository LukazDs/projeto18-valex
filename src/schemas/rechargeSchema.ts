import joi from "joi";

const rechargeSchema = joi.object({
    amount: joi.number().min(0)
})

export default rechargeSchema;