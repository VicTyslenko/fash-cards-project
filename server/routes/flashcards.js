import express from "express";
import { getCards, updateCard } from "../controllers/cards.js";

const router = express.Router();

// get all cards
router.get("/cards", getCards);

// update card
router.patch("/card/:id", updateCard);

export default router;
