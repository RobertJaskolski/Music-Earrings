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
  padding: 10px 10px;
  border-radius: 5px;
  align-items: center;
  flex-wrap: wrap;
  ${({ changeWidth }) =>
    !changeWidth &&
    css`
      justify-content: center;
    `}
  ${({ changeWidth }) =>
    changeWidth &&
    css`
      background-color: #1ed760;
      justify-content: flex-start;
    `}
    opacity: 0.85;
`;

export const Name = styled.div`
  position: relative;
  margin-left: 15px;
  ${({ changeWidth }) =>
    !changeWidth &&
    css`
      font-size: 25px;
      height: 60px;
      flex-basis: 100%;
    `}
  ${({ changeWidth }) =>
    changeWidth &&
    css`
      font-size: 15px;
      height: 50px;
      flex-basis: 70%;
    `}
  font-weight: 900;
  ${({ changeWidth }) =>
    !changeWidth &&
    css`
      overflow: hidden;
    `}
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
        width: 100%;
        white-space: nowrap;
        -webkit-animation: slide 17s linear infinite;
        -moz-animation: slide 17s linear infinite;
        animation: slide 17s linear infinite;
      `}
    height: 100%;
    z-index: 10;
  }
`;
export const Img = styled.img`
  ${({ changeWidth }) =>
    !changeWidth &&
    css`
      border-radius: 10px;
      margin-bottom: 10px;
      width: 150px;
      height: 150px;
    `}
  ${({ changeWidth }) =>
    changeWidth &&
    css`
      border-radius: 2px;
      width: 50px;
      height: 50px;
    `}
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
  opacity: 0.85;
  position: relative;
  min-height: 60px;
  transition-duration: 300ms;
  :hover {
    opacity: 1;
  }
  div:last-of-type {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-left: 55px;
  }
  img {
    position: absolute;
  }
  p {
    font-size: 16px;
    flex-basis: 80%;
    font-weight: 700;
    margin: 0px 0px;
    padding: 0px 0px;
  }
  svg {
    flex-basis: 15%;
    font-size: 35px;
    transition: all 300ms ease-out;
    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: #1ed760;
  margin: 5px 0px;
  flex-basis: 100%;
`;

export const ImgRadius = styled.img`
  border-radius: 2px;
`;
