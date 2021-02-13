import React from "react";
import styled from "styled-components";
import poland from "../../images/poland.png";
const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default function Flag() {
  return (
    <FlagBox>
      <img alt='lang' width='100%' height='100%' src={poland} />
    </FlagBox>
  );
}
