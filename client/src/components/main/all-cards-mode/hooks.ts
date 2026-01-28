import { useSearchParams } from "react-router";
import { useGetCardsLimitedQuery } from "../../../api/apiSlice";
import { useStoreSelector } from "../../../hooks";
import { filterDataByCategories } from "../../../shared/utils";

export const useAllCardsMode = () => {
  const [searchParams] = useSearchParams();

  const cardsLimit = useStoreSelector((state) => state.cards.cardsLimit);
  const filteredCategories = useStoreSelector((state) => state.cards.selectedCategories);

  const { data } = useGetCardsLimitedQuery(cardsLimit);

  const isMastered: boolean = searchParams.get("mastered") === "true";

  const limitedData = data?.limitedCards ?? [];

  const hasMore = data?.hasMore ?? false;

  const filteredData = filterDataByCategories({ data: limitedData, categories: filteredCategories, isMastered });

  return { limitedData, hasMore, filteredData };
};
