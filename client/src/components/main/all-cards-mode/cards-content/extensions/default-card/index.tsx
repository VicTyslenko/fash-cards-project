import { DefaultTypography } from "../../../../../../shared/default-typography";
import { CategoryInfo } from "../../../../content/left-content/extensions/questions-content/styles";

import * as S from "./styles";
type CardProps = {
  question: string;
  answer: string;
  category: string;
};

export const DefaultCard = ({ question, answer, category }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.HeaderSection>
        <DefaultTypography as="h1">{question}</DefaultTypography>
      </S.HeaderSection>
      <S.AnswerSection>
        <DefaultTypography className="answer-header">Answer:</DefaultTypography>
        <DefaultTypography className="answer">{answer}</DefaultTypography>
      </S.AnswerSection>

      <S.BottomSection>
        <CategoryInfo>{category}</CategoryInfo>
      </S.BottomSection>
    </S.CardWrapper>
  );
};
