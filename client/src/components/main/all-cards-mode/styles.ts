import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: auto;

  & .filter {
    border-bottom: none;
    padding: 0;
  }
`;
