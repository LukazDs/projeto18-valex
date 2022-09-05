import { Request, Response } from "express";
import { insert } from "../repositories/cardRepository";
import * as cardService from "../services/createdCardService"

export async function makeRecharge(req: Request, res: Response) {

    res.status(201).send("Recharge Created!");

}