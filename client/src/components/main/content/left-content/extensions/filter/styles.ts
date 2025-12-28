import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2e1401;

  & .default-button {
    border: 1px solid #2e1401;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const FlexWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DropDown = styled.div`
  position: relative;

  & .arrow {
    position: absolute;
    top: 15px;
    right: 16px;
    cursor: pointer;
  }
`;
export const Select = styled.select`
  max-width: 140px;
  appearance: none;
  padding: 12px 44px 12px 16px;
  border-radius: 999px;
  border: 1px solid #2e1401;
  background-color: #fff;
  color: #2e1401;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  cursor: pointer;
`;

export const CheckBoxWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & input {
    width: 16px;
    height: 16px;
  }
  & label {
    color: #2e1401;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
`;
