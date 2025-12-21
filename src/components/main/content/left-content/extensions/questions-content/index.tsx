import * as S from "./styles";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import YellowStar from "@/assets/icons/pattern-star-yellow.svg";
import BlueStar from "@/assets/icons/pattern-star-blue.svg";
import IconCheck from "@/assets/icons/icon-check.svg";
import IconReset from "@/assets/icons/icon-reset.svg";

import { DefaultButton } from "../../../../../../shared/default-button";

export const QuestionsContent = () => {
  return (
    <S.Wrapper>
      <S.StyledButton>
        <S.CategoryInfo>Web Development</S.CategoryInfo>
        <img src={BlueStar} alt="blue star" className="blue-star" />
        <img src={YellowStar} alt="yellow star" className="yellow-star" />
        <DefaultTypography as="h1" className="title">
          The Question
        </DefaultTypography>
        <DefaultTypography className="answer">Click to reveal answer</DefaultTypography>
        <S.BarWrapp>
          <S.ProgressiveBar />
          <DefaultTypography className="score">0/5</DefaultTypography>
        </S.BarWrapp>
      </S.StyledButton>

      <S.ActionsWrapp>
        <DefaultButton className="yellow_btn">
          <img src={IconCheck} alt="check icon" />
          <DefaultTypography>I Know This</DefaultTypography>
        </DefaultButton>

        <DefaultButton>
          <img src={IconReset} alt="check icon" />
          <DefaultTypography>Reset Progress</DefaultTypography>
        </DefaultButton>
      </S.ActionsWrapp>
    </S.Wrapper>
  );
};
