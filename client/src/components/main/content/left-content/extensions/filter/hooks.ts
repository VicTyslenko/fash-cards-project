import { useSearchParams } from "react-router";
import { useStoreDispatch } from "../../../../../../hooks";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { shuffleCards } from "./utils";
import { getCategoriesQuantity } from "./utils";
import type { UseFilterArgs } from "./models";

export const useFilter = ({ data }: UseFilterArgs) => {
  const dispatch = useStoreDispatch();
  const handleSetQuestion = () => dispatch(setQuestion());

  const [searchParams, setSearchParams] = useSearchParams();
  const masteredHidden = searchParams.get("mastered") === "true";

  const currentCategory = searchParams.get("category");

  const handleHideMastered = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      const isHidden = next.get("mastered") === "true";
      next.set("mastered", String(!isHidden));

      return next;
    });
  };

  const handleShuffleCards = () => shuffleCards({ arr: data });

  const categories = getCategoriesQuantity({ data });
  return {
    // handleSetCategory,
    currentCategory,
    handleSetQuestion,
    handleHideMastered,
    masteredHidden,
    handleShuffleCards,

    categories,
  };
};
