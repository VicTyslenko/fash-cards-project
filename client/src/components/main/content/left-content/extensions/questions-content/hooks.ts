import { useSearchParams } from "react-router";
import { useGetCardsQuery } from "../../../../../../api/apiSlice";

export const useQuestionsContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryInfo = searchParams.get("category");
  const { data } = useGetCardsQuery();

  const filteredData = data?.filter((el) => el.category === categoryInfo);


  console.log(filteredData)
  const questions = data?.map((el) => el.question) || [];
  const answers = data?.map((el) => el.answer) || [];

  return { categoryInfo, questions, answers };
};
