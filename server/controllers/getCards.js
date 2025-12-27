import { pool } from "../db/pool.js";

export const getCards = async (req, res) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query("SELECT * FROM flashcards");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};
