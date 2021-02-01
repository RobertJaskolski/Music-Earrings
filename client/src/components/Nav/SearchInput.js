import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  margin: 5px;
  justify-content: flex-start;
  align-items: center;
`;

function SearchInput() {
  return (
    <Div>
      <TextField label="Search artist, song or album..." fullWidth={true} />
    </Div>
  );
}

export default SearchInput;
