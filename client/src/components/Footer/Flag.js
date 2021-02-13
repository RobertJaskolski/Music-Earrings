import React from "react";
import styled from "styled-components";

const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
  background-color: red;
`;

export default function Flag() {
  return <FlagBox></FlagBox>;
}
