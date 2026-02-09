import styled from "styled-components";

export const ErrorMessage = styled.div`
  display: flex;
  gap: 6px;
  & span {
    color: var(--colors-pink-700, #e11966);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }
`;
