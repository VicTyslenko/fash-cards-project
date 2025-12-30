import type { Card } from "../../../../../../slices/cards/models";
import { useUpdateCardMutation, useResetCardMutation } from "../../../../../../api/apiSlice";

export const useQuestionsContent = (currentCard: Card) => {
  const MAX_KNOWN = 5;

  const [updateCard] = useUpdateCardMutation();
  const [resetCard] = useResetCardMutation();

  // update card progress count function
  const handleCardUpdate = async () => {
    try {
      await updateCard({ id: currentCard.id }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  // reset card progress function
  const handleResetCard = async () => {
    if (currentCard.known_count === 0) return;

    await resetCard({ id: currentCard.id }).unwrap();
  };

  const progressCount = currentCard?.known_count ?? 0;

  const isMastered = progressCount >= MAX_KNOWN;

  return { handleCardUpdate, progressCount, isMastered, handleResetCard };
};
