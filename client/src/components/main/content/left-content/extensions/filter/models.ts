import type { Card } from "../../../../../../slices/cards/models";

// Filter.tsx
export type FilterProps = {
  data: Card[];
  currentCard?: Card;
};
