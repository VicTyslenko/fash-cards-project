import type { QuestionProps } from "../models";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import YellowStar from "@/assets/icons/pattern-star-yellow.svg";
import BlueStar from "@/assets/icons/pattern-star-blue.svg";
import IconMastered from "@/assets/icons/icon-mastered.svg";
import PinkStar from "@/assets/icons/pattern-star-pink.svg";
import IconCheck from "@/assets/icons/icon-check.svg";
import IconReset from "@/assets/icons/icon-reset.svg";
import { DefaultButton } from "../../../../../../shared/default-button";
import { useQuestionsContent } from "./hooks";

import * as S from "./styles";

export const QuestionsContent = ({ isQuestion, setIsQuestion, currentIndex, filteredData, categoryInfo }: QuestionProps) => {
  const currentCard = filteredData?.[currentIndex - 1];

  const { handleCardUpdate, progressCount, isMastered } = useQuestionsContent(currentCard);

  return (
    <S.Wrapper>
      <S.StyledButton onClick={() => setIsQuestion((prev) => !prev)} $isQuestion={isQuestion}>
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
            <S.ProgressiveBar />
            <DefaultTypography className="score">{`${progressCount}/5`}</DefaultTypography>
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
        {/* here */}
        <DefaultButton onClick={handleCardUpdate} className={`${!isMastered ? "yellow_btn" : "yellow_btn mastered_btn"}`}>
          <img src={IconCheck} alt="check icon" />
          <DefaultTypography>{!isMastered ? "I Know This" : "Already Mastered"}</DefaultTypography>
        </DefaultButton>

        <DefaultButton>
          <img src={IconReset} alt="check icon" />
          <DefaultTypography>Reset Progress</DefaultTypography>
        </DefaultButton>
      </S.ActionsWrapp>
    </S.Wrapper>
  );
};
