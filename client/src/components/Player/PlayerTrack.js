import React from "react";

import { DivTrack } from "./style/style";

function PlayerTrack(props) {
  const { track, changePlayerView } = props;
  if (!track) return null;
  return (
    <DivTrack changePlayerView={changePlayerView}>
      {changePlayerView && (
        <img
          alt={track?.name}
          src={track?.album?.images[0]?.url || "/images/wrapper.jpg"}
          width={80}
          height={80}
        />
      )}
      <span>{track?.artists ? track?.artists[0]?.name : "Artist"}</span>
      <span>{track?.name || "Track name"}</span>
    </DivTrack>
  );
}

export default PlayerTrack;
