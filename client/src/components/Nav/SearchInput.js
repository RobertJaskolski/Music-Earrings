import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Div = styled.div`
  display: flex;
  margin: 10px 0px 15px 6px;
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
  const { handleOnChangeSearch } = props;
  return (
    <Div data-test='SearchInputComponent'>
      <CssTextField
        onChange={handleOnChangeSearch}
        data-test='searchTextField'
        label='Search artist, song or album...'
        fullWidth={true}
      />
    </Div>
  );
}

SearchInput.propTypes = {
  handleOnChangeSearch: PropTypes.func.isRequired,
};

export default SearchInput;
