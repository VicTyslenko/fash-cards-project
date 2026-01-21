import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--corner-radius-16, 16px);
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 3px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 3px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
  min-height: 258px;
`;

export const HeaderSection = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--colors-neutral-900, #2e1401);
  & .default-typography {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 20px;
    font-weight: 600;
    line-height: 120%;
  }
`;

export const AnswerSection = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid var(--colors-neutral-900, #2e1401);
  
  & .answer-header {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    opacity: 0.6;
  }
  & .answer {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const BottomSection = styled.div`
  display: flex;
`;
