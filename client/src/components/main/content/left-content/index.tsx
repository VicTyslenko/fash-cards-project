import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";

import * as S from "./styles";

export const LeftContent = () => {
  const { isQuestion, setIsQuestion, currentIndex, filteredData, categoryInfo, currentCard } = useLeftContent();

  return (
    <S.Wrapper>
      <Filter setIsQuestion={setIsQuestion} />
      <QuestionsContent categoryInfo={categoryInfo} isQuestion={isQuestion} setIsQuestion={setIsQuestion} currentCard={currentCard} />
      <PaginationSection currentIndex={currentIndex} filteredData={filteredData} />
    </S.Wrapper>
  );
};
