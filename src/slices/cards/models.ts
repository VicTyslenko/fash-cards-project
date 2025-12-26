type Card = {
  id: string;
  question: string;
  answer: string;
  known_counter: number;
};

type CardProps = {
  cards: Card[] | null;
};

export const initialState: CardProps = {
  cards: null,
};
