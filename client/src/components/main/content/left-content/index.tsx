import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";

import * as S from "./styles";

export const LeftContent = () => {
  const { isQuestion, setIsQuestion, currentIndex, filteredData, categoryInfo } = useLeftContent();

  return (
    <S.Wrapper>
      <Filter setIsQuestion={setIsQuestion} />
      <QuestionsContent
        categoryInfo={categoryInfo}
        filteredData={filteredData}
        currentIndex={currentIndex}
        isQuestion={isQuestion}
        setIsQuestion={setIsQuestion}
      />
      <PaginationSection currentIndex={currentIndex} filteredData={filteredData} />
    </S.Wrapper>
  );
};
