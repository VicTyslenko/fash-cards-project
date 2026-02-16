import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  min-width: 0; /* Prevents overflow */
  border-radius: 16px;
  outline: 3px solid #2e1401;
  outline-offset: -3px; /* Inset the outline to match border positioning */
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  /* Mobile - full width */
  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
