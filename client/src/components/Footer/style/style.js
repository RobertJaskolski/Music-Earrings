import styled from "styled-components";

export const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
  transition-duration: 400ms;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
