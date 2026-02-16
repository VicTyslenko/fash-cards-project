import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  min-width: 0; /* Prevents flex children from overflowing */

  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */

  /* Mobile - stack vertically */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
