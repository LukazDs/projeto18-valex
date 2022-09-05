import { Request, Response } from "express";
import { insert } from "../repositories/cardRepository";
import * as cardService from "../services/cardService"

export async function createCard(req: Request, res: Response) {

    const { x_api_key } = res.locals
    const { 
        employeeId, 
        type, 
        password,
        isVirtual,
        originalCardId,
        isBlocked } = req.body

    await cardService.verifyKeyCard(x_api_key)

    const user = await cardService.verifyEmployeeId(employeeId)

    await cardService.verifyEmployeeIdAndType(type, employeeId)

    const number = await cardService.getNumberCard()
    const cardholderName = await cardService.getNameCard(user.fullName);
    const expirationDate =  await cardService.getCardExperition()
    const securityCode = await cardService.getCVC()

    await insert({
        employeeId,
        number, 
        cardholderName, 
        securityCode,
        expirationDate,
        password,
        isVirtual,
        originalCardId,
        isBlocked,
        type});

    res.status(201).send("Card Created!");

}
