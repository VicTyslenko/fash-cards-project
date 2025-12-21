import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .study_btn {
    background-color: #f8cb46;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border: 1px solid black;
  }
  & .all-cards_btn {
    border: none;
  }
  & .default-typography {
    font-weight: 600;
    color: #2e1401;
    font-size: 24px;
  }
`;

export const LogoWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonsWrapp = styled.div`
  padding: 4px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 2px 0px 0px #2e1401;
  border: 1px solid #2e1401;
`;
