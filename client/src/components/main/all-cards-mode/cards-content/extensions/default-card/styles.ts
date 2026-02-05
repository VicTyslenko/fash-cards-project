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
  justify-content: space-between;
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
`;

export const InfoSection = styled.div`
  padding: 14px 10px 16px;
  border-right: 1px solid var(--colors-neutral-900, #2e1401);
`;

export const MasterSection = styled.div<{ $isMastered?: boolean }>`
  flex: 2;
  padding: ${({ $isMastered }) => ($isMastered ? "14px 0 14px 8px" : "24px 0 24px 8px")};
`;
export const MenuButton = styled.button`
  position: relative;
  background: var(--colors-neutral-0, #fff);
  cursor: pointer;
  border-radius: 0 0 16px 0;
  border: none;
  border-left: 1px solid var(--colors-neutral-900, #2e1401);

  & .new-popup {
    display: flex;
    flex-direction: column;
    border-radius: var(--corner-radius-8, 8px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-neutral-0, #fff);
    box-shadow: 0 3px 8px 0 rgba(46, 20, 1, 0.2);
  }
`;

