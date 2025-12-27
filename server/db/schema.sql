-- flash cards main table(if using migrations)

CREATE TABLE IF NOT EXISTS flashcards (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  known_count INTEGER DEFAULT 0
)