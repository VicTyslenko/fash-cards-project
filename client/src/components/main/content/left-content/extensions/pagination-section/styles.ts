import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #2e1401;

  & .default-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  & .card-number {
    color: #6d5b4d;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;
