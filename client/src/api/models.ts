import type { Card } from "../slices/cards/models";

export type GetCardsResponse = {
  cards: Card[];
  hasMore: boolean;
};
