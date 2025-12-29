export type Card = {
  id: string;
  question: string;
  answer: string;
  category: string;
  known_count: number;
};

export type CardProps = {
  cards: Card[] | null;
};

export const initialState: CardProps = {
  cards: null,
};
