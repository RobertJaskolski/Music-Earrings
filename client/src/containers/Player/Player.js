// Import Outside
import React from "react";
// Import styles
import { PlayerDiv } from "./style/style";
// Import Components
import {
  PlayerButtons,
  PlayerTrack,
  PlayerTrackLength,
} from "../../components/Player";

function Player() {
  return (
    <PlayerDiv>
      <PlayerTrack />
      <PlayerTrackLength />
      <PlayerButtons />
    </PlayerDiv>
  );
}

export default Player;
