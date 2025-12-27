import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";

import * as S from "./styles";

export const LeftContent = () => {
  return (
    <S.Wrapper>
      <Filter />
      <QuestionsContent />
      <PaginationSection />
    </S.Wrapper>
  );
};
