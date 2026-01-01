import { useSearchParams } from "react-router";
import { useStoreDispatch } from "../../../../../../hooks";
import { setQuestion } from "../../../../../../slices/cards/cardsSlice";
import { ALL_CATEGORY } from "./utils";
import { useMemo } from "react";
import type { UseFilterArgs } from "./models";

export const useFilter = ({ data }: UseFilterArgs) => {
  const dispatch = useStoreDispatch();
  const handleSetQuestion = () => dispatch(setQuestion());

  const [searchParams, setSearchParams] = useSearchParams();

  const masteredHidden = searchParams.get("mastered") === "true";

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((searchParams) => {
      const newValue = e.target.value;

      searchParams.set("category", newValue);
      searchParams.set("card", "1");
      return searchParams;
    });
  };

  const currentCategory = searchParams.get("category") || "All Categories";

  const categories = useMemo(() => {
    return [ALL_CATEGORY, ...new Set(data?.map((c) => c.category) ?? [])];
  }, [data]);

  const handleHideMastered = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      const isHidden = next.get("mastered") === "true";
      next.set("mastered", String(!isHidden));

      return next;
    });
  };

  return { categories, handleSetCategory, currentCategory, handleSetQuestion, handleHideMastered, masteredHidden };
};
