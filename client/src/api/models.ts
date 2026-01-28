import type { Card } from "../slices/cards/models";

export type GetCardsResponse = {
  limitedCards: Card[];
  hasMore: boolean;
};

export type GetCards = {
  allCards: Card[];
};
