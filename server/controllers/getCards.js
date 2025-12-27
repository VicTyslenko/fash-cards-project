import { pool } from "../db/pool.js";

export const getCards = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM flashcards");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
};
