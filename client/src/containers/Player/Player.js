// Import Outside
import React, { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";
// Import styles
import { PlayerDiv } from "./style/style";
// Import Components
import { PlayerTrack, PlayerNotAuth } from "../../components/Player";

const mapState = ({ tokens, playerNotAuth, responses }) => ({
  accessToken: tokens["accessToken"],
  track: playerNotAuth["track"],
  urisTracklist: responses.recommendedTracklist["uris"],
});
window.onSpotifyWebPlaybackSDKReady = () => {};
function Player({ playingTrack, auth }) {
  const { accessToken, track, urisTracklist } = useSelector(mapState);
  let changePlayerView = useMediaQuery("(min-width:1000px)");

  return (
    <section>
      {auth ? (
        <div className="authPlayer">
          <SpotifyPlayer
            name="Music Earrings Player"
            token={accessToken}
            uris={
              Array.isArray(urisTracklist) && urisTracklist.length > 0
                ? [...urisTracklist]
                : ["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]
            }
          />
        </div>
      ) : (
        <PlayerDiv changePlayerView={changePlayerView}>
          <PlayerTrack
            changePlayerView={changePlayerView}
            track={playingTrack}
          />
          <PlayerNotAuth
            changePlayerView={changePlayerView}
            track={playingTrack}
          />
        </PlayerDiv>
      )}
    </section>
  );
}

export default Player;
