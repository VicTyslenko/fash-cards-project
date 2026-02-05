import express from "express";
import { getCardsLimited, getAllCards, updateCard, resetCard, createCard, deleteCard, editCard } from "../controllers/cards.js";

const router = express.Router();

// get all cards
router.get("/cards/all", getAllCards);

router.get("/cards/limited", getCardsLimited);

// update card
router.patch("/card/:id", updateCard);

//create a new card
router.post("/card/create", createCard);

// reset card progress
router.patch("/card/reset/:id", resetCard);

router.post("/card/edit/:id", editCard);

router.delete("/card/delete/:id", deleteCard);
export default router;
