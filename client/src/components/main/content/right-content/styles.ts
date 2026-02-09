import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #fff;
  flex: 1;
  border-radius: 16px;
  border-top: 1px solid #2e1401;
  border-right: 3px solid #2e1401;
  border-bottom: 3px solid #2e1401;
  border-left: 1px solid #2e1401;

  & .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
