import styled from "styled-components";

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

export const ProgressBar = styled.progress`
  appearance: none;
  -webkit-appearance: none;

  width: 60px;
  height: 8px;

  &::-webkit-progress-bar {
    border: 1px solid #2e1401;
    border-radius: 999px;
    background-color: #fff;
  }

  &::-webkit-progress-value {
    background-color: #2e1401;
  }
`;
