import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const Div = styled.div`
  display: flex;
  margin: 6px;
  justify-content: flex-start;
  align-items: center;
`;

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1ed760",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #1ed760",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#1ed760",
    },
    "& .MuiFormLabel-root": {
      "&": {
        color: "white",
      },
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

function SearchInput(props) {
  return (
    <Div data-test='SearchInputComponent'>
      <CssTextField
        data-test='searchTextField'
        label='Search artist, song or album...'
        fullWidth={true}
      />
    </Div>
  );
}

export default SearchInput;
