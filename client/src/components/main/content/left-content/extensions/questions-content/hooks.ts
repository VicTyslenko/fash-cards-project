import { useSearchParams } from "react-router";
import { useGetCardsQuery } from "../../../../../../api/apiSlice";
import { ALL_CATEGORY } from "../filter/utils";

export const useQuestionsContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryInfo = searchParams.get("category") ?? ALL_CATEGORY;
  
  const { data } = useGetCardsQuery();

  const filteredData = data?.filter((el) => categoryInfo === ALL_CATEGORY || el.category === categoryInfo);

  const questions = filteredData?.map((el) => el.question) || [];
  const answers = filteredData?.map((el) => el.answer) || [];

  return { categoryInfo, questions, answers };
};
