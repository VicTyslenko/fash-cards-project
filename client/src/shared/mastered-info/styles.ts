import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #47d9c9;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  border: 1px solid #2e1401;
  padding: 6px 12px;
  color: #2e1401;
  box-shadow: 1px 1px 0 0 #000;
  max-width: 104px;

  & .default-typography {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.36px;
  }
`;
