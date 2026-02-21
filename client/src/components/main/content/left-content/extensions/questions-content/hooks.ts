import { useSearchParams } from "react-router";

import { useStoreDispatch, useStoreSelector } from "../../../../../../hooks";

import {
  useResetCardMutation,
  useUpdateCardMutation,
} from "../../../../../../api/apiSlice";
import { MAX_KNOWN } from "../../../../../../shared/utils";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { toggleCard } from "../../../../../../slices/cards/cardsSlice";
import type { Card } from "../../../../../../slices/cards/models";

type Props = {
  currentCard?: Card;
  data?: Card[];
};

export const useQuestionsContent = ({ currentCard, data }: Props) => {
  const dispatch = useStoreDispatch();
  const [_, setSearchParams] = useSearchParams();
  const isQuestion = useStoreSelector((state) => state.cards.isQuestion);

  // toggle card question to answer
  const handleToggleCard = () => dispatch(toggleCard());

  const [updateCard] = useUpdateCardMutation();
  const [resetCard] = useResetCardMutation();

  // update card progress count function
  const handleCardUpdate = async () => {
    if (!currentCard) return;
    try {
      await updateCard({ id: currentCard?.id }).unwrap();

      setSearchParams((prev) => {
        const currentIndex = Number(prev.get("card")) || 1;

        if (data && currentIndex >= data.length) {
          prev.set("card", "1");
        } else {
          prev.set("card", String(currentIndex + 1));
        }
        return prev;
      });
      dispatch(setQuestion());
    } catch (error) {
      console.log(error);
    }
  };

  // reset card progress function
  const handleResetCard = async () => {
    if (!currentCard) return;
    try {
      await resetCard({ id: currentCard.id }).unwrap();
      dispatch(setQuestion());
    } catch (error) {
      console.log(error);
    }
  };

  const progressCount = currentCard?.known_count ?? 0;

  const isMastered = progressCount >= MAX_KNOWN;
  return {
    handleCardUpdate,
    progressCount,
    isMastered,
    handleResetCard,
    handleToggleCard,
    isQuestion,
  };
};
