import type { Card } from "../../../../../../slices/cards/models";
import { useUpdateCardMutation, useResetCardMutation } from "../../../../../../api/apiSlice";
import { useStoreSelector, useStoreDispatch } from "../../../../../../hooks";
import { useSearchParams } from "react-router";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { toggleCard } from "../../../../../../slices/cards/cardsSlice";
import { MAX_KNOWN } from "./utils";

type Props = {
  currentCard: Card;
  totalCards: number;
};

export const useQuestionsContent = ({ currentCard, totalCards }: Props) => {
  const dispatch = useStoreDispatch();
  const [_, setSearchParams] = useSearchParams();

  const isQuestion = useStoreSelector((state) => state.cards.isQuestion);

  // toggle card question to answer
  const handleToggleCard = () => dispatch(toggleCard());

  const [updateCard] = useUpdateCardMutation();
  const [resetCard] = useResetCardMutation();

  // update card progress count function
  const handleCardUpdate = async () => {
    try {
      await updateCard({ id: currentCard.id }).unwrap();

      setSearchParams((prev) => {
        const currentIndex = Number(prev.get("card")) || 1;

        if (currentIndex >= totalCards) {
          prev.set("category", "All Categories");
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
    try {
      await resetCard({ id: currentCard.id }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const progressCount = currentCard?.known_count ?? 0;

  const isMastered = progressCount >= MAX_KNOWN;
  return { handleCardUpdate, progressCount, isMastered, handleResetCard, handleToggleCard, isQuestion };
};
