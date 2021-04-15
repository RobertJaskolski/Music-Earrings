import React from "react";
import { Div } from "./style/style";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { handleOnChangeSearch } = props;
  if (!handleOnChangeSearch) {
    return null;
  }
  return (
    <Div data-test="SearchInputComponent">
      <CssTextField
        onChange={handleOnChangeSearch}
        data-test="searchTextField"
        label={t("components.Nav.searchInput.search")}
        fullWidth={true}
      />
    </Div>
  );
}

export default SearchInput;
