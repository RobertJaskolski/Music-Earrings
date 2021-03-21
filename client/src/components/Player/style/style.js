import styled from "styled-components";

// TRACK
export const DivTrack = styled.div`
  flex-basis: 18%;
  padding-left: 15px;
`;
// TRACK LENGTH
export const DivPlayerNotAuth = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .stopPlay {
    padding: 0px 10px;
  }
  .duration {
    flex-basis: 2%;
  }
  .input-range-span {
    padding: 0px 15px;
    flex-basis: 40%;
  }
  .input-volume-range-span {
    padding: 0px 15px;
    flex-basis: 10%;
  }
  svg:first-of-type {
    cursor: pointer;
    margin-right: 10px;
  }
  svg:last-of-type {
    cursor: pointer;
    margin-left: 10px;
  }
`;
