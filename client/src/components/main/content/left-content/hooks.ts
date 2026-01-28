import { useSearchParams } from "react-router";

import type { Card } from "../../../../slices/cards/models";

export const useLeftContent = ({ data: filteredData }: { data: Card[] }) => {
  const [searchParams] = useSearchParams();

  const cardId = searchParams.get("cardId");
  const currentCard = filteredData.find((card) => card.id === cardId);
  const currentIndex = currentCard ? filteredData.findIndex((el) => el.id === currentCard.id) + 1 : 1;

  // Get total cards number
  const totalFilteredCards = filteredData.length;

  return { currentCard, totalFilteredCards, currentIndex };
};
