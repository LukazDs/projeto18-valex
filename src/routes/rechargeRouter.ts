import { Router } from "express";
import { createCard } from "../controllers/cardController";
import { makeRecharge } from "../controllers/rechargeController";
import { validateApiKey, validateTypeCard } from "../middlewares/validateCard";
import { validateAmountRecharge } from "../middlewares/validateRecharge";

const router = Router();

router.get("/recharge", validateAmountRecharge, makeRecharge)

export default router;