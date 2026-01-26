import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";
import type { DataProps } from "../models";

import * as S from "./styles";

export const LeftContent = ({ data, filteredData }: DataProps) => {
  const { currentCard, totalFilteredCards, currentIndex } = useLeftContent({ data });

  return (
    <S.Wrapper>
      <Filter data={data} />
      <QuestionsContent currentCard={currentCard} data={filteredData} />
      <PaginationSection total={totalFilteredCards} currentIndex={currentIndex} currentCard={currentCard} data={filteredData} />
    </S.Wrapper>
  );
};
