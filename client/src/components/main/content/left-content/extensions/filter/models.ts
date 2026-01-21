import type { Card } from "../../../../../../slices/cards/models";

// Filter.tsx
export type FilterProps = {
  data: Card[];
  className?: string;
};

// useFilter.ts
export type UseFilterArgs = {
  data: Card[];
};
