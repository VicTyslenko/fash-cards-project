import styled from "styled-components";

export const CardsContentWrapp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const ButtonWrapp = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-bottom: 64px;

  & .default-button {
    border-radius: var(--corner-radius-full, 999px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-neutral-0, #fff);
    box-shadow: 2px 2px 0 0 var(--colors-neutral-900, #2e1401);
  }
`;
