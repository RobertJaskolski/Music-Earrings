import React from "react";
import { DivTrack } from "./style/style";

function QueueTrack(props) {
  const { track } = props;
  return <DivTrack>{track.name}</DivTrack>;
}

export default QueueTrack;
