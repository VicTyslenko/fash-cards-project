import styled from "styled-components";

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px 20px; /* Default padding for all screens */
  height: 100vh;
  overflow: auto;

  /* Mobile - increase side padding and add bottom padding */
  @media screen and (max-width: 768px) {
    padding: 20px 32px 64px;
  }
`;
