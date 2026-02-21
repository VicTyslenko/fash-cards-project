import { useSearchParams } from "react-router";

import type { DataProps } from "../models";
import { Filter } from "./extensions/filter";
import { PaginationSection } from "./extensions/pagination-section";
import { QuestionsContent } from "./extensions/questions-content";

import * as S from "./styles";

export const LeftContent = ({ data, filteredData }: DataProps) => {
  const [searchParams] = useSearchParams();
  const cardId = searchParams.get("cardId");
  const currentCard = filteredData?.find((card) => card.id === cardId);

  const currentIndex = currentCard ? filteredData.findIndex((el) => el.id === currentCard.id) + 1 : 1;

  // Get total cards number
  const totalFilteredCards = filteredData.length;

  return (
    <S.Wrapper>
      <Filter currentCard={currentCard} data={data} />
      <QuestionsContent currentCard={currentCard} data={filteredData} />
      <PaginationSection total={totalFilteredCards} currentIndex={currentIndex} currentCard={currentCard} data={filteredData} />
    </S.Wrapper>
  );
};
