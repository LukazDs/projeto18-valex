import { Router } from "express";
import { createCard } from "../controllers/cardController";
import { validateApiKey, validateTypeCard } from "../middlewares/validateCard";

const router = Router();

router.get("/teste", validateApiKey, validateTypeCard, createCard)

export default router;
