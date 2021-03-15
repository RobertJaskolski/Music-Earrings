import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { DivPlay } from "./style/style";

function PlayQueue() {
  return (
    <DivPlay>
      <h4>Play Queue</h4>
      <PlayArrowIcon />
    </DivPlay>
  );
}

export default PlayQueue;
