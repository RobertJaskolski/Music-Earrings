import styled, { css } from "styled-components";

// TRACK
export const DivTrack = styled.div`
  flex-basis: 25%;
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
  ${({ changePlayerView }) =>
    !changePlayerView &&
    css`
      flex-basis: 20%;
      margin: 0 auto;
      padding: 0;
      padding-left: 5px;
      span:first-of-type {
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-all;
      }
      span:last-of-type {
        font-size: 12px;
        word-wrap: break-word;
        word-break: break-all;
      }
    `}
`;
// Player Not auth
export const DivPlayerNotAuth = styled.div`
  flex-basis: 73%;
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
  ${({ changePlayerView }) =>
    !changePlayerView &&
    css`
      flex-basis: 78%;
      .stopPlay {
        margin: 0;
        padding: 0;
        flex-basis: 25%;
      }
      .input-range-span {
        padding: 0px 0px;
        flex-basis: 70%;
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
        flex-basis: 40%;
      }
    `}
`;
//player auth
export const DivPlayerAuth = styled.div`
  // Phone
  ${({ changePlayerView }) =>
    !changePlayerView &&
    css`
      flex-basis: 80%;
    `}
  // Desktop
  flex-basis: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  span.buttons {
    flex-basis: 15%;
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    .back {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
    }
  }
  .progress {
    flex-basis: 43%;
    height: 10px;
    display: flex;
    justify-content: space-between;
    span {
      &:first-of-type {
        text-align: right;
      }

      flex-basis: 2%;
    }
    div {
      flex-basis: 75%;
    }
  }
  .volumme {
    padding: 0 15px;
    flex-basis: 25%;
    display: flex;
    align-items: center;
    span {
      &:first-of-type {
        flex-basis: 30%;
      }
      &:last-of-type {
        flex-basis: 70%;
      }
    }
  }
`;
