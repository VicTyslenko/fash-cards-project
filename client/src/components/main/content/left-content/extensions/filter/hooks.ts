import { useSearchParams } from "react-router";
import { useStoreDispatch } from "../../../../../../hooks";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { apiSlice } from "../../../../../../api/apiSlice";
import { getCategoriesQuantity } from "./utils";
import type { FilterProps } from "./models";

export const useFilter = ({ data }: FilterProps) => {
  const dispatch = useStoreDispatch();
  const handleSetQuestion = () => dispatch(setQuestion());

  const [searchParams, setSearchParams] = useSearchParams();
  const masteredHidden = searchParams.get("mastered") === "true";

  const handleHideMastered = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      const isHidden = next.get("mastered") === "true";
      next.set("mastered", String(!isHidden));

      return next;
    });
  };

  const handleShuffleCards = () => {
    const filteredIds = new Set(data.map((c) => c.id));
    let newFirstId: string | undefined;

    dispatch(
      apiSlice.util.updateQueryData("getAllCards", undefined, (draft) => {
        draft.allCards = [...draft.allCards].sort(() => Math.random() - 0.5);
        newFirstId = draft.allCards.find((c) => filteredIds.has(c.id))?.id;
      }),
    );

    if (newFirstId) {
      setSearchParams((sp) => {
        sp.set("cardId", newFirstId!);
        return sp;
      });
    }
  };

  const categories = getCategoriesQuantity({ data });

  return {
    handleSetQuestion,
    handleHideMastered,
    masteredHidden,
    handleShuffleCards,
    categories,
  };
};
