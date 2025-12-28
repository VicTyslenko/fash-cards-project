import { useState } from "react";
import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";

import * as S from "./styles";

export const LeftContent = () => {
  const [isQuestion, setIsQuestion] = useState(true);

  return (
    <S.Wrapper>
      <Filter setIsQuestion={setIsQuestion} />
      <QuestionsContent isQuestion={isQuestion} setIsQuestion={setIsQuestion} />
      <PaginationSection />
    </S.Wrapper>
  );
};
