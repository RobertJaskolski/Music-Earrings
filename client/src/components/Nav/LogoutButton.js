import React from "react";
import { Button } from "../../StyledComponents/Buttons";
import { Div } from "../../StyledComponents/GridElements";

const LogoutButton = (props) => {
  const { logout } = props;
  return (
    <Div>
      <Button onClick={logout}>Logout</Button>
    </Div>
  );
};

export default LogoutButton;
