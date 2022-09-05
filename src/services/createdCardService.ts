import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import Cryptr from "cryptr"
import { findByTypeAndEmployeeId, TransactionTypes } from "../repositories/cardRepository";
import { findByApiKey } from "../repositories/companyRepository";
import { findById } from "../repositories/employeeRepository";

export async function verifyKeyCard(key: string) {

    const validateKey = await findByApiKey(key);

    if (!validateKey.length) {
        throw { code: "NotFound", message: "Key not found!" }
    }

}

export async function verifyEmployeeId(id: number) {

    const validateUser = await findById(id);

    if (!validateUser) {
        throw { code: "NotFound", message: "Employee not found!" }
    }

    return validateUser;

}

export async function verifyEmployeeIdAndType(type: TransactionTypes, id: number) {

    const validateUser = await findByTypeAndEmployeeId(type, id);

    if (validateUser) {
        throw { code: "Conflict", message: "Employee cannot have two same types of card!" }
    }

}

export async function getNumberCard() {

    const randomCardNumber = faker.finance.creditCardNumber();
    return randomCardNumber;

}

export async function getNameCard(fullName: string) {

    let cardName = "";
    const partsName = fullName.split(" ")

    for (let i = 0; i < partsName.length; i++) {

        if (i === 0) {
            cardName += partsName[i].toUpperCase()
            continue
        }

        if (i === partsName.length - 1) {
            cardName += " " + partsName[i].toUpperCase()
            continue
        }

        if (partsName[i].length >= 3) {
            cardName += " " + partsName[i][0].toUpperCase()
        }

    }

    return cardName;

}

export async function getCardExperition() {

    const dateNow = dayjs().add(5, "year").format('MM/YY')
    return dateNow

}

export async function getCVC() {

    const cvc = faker.finance.creditCardCVV()

    const cryptr = new Cryptr('valexKey');

    const encryptedCvc = cryptr.encrypt(cvc);

    return encryptedCvc;

}
