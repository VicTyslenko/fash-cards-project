import { useEffect } from "react";
import { ModeParams } from "./models";
import { useSearchParams } from "react-router";
import { useStoreSelector } from "../../hooks";
import { useGetCardsQuery } from "../../api/apiSlice";
export const useDefaultParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") as ModeParams;

  useEffect(() => {
    setSearchParams((sp) => {
      if (!sp.get("mode")) sp.set("mode", ModeParams.STUDY);
      return sp;
    });
  }, [setSearchParams]);

  return { mode };
};

export const useGetFilteredData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMastered: boolean = searchParams.get("mastered") === "true";
  const filteredCategories = useStoreSelector((state) => state.cards.selectedCategories);

  const { data } = useGetCardsQuery();
  const cards = data?.cards ?? [];

  // Filter data by filtered categories from filter dropdown and hide/show mastered cards
  const filteredData = cards?.filter((el) => {
    const categoryMatch = filteredCategories.length === 0 || filteredCategories.includes(el.category);

    const masteredMatch = !isMastered || el.known_count !== 5;

    return categoryMatch && masteredMatch;
  });
  const cardId = searchParams.get("cardId");
  const currentCard = filteredData.find((c) => c.id === cardId);

  // Set card id to url param
  useEffect(() => {
    if (!filteredData.length) return;

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

  return { filteredData, cards };
};
