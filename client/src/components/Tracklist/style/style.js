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
export const Section = styled.section`
  margin-top: 15px;
  margin-left: 7px;
  margin-bottom: 5px;
`;
