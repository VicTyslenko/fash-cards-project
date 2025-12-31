import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { useStoreDispatch } from "../../../../../../hooks";
import { useSearchParams } from "react-router";
import type { PaginationProps } from "./models";

export const usePagination = ({ total }: PaginationProps) => {
  const dispatch = useStoreDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentIndex: number = Number(searchParams.get("card")) || 1;

  const handlePreviousCard = () => {
    if (currentIndex <= 1) return;

    setSearchParams((searchParams) => {
      searchParams.set("card", String(currentIndex - 1));
      return searchParams;
    });
  };

  const handleNextCard = () => {
    if (currentIndex >= total) return;

    setSearchParams((searchParams) => {
      searchParams.set("card", String(currentIndex + 1));
      return searchParams;
    });
    dispatch(setQuestion());
  };

  return { currentIndex, handleNextCard, handlePreviousCard };
};
