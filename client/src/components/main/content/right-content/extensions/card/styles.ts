import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-width: 344px;
  height: 125px;
  border-radius: 12px;
  border-top: 1px solid #2e1401;
  border-right: 2px solid #2e1401;
  border-bottom: 2px solid #2e1401;
  border-left: 1px solid #2e1401;
`;

export const InfoWrapp = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  & .number {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`;
export const IconWrapp = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92adeb;
`;
