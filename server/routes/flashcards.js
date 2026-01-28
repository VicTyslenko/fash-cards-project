import express from "express";
import { getCardsLimited, getAllCards, updateCard, resetCard } from "../controllers/cards.js";

const router = express.Router();

// get all cards
router.get("/cards/all", getAllCards);

router.get("/cards/limited", getCardsLimited);

// update card
router.patch("/card/:id", updateCard);

// reset card progress
router.patch("/card/reset/:id", resetCard);
export default router;
