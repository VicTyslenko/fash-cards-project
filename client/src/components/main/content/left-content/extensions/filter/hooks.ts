import { useGetCardsQuery } from "../../../../../../api/apiSlice";
import { useSearchParams } from "react-router";
import { ALL_CATEGORY } from "./utils";

export const useFilter = () => {
  const { data: cardsData } = useGetCardsQuery();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((searchParams) => {
      const newValue = e.target.value;
      searchParams.set("category", newValue);
      searchParams.set("card", "1");
      return searchParams;
    });
  };

  const currentCategory = searchParams.get("category") || "All Categories";

  const categories = [ALL_CATEGORY, ...new Set(cardsData?.map((c) => c.category) ?? [])];

  return { categories, handleSetCategory, currentCategory };
};
