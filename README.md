# Flash Cards App

A full-stack flashcard learning app for studying and memorising concepts by category. Create cards with questions and answers, study them in session mode, track progress, and manage your library.

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- Redux Toolkit + Redux Persist
- React Router v7
- Styled Components
- React Hook Form + Zod

**Backend**
- Node.js + Express 5
- PostgreSQL (Supabase)

## Features

- Browse the full flashcard library
- Study mode with a limited card set
- Flip cards to reveal answers
- Track progress with a `known_count` per card
- Create, edit, and delete cards
- Reset card progress
- Organise cards by category
- Persistent Redux state via Redux Persist

## Project Structure

```
flash-cards-project/
├── client/                  # React + TypeScript frontend
│   └── src/
│       ├── components/      # UI components (header, main)
│       ├── slices/          # Redux state slices (cards, modals, popup)
│       ├── api/             # API layer
│       └── shared/          # Shared types and utilities
└── server/                  # Node.js + Express backend
    ├── controllers/         # Route handlers
    ├── routes/              # Express routers
    ├── db/                  # Pool connection, schema, seed
    └── mock_data/           # Sample data
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- A PostgreSQL database (local or [Supabase](https://supabase.com))

### 1. Clone the repository

```bash
git clone https://github.com/VicTyslenko/flash-cards-project.git
cd flash-cards-project
```

### 2. Set up the server

```bash
cd server
pnpm install
cp .env.example .env      # then fill in your DATABASE_URL
pnpm run seed             # optional: seed the DB with sample data
pnpm run dev
```

Server runs on `http://localhost:3000`.

### 3. Set up the client

```bash
cd client
pnpm install
pnpm run dev
```

Client runs on `http://localhost:5173`.

## Environment Variables

Create `server/.env` based on `server/.env.example`:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |

## API Endpoints

Base path: `/api`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/cards/all` | Get all flashcards |
| `GET` | `/cards/limited` | Get a limited card set for study mode |
| `POST` | `/card/create` | Create a new card |
| `PATCH` | `/card/:id` | Update a card (e.g. increment known_count) |
| `POST` | `/card/edit/:id` | Edit card content |
| `PATCH` | `/card/reset/:id` | Reset card progress |
| `DELETE` | `/card/delete/:id` | Delete a card |

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS flashcards (
  id           TEXT PRIMARY KEY,
  question     TEXT NOT NULL,
  answer       TEXT NOT NULL,
  category     TEXT NOT NULL,
  known_count  INTEGER DEFAULT 0
);
```
