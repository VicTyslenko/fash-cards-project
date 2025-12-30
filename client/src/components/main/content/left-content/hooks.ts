import { useState } from "react";
import { useSearchParams } from "react-router";
import { ALL_CATEGORY } from "./extensions/filter/utils";
import { useGetCardsQuery } from "../../../../api/apiSlice";

export const useLeftContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isQuestion, setIsQuestion] = useState(true);
  const currentIndex: number = Number(searchParams.get("card")) || 1;

  const categoryInfo = searchParams.get("category") ?? ALL_CATEGORY;
  const { data } = useGetCardsQuery();

  const filteredData = data?.filter((el) => categoryInfo === ALL_CATEGORY || el.category === categoryInfo) || [];

  const questions = filteredData?.map((el) => el.question) || [];
  const answers = filteredData?.map((el) => el.answer) || [];

  const currentCard = filteredData?.[currentIndex - 1];
  return { isQuestion, setIsQuestion, filteredData, categoryInfo, questions, answers, currentIndex, currentCard };
};
