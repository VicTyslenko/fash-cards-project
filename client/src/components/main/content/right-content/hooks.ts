import { MAX_KNOWN } from "../../../../shared/utils";
import type { Card } from "../../../../slices/cards/models";
import type { CardQuantityKey } from "./extensions/models";

export const useRightContent = ({ data }: { data: Card[] }) => {
  const totalCards = data.length || 0;

  const masteredCards = data.filter((c) => c.known_count === MAX_KNOWN).length;
  const inProgressCards = data.filter((c) => c.known_count !== MAX_KNOWN).length;
  const notStartedCards = data.filter((c) => c.known_count === 0).length;

  const cardsQuantity: Record<CardQuantityKey, number> = {
    total: totalCards,
    mastered: masteredCards,
    inProgress: inProgressCards,
    notStarted: notStartedCards,
  };

  return { cardsQuantity };
};
