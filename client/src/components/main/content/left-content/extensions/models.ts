import type { Card } from "../../../../../slices/cards/models";

export type QuestionProps = {
  currentCard: Card;
  categoryInfo: string;
  totalCards: number;
};
