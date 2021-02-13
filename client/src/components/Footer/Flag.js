import React from "react";
import styled from "styled-components";
import poland from "../../images/poland.png";
const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
`;
const ButtonChangeLang = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  height: 16px;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    border: none;
    margin: 0px;
    padding: 0px;
  }
`;

export default function Flag() {
  return (
    <FlagBox>
      <ButtonChangeLang>
        <img alt='lang' width='100%' height='100%' src={poland} />
      </ButtonChangeLang>
    </FlagBox>
  );
}
