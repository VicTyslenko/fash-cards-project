import { pool } from "./pool.js";
import { flashcards } from "../data/flashcards.js";

async function seed() {
  try {
    console.log("Seeding data base...");

    for (const card of flashcards) {
      await pool.query(
        `
       INSERT INTO flashcards (id, question, answer, category, known_count)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (id) DO NOTHING 
        `,
        [card.id, card.question, card.answer, card.category, card.knownCount]
      );
    }
  } catch (error) {
    console.error("Seeding failed", error);
    process.exitCode = 1; // any non-zero it is failure, 0 => success
  } finally {
    await pool.end();
  }
}

seed();
