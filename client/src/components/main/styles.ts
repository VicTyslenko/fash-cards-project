import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    /* Account for bottom padding on mobile */
    max-height: calc(100vh - 20px - 64px); /* viewport - top padding - bottom padding */
  }
`;
