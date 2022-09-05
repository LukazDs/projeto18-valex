import dayjs from "dayjs";
import { findById } from "../repositories/cardRepository";

export async function verifyCardCadastredById(id: number) {

    const validateCard = await findById(id);

    if (!validateCard) {
        throw { code: "NotFound", message: "Card not found!" }
    }

    return validateCard

}

export async function verifyCardExpiration(expirationDate: string) {

    const dateNow = dayjs()
    const date = dayjs("01/" + expirationDate)

    if (date.isBefore(dateNow)) {

        throw { code: "BadRequest", message: "Experition Date invalid!" }

    }

}
