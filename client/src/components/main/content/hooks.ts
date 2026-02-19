import { useSearchParams } from "react-router";
import { useStoreSelector } from "../../../hooks";
import { useGetAllCardsQuery } from "../../../api/apiSlice";
import { filterDataByCategories } from "../../../shared/utils";
import { useEffect } from "react";
import { ModeParams } from "../models";

export const useGetFilteredData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMastered: boolean = searchParams.get("mastered") === "true";
  const mode = searchParams.get("mode") || ModeParams.All;

  const selectedCategories = useStoreSelector((state) => state.cards.selectedCategories);
  const selectedStudyCategories = useStoreSelector((state) => state.cards.selectedStudyCategories);

  const { data } = useGetAllCardsQuery();

  const allCards = data?.allCards ?? [];

  const categories = mode === ModeParams.STUDY ? selectedStudyCategories : selectedCategories;

  const filteredData = filterDataByCategories({
    isMastered,
    data: allCards,
    categories,
  });

  const cardId = searchParams.get("cardId");
  const currentCard = filteredData?.find((c) => c.id === cardId);

  // Set card id to url param
  useEffect(() => {
    if (!filteredData?.length) return;

    if (!currentCard) {
      setSearchParams(
        (searchParams) => {
          searchParams.set("cardId", filteredData[0].id);
          return searchParams;
        },
        { replace: true },
      );
    }
  }, [filteredData, currentCard, setSearchParams]);

  return { filteredData, allCards };
};
