import { Request, Response, NextFunction } from "express";
import "express-async-errors"

export async function validateApiKey(req: Request, res: Response, next: NextFunction) {


    try {

        const { authorization } = req.headers;
        const x_api_key = authorization?.replace('Bearer ', '');

        if(!x_api_key?.length) {

            return res.sendStatus(400);

        }

        res.locals.x_api_key = x_api_key

        next();


    } catch (error) {

        res.sendStatus(500)

    }


}

export async function validateTypeCard(req: Request, res: Response, next: NextFunction) {


    try {

        const { type } = req.body;

        const types = [ "groceries", "restaurant", "transport", "education", "health"]

        const dataCardType =  types.some(v => v === type)

        if(!dataCardType) {

            return res.sendStatus(404);

        }

        next();


    } catch (error) {

        res.sendStatus(500)

    }


}
