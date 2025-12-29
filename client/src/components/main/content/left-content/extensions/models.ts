import type { Card } from "../../../../../slices/cards/models";

export type QuestionProps = {
  isQuestion?: boolean;
  setIsQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  filteredData: Card[];
  currentIndex: number;
  categoryInfo: string;
};
