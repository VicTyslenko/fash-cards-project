import { pool } from "../db/pool.js";

export const getCards = async (req, res) => {
  const limit = Number(req.query.limit) || 12;

  try {
    const { rows } = await pool.query(
      `SELECT * FROM flashcards
       ORDER BY id ASC
       LIMIT $1`,
      [limit + 1],
    );

    const hasMore = rows.length > limit;

    const cards = hasMore ? rows.slice(0, limit) : rows;
    res.json({ cards, hasMore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
};

export const updateCard = async (req, res) => {
  const { id: cardId } = req.params;

  const MAX_KNOWN = 5;

  try {
    const { rows } = await pool.query(
      `UPDATE flashcards
       SET known_count = LEAST(COALESCE(known_count, 0) + 1, $2)
       WHERE id = $1
       RETURNING *
      `,
      [cardId, MAX_KNOWN],
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const resetCard = async (req, res) => {
  const { id: cardId } = req.params;

  try {
    const { rows } = await pool.query(
      `UPDATE flashcards
    SET known_count = 0
    WHERE id = $1
    RETURNING *
    `,
      [cardId],
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// export const filterMastered
