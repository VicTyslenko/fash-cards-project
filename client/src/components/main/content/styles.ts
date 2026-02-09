import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
