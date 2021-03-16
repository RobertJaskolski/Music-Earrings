import React from "react";

import { DivInfo } from "./style/style";
import { Button } from "../../styles/Buttons";

function ClearButton(props) {
  const { handleClearQueue } = props;
  return <Button onClick={handleClearQueue}>Clear Queue</Button>;
}

export default ClearButton;
