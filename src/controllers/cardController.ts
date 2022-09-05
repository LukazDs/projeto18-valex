import { Request, Response } from "express";
import { insert } from "../repositories/cardRepository";
import * as createdCardService from "../services/createdCardService"
import * as activedCardService from "../services/activedCardService"

export async function createCard(req: Request, res: Response) {

    const { x_api_key } = res.locals
    const employeeId = Number(req.params)
    const { type, password, isVirtual } = req.body

    await createdCardService.verifyKeyCard(x_api_key)

    const user = await createdCardService.verifyEmployeeId(employeeId)

    await createdCardService.verifyEmployeeIdAndType(type, employeeId)

    const number = await createdCardService.getNumberCard()
    const cardholderName = await createdCardService.getNameCard(user.fullName);
    
    await createdCardService.getCardExperition()

    const securityCode = await createdCardService.getCVC()
    const isBlocked = true

    await insert({
        employeeId,
        number,
        cardholderName,
        securityCode,
        expirationDate: "11/18",
        password,
        isVirtual,
        originalCardId: employeeId,
        isBlocked,
        type
    });

    res.status(201).send("Card Created!");

}

export async function activedCard(req: Request, res: Response) {

    const id = Number(req.params.id)

    const cardInfo = await activedCardService.verifyCardCadastredById(id)

    await activedCardService.verifyCardExpiration(cardInfo.expirationDate)

    res.status(201).send("Card Actived!");

}
