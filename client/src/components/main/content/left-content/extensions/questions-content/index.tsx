import type { QuestionProps } from "../models";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import YellowStar from "@/assets/icons/pattern-star-yellow.svg";
import BlueStar from "@/assets/icons/pattern-star-blue.svg";
import IconMastered from "@/assets/icons/icon-mastered.svg";
import PinkStar from "@/assets/icons/pattern-star-pink.svg";
import IconCheck from "@/assets/icons/icon-circle-check.svg";
import IconReset from "@/assets/icons/icon-reset.svg";
import { DefaultButton } from "../../../../../../shared/default-button";
import { MAX_KNOWN } from "./utils";
import { useQuestionsContent } from "./hooks";

import * as S from "./styles";

export const QuestionsContent = ({ currentCard, categoryInfo, totalCards }: QuestionProps) => {
  const { handleCardUpdate, progressCount, isMastered, handleResetCard, handleToggleCard, isQuestion } = useQuestionsContent({
    currentCard,
    totalCards,
  });

  return (
    <S.Wrapper>
      <S.StyledButton onClick={handleToggleCard} $isQuestion={isQuestion}>
        <S.CategoryInfo>{categoryInfo}</S.CategoryInfo>
        {isQuestion ? (
          <S.MiddleBlock>
            <DefaultTypography as="h1" className="title">
              {currentCard?.question ?? ""}
            </DefaultTypography>
            <DefaultTypography className="answer">Click to reveal answer</DefaultTypography>
          </S.MiddleBlock>
        ) : (
          <S.MiddleBlock>
            <DefaultTypography className="answer">Answer:</DefaultTypography>
            <DefaultTypography as="h1" className="title-answer">
              {currentCard.answer ?? ""}
            </DefaultTypography>
          </S.MiddleBlock>
        )}
        {!isMastered ? (
          <S.BarWrapp>
            <S.ProgressBar value={progressCount} max={MAX_KNOWN} />
            <DefaultTypography className="score">{`${progressCount}/${MAX_KNOWN}`}</DefaultTypography>
          </S.BarWrapp>
        ) : (
          <S.CategoryInfo className="mastered">
            <img src={IconMastered} alt="icon mastered" />
            <DefaultTypography>Mastered</DefaultTypography>
            <DefaultTypography>5/5</DefaultTypography>
          </S.CategoryInfo>
        )}

        {isQuestion ? <img src={BlueStar} alt="blue star" className="blue-star" /> : <img src={PinkStar} alt="pink star" className="blue-star" />}

        <img src={YellowStar} alt="yellow star" className="yellow-star" />
      </S.StyledButton>

      <S.ActionsWrapp>
        {!isMastered ? (
          <DefaultButton onClick={handleCardUpdate} className="yellow_btn">
            <img src={IconCheck} alt="check icon" />
            <DefaultTypography>I Know This</DefaultTypography>
          </DefaultButton>
        ) : (
          <DefaultButton className="yellow_btn mastered_btn">
            <img src={IconCheck} alt="check icon" />
            <DefaultTypography>Already Mastered</DefaultTypography>
          </DefaultButton>
        )}

        <DefaultButton onClick={handleResetCard}>
          <img src={IconReset} alt="check icon" />
          <DefaultTypography>Reset Progress</DefaultTypography>
        </DefaultButton>
      </S.ActionsWrapp>
    </S.Wrapper>
  );
};
