import React from "react";

import { DivTrack } from "./style/style";

function PlayerTrack(props) {
  const { track } = props;
  if (!track) return null;
  return (
    <DivTrack>
      <img
        alt="Song image"
        src={track?.album?.images[0]?.url || "/images/wrapper.jpg"}
        width={50}
        height={50}
      />
      <span>{track?.artists[0]?.name}</span>
      <span>{track?.name}</span>
    </DivTrack>
  );
}

export default PlayerTrack;
