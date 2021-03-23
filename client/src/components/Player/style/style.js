import styled from "styled-components";

// TRACK
export const DivTrack = styled.div`
  flex-basis: 28%;
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 105px;
  span:first-of-type {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 700;
  }
  position: relative;
  img {
    position: absolute;
    left: 15px;
    bottom: -20px;
    border-radius: 3px;
  }
`;
// Player Not auth
export const DivPlayerNotAuth = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .stopPlay {
    padding: 0px 10px;
  }
  .input-range-span {
    padding: 0px 15px;
    flex-basis: 40%;
    display: flex;
    justify-content: space-between;
    .duration {
      flex-basis: 2%;
      &:first-of-type {
        margin-right: 15px;
      }
      &:last-of-type {
        margin-left: 15px;
      }
    }
  }
  .input-volume-range-span {
    padding: 0px 15px;
    flex-basis: 15%;
  }
  svg:first-of-type {
    cursor: pointer;
    margin-right: 15px;
  }
  svg:last-of-type {
    cursor: pointer;
    margin-left: 10px;
  }
`;
