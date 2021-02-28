import React from "react";
import { Button } from "../../styles/Buttons";
import { Div } from "../../styles/GridElements";
import Avatar from "@material-ui/core/Avatar";

const LogoutButton = (props) => {
  const { logout, imageURL, name } = props;
  if (!logout || !name) {
    return null;
  }
  return (
    <Div data-test='LogoutButtonComponent'>
      <Avatar data-test='avatar' alt={name} src={imageURL} />
      <Button data-test='logoutButton' onClick={logout}>
        Logout
      </Button>
    </Div>
  );
};

export default LogoutButton;
