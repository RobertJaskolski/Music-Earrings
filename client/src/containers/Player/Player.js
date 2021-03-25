// Import Outside
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Import styles
import { PlayerDiv } from "./style/style";
// Import Components
import {
  PlayerTrack,
  PlayerNotAuth,
  PlayerAuth,
} from "../../components/Player";

function Player({ playingTrack, auth }) {
  let changePlayerView = useMediaQuery("(min-width:1000px)");
  let changePlayerView2 = useMediaQuery("(min-width:500px)");
  return (
    <PlayerDiv changePlayerView={changePlayerView}>
      <PlayerTrack changePlayerView={changePlayerView} track={playingTrack} />
      {auth ? (
        <PlayerAuth
          changePlayerView2={changePlayerView2}
          changePlayerView={changePlayerView}
          track={playingTrack}
        />
      ) : (
        <PlayerNotAuth
          changePlayerView={changePlayerView}
          track={playingTrack}
        />
      )}
    </PlayerDiv>
  );
}

export default Player;
