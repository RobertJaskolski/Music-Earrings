// Import Outside
import React from "react";
// Import styles
import { PlayerDiv } from "./style/style";
// Import Components
import { PlayerTrack, PlayerNotAuth } from "../../components/Player";

function Player() {
  return (
    <PlayerDiv>
      <PlayerTrack />
      <PlayerNotAuth />
    </PlayerDiv>
  );
}

export default Player;
