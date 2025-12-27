import express from "express";
import { getCards } from "../controllers/getCards.js";

const router = express.Router();

// get all cards

router.get("/cards", getCards);

export default router;
