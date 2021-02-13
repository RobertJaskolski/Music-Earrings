import React from "react";
import { Button } from "../../styles/Buttons";
import { Div } from "../../styles/GridElements";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

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

LogoutButton.propTypes = {
  logout: PropTypes.func,
  imageURL: PropTypes.string,
  name: PropTypes.string,
};

export default LogoutButton;
