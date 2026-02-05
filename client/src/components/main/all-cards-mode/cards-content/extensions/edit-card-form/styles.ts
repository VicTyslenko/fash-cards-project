import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  width: 600px;
  border-radius: var(--corner-radius-16, 16px);
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 4px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 4px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);

  & .default-typography {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  color: var(--colors-neutral-900, #2e1401);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
`;

export const Input = styled.input`
  border-radius: var(--corner-radius-6, 6px);
  border: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
  padding: 16px;
  width: 409px;

  &::placeholder {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const TextArea = styled.textarea`
  padding: 16px;
  &::placeholder {
    color: var(--colors-neutral-900, #2e1401);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: flex-end;

  & .default-button {
    background-color: #f8cb46;
  }
`;
