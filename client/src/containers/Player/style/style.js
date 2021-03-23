import styled, { css } from "styled-components";
export const PlayerDiv = styled.div`
  height: 100px;
  bottom: 0px;
  z-index: 100;
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  border-radius: 10px;
  background-color: #bebcbb;
  box-shadow: -2px rgba(20, 17, 17, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ changePlayerView }) =>
    !changePlayerView &&
    css`
      position: fixed;
      left: 0;
      border-radius: 0px;
      box-shadow: 0px -3px rgba(190, 187, 187, 0.2);
      height: 130px;
    `}
`;
