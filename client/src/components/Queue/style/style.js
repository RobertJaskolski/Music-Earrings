import styled, { css } from "styled-components";

// QUEUE INFORMATION
export const DivInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

// QUEUE ACTUAL PLAY
export const DivNow = styled.div`
  flex-basis: 100%;
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

export const Name = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 900;
  height: 15px;
  flex-basis: 80%;
  overflow: hidden;
  &:before {
    content: "${(props) => props.nameAndArtist}";
    position: absolute;
    ${({ changeWidth }) =>
      changeWidth &&
      css`
        width: 100%;
      `}
    ${({ changeWidth }) =>
      !changeWidth &&
      css`
        width: 250%;
        -webkit-animation: slide 7s linear infinite;
        -moz-animation: slide 7s linear infinite;
        animation: slide 7s linear infinite;
      `}
    height: 100%;
    z-index: 10;
  }
`;
export const Img = styled.img`
  border-radius: 2px;
`;

// QUEUE PLAY
export const DivPlay = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
    border-color: #1ed760;
    background-color: #1db954;
    cursor: pointer;
    color: black;
  }
  background-color: #1ed760;
  margin-bottom: 10px;
  border-radius: 5px;
  svg {
    font-size: 40px;
  }
`;

// QUEUE TRACK
export const DivTrack = styled.div`
  flex-basis: 100%;
  background-color: red;
`;
