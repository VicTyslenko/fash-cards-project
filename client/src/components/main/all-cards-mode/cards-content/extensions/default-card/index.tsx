import { useState } from "react";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { CategoryInfo } from "../../../../content/left-content/extensions/questions-content/styles";
import MenuIcon from "@/assets/icons/icon-menu.svg";
import type { DefaultCardProps } from "./models";
import { ProgressBar } from "../../../../../../shared/components/progress-bar";
import { MasteredInfo } from "../../../../../../shared/mastered-info";
import { MAX_KNOWN } from "../../../../../../shared/utils";
import { CardPopup } from "../card-popup";

import * as S from "./styles";

export const DefaultCard = ({ card }: DefaultCardProps) => {
  const { question, answer, category, known_count } = card;
  const [isActive, setIsActive] = useState(false);

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

        <S.MasterSection $isMastered={known_count >= MAX_KNOWN}>
          {known_count >= MAX_KNOWN ? <MasteredInfo /> : <ProgressBar progressValue={known_count} />}
        </S.MasterSection>

        <S.MenuButton
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
        >
          <img src={MenuIcon} alt="menu-icon" />
          {isActive && <CardPopup id={card.id} onClose={() => setIsActive(false)} />}
        </S.MenuButton>
      </S.BottomSection>
    </S.CardWrapper>
  );
};
