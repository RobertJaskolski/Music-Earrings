import React from "react";
import { Button } from "../../styles/Buttons";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { DivSave } from "./style/style";

const CssTextField = withStyles({
  root: {
    marginLeft: "15px",
    marginBottom: "15px",
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

function SaveButton() {
  return (
    <DivSave>
      <CssTextField label='Name of tracklist' />
      <Button>Save tracklist to spotify</Button>
    </DivSave>
  );
}

export default SaveButton;
