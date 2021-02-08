import React from "react";
import { Button } from "../../StyledComponents/Buttons";
import { Div } from "../../StyledComponents/GridElements";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

const LogoutButton = (props) => {
  const { logout, imageURL, name } = props;
  return (
    <Div>
      <Avatar alt={name} src={imageURL} />
      <Button onClick={logout}>Logout</Button>
    </Div>
  );
};

LogoutButton.propTypes = {
  logout: PropTypes.func,
  imageURL: PropTypes.string,
  name: PropTypes.string,
};

export default LogoutButton;
