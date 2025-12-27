import { useGetCardsQuery } from "../../../../../../api/apiSlice";

export const useFilter = () => {
  const { data: cardsData, error, isLoading } = useGetCardsQuery();

  const categories = [...new Set(cardsData?.map((c) => c.category) ?? [])];

  console.log(categories);

  return { cardsData, error, isLoading, categories };
};
