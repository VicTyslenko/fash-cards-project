import { useSearchParams } from "react-router";
import { ALL_CATEGORY } from "./extensions/filter/utils";
import { useGetCardsQuery } from "../../../../api/apiSlice";

export const useLeftContent = () => {
  const [searchParams] = useSearchParams();
  const currentIndex: number = Number(searchParams.get("card")) || 1;
  const isMastered: boolean = searchParams.get("mastered") === "true";

  const categoryInfo = searchParams.get("category") ?? ALL_CATEGORY;
  const { data: cardsData } = useGetCardsQuery();

  const filteredData =
    cardsData?.filter((el) => (categoryInfo === ALL_CATEGORY || el.category === categoryInfo) && (!isMastered || el.known_count !== 5)) || [];

  const currentCard = filteredData?.[currentIndex - 1];

  const totalFilteredCards = filteredData.length;

  return { filteredData, categoryInfo, currentCard, totalFilteredCards, cardsData };
};
