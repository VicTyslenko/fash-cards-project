import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 24px;
  right: 24px;
  padding: 10px 16px;
  border-radius: var(--corner-radius-full, 999px);
  border: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
  box-shadow:
    0 3px 8px 0 rgba(46, 20, 1, 0.2),
    2px 2px 0 0 var(--colors-neutral-900, #2e1401);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;

  & img {
    cursor: pointer;
  }
`;
