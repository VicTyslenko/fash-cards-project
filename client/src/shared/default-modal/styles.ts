import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(46, 20, 1, 0.7);
`;

export const ModalInner = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
