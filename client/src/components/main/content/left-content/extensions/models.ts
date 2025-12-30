import type { Card } from "../../../../../slices/cards/models";

export type QuestionProps = {
  isQuestion?: boolean;
  setIsQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  currentCard: Card;
  categoryInfo: string;
};
