import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 55px;
  left: 0;
  width: 282px;
  border-radius: 8px;
  border: 1px solid #2e1401;
  box-shadow: 0 3px 8px 0 rgba(46, 20, 1, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 456px;
  overflow: auto;

  &:last-child {
    border-bottom: none;
  }
`;

export const DropDownItem = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #2e1401;

  & .quantity {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    color: #6d5b4d;
  }
`;
