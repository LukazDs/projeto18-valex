import { Router } from "express";
import { activedCard, createCard } from "../controllers/cardController";
import { validateApiKey, validateTypeCard } from "../middlewares/validateCard";

const router = Router();

router.post("/card/:id", validateApiKey, validateTypeCard, createCard)
router.post("/active-card/:id", activedCard)

export default router;
