import { DefaultTypography } from "../../../../../../shared/default-typography";
import { CategoryInfo } from "../../../../content/left-content/extensions/questions-content/styles";
import { MAX_KNOWN } from "../../../../content/left-content/extensions/questions-content/utils";
import MenuIcon from "@/assets/icons/icon-menu.svg";
import type { DefaultCardProps } from "./models";
import { ProgressBar } from "../../../../../../shared/components/progress-bar";
import { MasteredInfo } from "../../../../../../shared/mastered-info";
import * as S from "./styles";

export const DefaultCard = ({ question, answer, category, known_count, isMasteredHidden }: DefaultCardProps) => {
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
        <S.InfoSection>
          <CategoryInfo>{category}</CategoryInfo>
        </S.InfoSection>

        <S.MasterSection $isMastered={known_count >= MAX_KNOWN && isMasteredHidden}>
          {known_count >= MAX_KNOWN && isMasteredHidden ? <MasteredInfo /> : <ProgressBar progressValue={known_count} />}
        </S.MasterSection>

        <S.MenuButton>
          <img src={MenuIcon} alt="menu-icon" />
        </S.MenuButton>
      </S.BottomSection>
    </S.CardWrapper>
  );
};
