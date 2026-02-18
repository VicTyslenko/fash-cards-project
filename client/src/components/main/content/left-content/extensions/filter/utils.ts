import type { Card } from "../../../../../../slices/cards/models";

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
