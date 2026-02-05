import type { Card } from "../slices/cards/models";

export type GetCardsResponse = {
  limitedCards: Card[];
  hasMore: boolean;
};

export type GetCards = {
  allCards: Card[];
};

export type BodyProps = {
  question: string;
  answer: string;
  category: string;
};

export type DeleteCardResponse = {
  message: string;
  data: Card[];
};
