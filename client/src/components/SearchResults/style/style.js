import styled, { css } from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
//Artist
export const ChipArtist = styled.div`
  flex-basis: 95%;
  ${({ desktop }) =>
    desktop &&
    css`
      background-color: #1db954;
      svg {
        font-size: 35px;
      }
    `}
  ${({ desktop }) =>
    !desktop &&
    css`
      flex-basis: 44%;
      svg {
        font-size: 30px;
      }
    `}
  border-radius: 5px;
  margin-bottom: 35px;
  flex-wrap: wrap;
  min-height: 40px;
  opacity: 0.8;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
  }
  svg {
    margin-right: 5px;
    transition: all 0.3s linear;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;

export const DivArtist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IMGArtist = styled.img`
  position: absolute;
  margin-right: 5px;
  border-radius: 5px;
`;

export const H2Artist = styled.h2`
  margin: 0px 0px 0px 70px;
  padding: 0px;
`;

//Artist skelton
export const StyledSkeletonIMGArtist = styled(Skeleton)`
  position: absolute;
  background-color: #1db954;
  border-radius: 5px;
`;
export const StyledSkeletonTextArtist = styled(Skeleton)`
  height: 40px;
  width: 100%;
  background-color: #1db954;
  margin-left: 65px;
  border-radius: 0px 5px 5px 0px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChipSkeltonArtist = styled.div`
  margin-bottom: 35px;
  min-height: 40px;
  flex-basis: 95%;
  ${({ desktop }) =>
    !desktop &&
    css`
      flex-basis: 44%;
    `}
`;
//Track
export const ChipTrack = styled.div`
  ${({ desktop }) =>
    desktop &&
    css`
      background-color: #1db954;
    `}
  ${({ desktop }) => !desktop && css``}
  flex-basis: 95%;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 2px;
  min-height: 40px;
  opacity: 0.8;
  transition-duration: 300ms;
  span:first-child svg {
    transition: all 0.3s linear;
    opacity: 0;
    position: absolute;
    z-index: 10;
    font-size: 40px;
  }
  :hover {
    opacity: 1;
    span:first-child svg {
      opacity: 1;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
`;
export const DivTrack = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 85%;
  span > div {
    margin-left: 45px;
    padding-top: 10px;
  }
  span:last-of-type {
    flex-basis: 15%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    svg {
      margin-right: 5px;
      transition: all 0.3s linear;
      font-size: 35px;
      cursor: pointer;
      :hover {
        color: black;
      }
      :last-of-type {
        float: right;
      }
    }
    img {
      margin-right: 5px;
      opacity: 0.4;
      transition: all 0.3s linear;
      font-size: 35px;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  }
`;
export const IMGTrack = styled.img`
  position: absolute;
`;
//Track skelton
export const StyledSkeletonTextTrack = styled(Skeleton)`
  height: 40px;
  ${({ desktop }) =>
    desktop &&
    css`
      background-color: #1db954;
    `}
  ${({ desktop }) =>
    !desktop &&
    css`
      background-color: #262626;
    `}
`;

export const ChipSkeltonTrack = styled.div`
  flex-basis: 95%;
  border-radius: 5px;
  margin-bottom: 5px;
  opacity: 0.8;
`;
