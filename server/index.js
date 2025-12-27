import express from "express";
import cors from "cors";

import flashCardsRouter from "./routes/flashcards.js";

const PORT = 3000;
const app = express();
app.use(cors());

// middleware to parse JSON
app.use(express.json());

app.use("/api", flashCardsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
