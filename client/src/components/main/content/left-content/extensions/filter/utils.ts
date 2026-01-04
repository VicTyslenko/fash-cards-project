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

export const getCategoriesQuantity = ({ data }: { data: Card[] }) => {
  const quantities = data.reduce<Record<string, number>>((acc, obj) => {
    const category = obj.category;

    acc[category] = (acc[category] ?? 0) + 1;

    return acc;
  }, {});

  return Object.entries(quantities).map(([category, quantity]) => ({
    category,
    quantity,
  }));
};
