// Import outside
import React from "react";

// Import Components
import { LoginButton } from "../Nav";

//Import styles
import { DivInfo } from "./style/style";

function InformationAndConnectButton() {
  return (
    <DivInfo>
      <LoginButton redirectLink={`${process.env.REACT_APP_API_URL}/login`}>
        You must log in to use the queue
      </LoginButton>
    </DivInfo>
  );
}

export default InformationAndConnectButton;
