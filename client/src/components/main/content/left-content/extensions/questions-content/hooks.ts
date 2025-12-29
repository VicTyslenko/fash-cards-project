import { useState, useEffect } from "react";
import type { Card } from "../../../../../../slices/cards/models";
import { useUpdateCardMutation } from "../../../../../../api/apiSlice";

export const useQuestionsContent = (currentCard?: Card) => {
  const MAX_KNOWN = 5;

  const [updatedProgress, setUpdatedProgress] = useState<number | null>(null);

  const [updateCard, { data: updatedCardData, isLoading }] = useUpdateCardMutation();

  const handleCardUpdate = async () => {
    if (!currentCard) return;
    try {
      const updated = await updateCard({ id: currentCard.id }).unwrap();

      setUpdatedProgress(updated.known_count);
    } catch (error) {
      console.log(error);
    }
  };
  const progressCount = updatedProgress ?? currentCard?.known_count ?? 0;
  const isMastered = progressCount >= MAX_KNOWN;

  useEffect(() => {
    // setUpdatedProgress(null);

    console.log(progressCount, "known_count:", currentCard?.known_count);
  }, [currentCard?.id, progressCount, currentCard?.known_count]);

  return { handleCardUpdate, updatedProgress, progressCount, isMastered };
};
