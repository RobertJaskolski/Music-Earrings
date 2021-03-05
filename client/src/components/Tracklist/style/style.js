import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Chip = styled.span`
  //font-size: 18px;
  font-weight: bold;
  margin: 5px;
  border-radius: 5px;
  padding: 10px;
  background-color: #1db954;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition-duration: 300ms;
  justify-content: space-between;
  :hover {
    opacity: 1;
  }
  span:last-of-type {
    display: inline-block;
    svg {
      font-size: 24px;
      transition: all 300ms linear;
      :hover {
        color: black;
        cursor: pointer;
      }
    }
  }
`;
export const IMGTrack = styled.img`
  position: absolute;
`;
export const Section = styled.section`
  margin-top: 15px;
  margin-left: 7px;
  margin-bottom: 5px;
`;
export const DivTrack = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  span {
    flex-basis: 100%;
  }
  span:last-of-type {
    margin-left: 45px;
    display: flex;
    justify-content: space-between;
  }
  svg {
    font-size: 40px;
    margin-right: 5px;
    cursor: pointer;
    transition: all linear 300ms;
    :hover {
      color: black;
    }
  }
  img:last-of-type {
    margin-right: 5px;
  }
`;
export const LineTrack = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 5px;
  background-color: #1db954;
`;

export const TextTrack = styled.span`
  margin-left: 45px;
`;

export const ChipTrack = styled.div`
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
