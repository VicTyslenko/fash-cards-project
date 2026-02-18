import { useSearchParams } from "react-router";
import { useStoreDispatch } from "../../../../../../hooks";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { apiSlice } from "../../../../../../api/apiSlice";
import { getCategoriesQuantity } from "./utils";
import type { UseFilterArgs } from "./models";

export const useFilter = ({ data }: UseFilterArgs) => {
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
    dispatch(
      apiSlice.util.updateQueryData("getAllCards", undefined, (draft) => {
        draft.allCards = [...draft.allCards].sort(() => Math.random() - 0.5);
      })
    );
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
