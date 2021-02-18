import React from "react";
import PropTypes from "prop-types";
import { Div } from "./style/style";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

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
  if (!handleOnChangeSearch) {
    return null;
  }
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
  handleOnChangeSearch: PropTypes.func,
};

export default SearchInput;
