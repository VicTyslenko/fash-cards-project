import { pool } from "./pool.js";
import { flashcards } from "../mock_data/flashcards.js";
import { randomUUID } from "crypto";

async function seed() {
  try {
    console.log("Seeding data base...");

    for (const card of flashcards) {
      const result = await pool.query(
        `
       INSERT INTO flashcards (id, question, answer, category, known_count)
       VALUES ($1, $2, $3, $4, $5)
        `,
        [randomUUID(), card.question, card.answer, card.category, card.knownCount],
      );
    }
  } catch (error) {
    process.exitCode = 1; // any non-zero it is failure, 0 => success
  } finally {
    await pool.end();
  }
}

seed();
