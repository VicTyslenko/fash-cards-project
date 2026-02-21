import styled from "styled-components";

export const FormWrapp = styled.div``;

export const Form = styled.form`
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 3px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 3px solid var(--colors-neutral-900, #2e1401);
  border-radius: 16px;
  background: var(--colors-neutral-0, #fff);

  & .default-button {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: var(--corner-radius-full, 999px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-yellow-500, #f8cb46);
    box-shadow: 2px 2px 0 0 #2e1401;
    width: fit-content;
  }
  & .default-typography {
    font-size: 16px;
    font-weight: 600;
    line-height: 120%;
    color: var(--colors-neutral-900, #2e1401);
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
`;

export const InputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 16px;
  &::placeholder {
    color: #6d5b4d;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
  border-radius: 6px;
  border: 1px solid #2e1401;
  background: #fff;
  max-width: 409px;
`;

export const TextArea = styled.textarea`
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #2e1401;
  background: #fff;

  min-height: 100px;
  &::placeholder {
    color: #6d5b4d;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
`;
