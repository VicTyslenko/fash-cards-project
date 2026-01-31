import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  left: 100%;
  right: 100%;
  opacity: 0.7;
  background: var(--colors-neutral-900, #2e1401);
`;

export const ModalInner = styled.div`
  border-radius: var(--corner-radius-16, 16px);
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 4px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 4px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
`;
