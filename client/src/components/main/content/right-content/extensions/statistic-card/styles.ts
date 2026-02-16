import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
  border-radius: 12px;
  border-top: 1px solid #2e1401;
  border-right: 2px solid #2e1401;
  border-bottom: 2px solid #2e1401;
  border-left: 1px solid #2e1401;

  /* Small mobile - reduce height */
  @media screen and (max-width: 480px) {
    height: 110px;
  }
`;

export const InfoWrapp = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0; /* Prevents overflow */

  & .number {
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
  }

  /* Mobile - reduce padding and font size */
  @media screen and (max-width: 768px) {
    padding: 16px;
    gap: 8px;

    & .number {
      font-size: 32px;
    }
  }

  /* Small mobile */
  @media screen and (max-width: 480px) {
    padding: 12px;

    & .number {
      font-size: 28px;
    }
  }
`;

export const IconWrapp = styled.div<{ color: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  min-width: 0; /* Prevents overflow */

  & svg {
    max-width: 100%;
    height: auto;
  }
`;
