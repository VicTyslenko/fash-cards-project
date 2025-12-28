import { useGetCardsQuery } from "../../../../../../api/apiSlice";
import { useSearchParams } from "react-router";
import { ALL_CATEGORY } from "./utils";

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchParams((searchParams) => {
      const newValue = e.target.value;
      searchParams.set("category", newValue);
      return searchParams;
    });
  const currentCategory = searchParams.get("category") || "All Categories";

  const { data: cardsData, error, isLoading } = useGetCardsQuery();

  const categories = [ALL_CATEGORY, ...new Set(cardsData?.map((c) => c.category) ?? [])];

  return { cardsData, error, isLoading, categories, handleSetCategory, currentCategory };
};
