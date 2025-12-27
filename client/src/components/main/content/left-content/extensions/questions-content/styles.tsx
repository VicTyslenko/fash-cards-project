import styled from "styled-components";
import { DefaultButton } from "../../../../../../shared/default-button";

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 43px;
`;

type StyledButtonProps = {
  $isQuestion: boolean;
};

export const StyledButton = styled(DefaultButton)<StyledButtonProps>`
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background: ${({ $isQuestion }) => ($isQuestion ? "#FC8AE5" : "#92ADEB")};
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 0 0 #2e1401;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & .blue-star {
    position: absolute;
    right: 30px;
    top: 50px;
  }
  & .yellow-star {
    position: absolute;
    bottom: 52px;
    left: 27px;
  }

  & .title {
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    color: #2e1401;
    line-height: 120%;
  }
  & .answer {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    opacity: 0.8;
  }
  & .title-answer {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
`;

export const CategoryInfo = styled.div`
  border-radius: 999px;
  border: 1px solid #2e1401;
  padding: 6px 12px;
  color: #2e1401;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 1px 1px 0 0 #000;
  line-height: 130%;
  letter-spacing: -0.36px;
  background-color: #fff;

  &.mastered {
    background-color: #47d9c9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }
`;

export const MiddleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  color: #2e1401;
  line-height: 120%;
`;

export const BarWrapp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & .score {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.36px;
  }
`;

export const ProgressiveBar = styled.div`
  width: 60px;
  height: 8px;
  border-radius: 999px;
  border: 1px solid #2e1401;
  background-color: #fff;
`;

export const ActionsWrapp = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
  width: 100%;

  & .default-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid #2e1401;
    box-shadow: 2px 2px 0 0 #2e1401;
  }
  & .yellow_btn {
    background: #f8cb46;
  }
  & .mastered_btn {
    opacity: 0.5;
  }
`;
