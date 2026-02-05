import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 600px;
  border-radius: var(--corner-radius-16, 16px);
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 4px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 4px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
`;

export const Header = styled.h1`
  color: var(--colors-neutral-900, #2e1401);

  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
`;

export const Text = styled.p`
  color: var(--colors-neutral-900, #2e1401);
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
`;
export const TopSection = styled.div`
  padding: 24px;
`;

export const ButtonsWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 24px 16px;

  & .default-button {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  & .cancel_btn {
    border-radius: var(--corner-radius-full, 999px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-neutral-0, #fff);
    color: var(--colors-neutral-900, #2e1401);
    min-width: 60px;
  }

  & .delete_btn {
    border-radius: var(--corner-radius-full, 999px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-yellow-500, #f8cb46);
    box-shadow: 2px 2px 0 0 #2e1401;
  }
`;
