import type { QuestionProps } from "../models";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import YellowStar from "@/assets/icons/pattern-star-yellow.svg";
import BlueStar from "@/assets/icons/pattern-star-blue.svg";
import PinkStar from "@/assets/icons/pattern-star-pink.svg";
import { EmptyCard } from "../empty-card";
import { ProgressBar } from "../../../../../../shared/components/progress-bar";
import IconCheck from "@/assets/icons/icon-circle-check.svg";
import IconReset from "@/assets/icons/icon-reset.svg";
import { MasteredInfo } from "../../../../../../shared/mastered-info";
import { DefaultButton } from "../../../../../../shared/default-button";
import { useQuestionsContent } from "./hooks";

import * as S from "./styles";

export const QuestionsContent = ({ currentCard, data }: QuestionProps) => {
  const { handleCardUpdate, progressCount, isMastered, handleResetCard, handleToggleCard, isQuestion } = useQuestionsContent({
    currentCard,
    data,
  });

  return (
    <S.Wrapper>
      <S.StyledButton $allMastered={!data.length} onClick={handleToggleCard} $isQuestion={isQuestion}>
        {data.length ? (
          <>
            <S.CategoryInfo>{currentCard?.category}</S.CategoryInfo>

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
                  {currentCard?.answer ?? ""}
                </DefaultTypography>
              </S.MiddleBlock>
            )}
            {!isMastered ? <ProgressBar progressValue={progressCount} /> : <MasteredInfo />}

            {isQuestion ? <img src={BlueStar} alt="blue star" className="blue-star" /> : <img src={PinkStar} alt="pink star" className="blue-star" />}

            <img src={YellowStar} alt="yellow star" className="yellow-star" />
          </>
        ) : (
          <EmptyCard />
        )}
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
