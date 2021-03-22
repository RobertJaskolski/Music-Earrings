// Import Outside
import React from "react";
// Import styles
import { PlayerDiv } from "./style/style";
// Import Components
import { PlayerTrack, PlayerNotAuth } from "../../components/Player";

function Player({ playingTrack }) {
  if (playingTrack?.preview_url === undefined) return null;
  return (
    <PlayerDiv>
      <PlayerTrack track={playingTrack} />
      <PlayerNotAuth track={playingTrack} />
    </PlayerDiv>
  );
}

export default Player;
