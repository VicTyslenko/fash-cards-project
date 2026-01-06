import { useSearchParams } from "react-router";
import { useStoreSelector } from "../../../../hooks";
import { useEffect } from "react";
import type { DataProps } from "../models";

export const useLeftContent = ({ data: cardsData }: DataProps) => {
  // Getting array of chosen categories from Redux store
  const filteredCategories = useStoreSelector((state) => state.cards.selectedCategories);

  const [searchParams, setSearchParams] = useSearchParams();
  const isMastered: boolean = searchParams.get("mastered") === "true";

  // Filter data by filtered categories from filter dropdown and hide/show mastered cards
  const filteredData = cardsData.filter((el) => {
    const categoryMatch = filteredCategories.length === 0 || filteredCategories.includes(el.category);

    const masteredMatch = !isMastered || el.known_count !== 5;

    return categoryMatch && masteredMatch;
  });

  const cardId = searchParams.get("cardId");
  const currentCard = filteredData.find((card) => card.id === cardId);
  const currentIndex = currentCard ? filteredData.findIndex((el) => el.id === currentCard.id) + 1 : 1;

  // Get total cards number
  const totalFilteredCards = filteredData.length;

  // Set card id to url param
  useEffect(() => {
    if (!filteredData.length) return;

    if (!currentCard) {
      setSearchParams(
        (searchParams) => {
          searchParams.set("cardId", filteredData[0].id);
          return searchParams;
        },
        { replace: true }
      );
    }
  }, [filteredData, currentCard, setSearchParams]);

  return { filteredData, currentCard, totalFilteredCards, currentIndex };
};
