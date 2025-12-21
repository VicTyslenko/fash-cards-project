import { NavBar } from "./extensions/nav-bar";
import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";

import * as S from "./styles";

export const LeftContent = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <QuestionsContent />
      <PaginationSection />
    </S.Wrapper>
  );
};
