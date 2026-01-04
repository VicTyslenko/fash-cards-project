import styled from "styled-components";

export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #2e1401;
  background-color: #fff;

  &:checked {
    background-color: rgba(248, 203, 70, 1);
  }
  &:checked::after {
    content: "";
    display: block;
    width: 4px;
    height: 7px;
    border: solid #2e1401;

    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 2px auto;
  }
`;
