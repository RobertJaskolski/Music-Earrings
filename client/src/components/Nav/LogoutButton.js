import React from "react";
import { Button } from "../../assets/Buttons";
import { Div } from "../../assets/GridElements";

const LogoutButton = (props) => {
  const { logout } = props;
  return (
    <Div>
      <Button onClick={logout}>Logout</Button>
    </Div>
  );
};

export default LogoutButton;
