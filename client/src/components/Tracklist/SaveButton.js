import React from "react";
import { Button } from "../../styles/Buttons";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { DivSave } from "./style/style";
import LoginButton from "../Nav/LoginButton";
import { useTranslation } from "react-i18next";

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

function SaveButton(props) {
  const { t } = useTranslation();
  const {
    auth,
    handleTextField,
    disabledButton,
    disabledName,
    tracklistName,
    handleButton,
  } = props;
  return (
    <DivSave>
      {auth ? (
        <div>
          <CssTextField
            value={tracklistName}
            disabled={disabledName}
            onChange={handleTextField}
            label={
              disabledName
                ? t("components.Tracklist.SaveButton.generate")
                : t("components.Tracklist.SaveButton.name")
            }
          />
          <Button
            onClick={(event) => {
              event.preventDefault();
              handleButton();
            }}
            disabled={disabledButton}
          >
            {t("components.Tracklist.SaveButton.save")}
          </Button>
        </div>
      ) : (
        <LoginButton redirectLink={`${process.env.REACT_APP_API_URL}/login`}>
          {t("components.Tracklist.SaveButton.login")}
        </LoginButton>
      )}
    </DivSave>
  );
}

export default SaveButton;
