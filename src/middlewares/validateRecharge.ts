import rechargeSchema from "../schemas/rechargeSchema";
import { Request, Response, NextFunction } from "express";
import "express-async-errors"

export async function validateAmountRecharge(req: Request, res: Response, next: NextFunction) {


    try {

        const { amount } = req.body;

        const validation = rechargeSchema.validate(amount)

        if(validation.error) {
            return res.sendStatus(420)
        }

        next();


    } catch (error) {

        res.sendStatus(500)

    }


}