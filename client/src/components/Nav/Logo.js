import React from "react";
import logo from "./logo.png";

function Logo({ widthLogo, heightLogo }) {
  return <img src={logo} alt="Logo" width={widthLogo} height={heightLogo} />;
}

export default Logo;
