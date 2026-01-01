import type { Card } from "../../../../../../slices/cards/models";

export const ALL_CATEGORY = "All Categories";

export const shuffleCards = ({ arr }: { arr: Card[] }) => {
  let i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
};
