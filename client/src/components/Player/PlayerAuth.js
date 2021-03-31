import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useSelector, useDispatch } from "react-redux";
import animationPauseAndPlay from "../../assets/pause.json";
import animationNext from "../../assets/next.json";
import animationVolume from "../../assets/mute.json";
import { DivPlayerAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";
import API from "../../api/SpotifyAPI";
const mapState = ({ tokens }) => ({
  accessToken: tokens["accessToken"],
});

window.onSpotifyWebPlaybackSDKReady = () => {};

function PlayerAuth(props) {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(mapState);
  const { changePlayerView, track, changePlayerView2 } = props;
  const [deviceID, setDeviceID] = useState("");
  window.onSpotifyWebPlaybackSDKReady = (accessToken) => {
    window.playerInstance = new window.Spotify.Player({
      name: "Music-Earrings Player",
      getOAuthToken: (callback) => {
        callback(accessToken);
      },
    });
    // Error handling
    window.playerInstance.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    window.playerInstance.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    window.playerInstance.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    window.playerInstance.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    window.playerInstance.addListener("player_state_changed", (state) => {
      console.log(state);
    });

    // Ready
    window.playerInstance.addListener("ready", ({ device_id }) => {
      setDeviceID(device_id);
    });

    // Not Ready
    window.playerInstance.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    window.playerInstance.connect();
  };
  useEffect(() => {
    if (accessToken || !window.playerInstance) {
      window.onSpotifyWebPlaybackSDKReady(accessToken);
    }
    return () => {
      if (window.playerInstance) {
        window.playerInstance.disconnect();
      }
    };
  }, []);
  return track?.preview_url ? (
    <DivPlayerAuth
      changePlayerView2={changePlayerView2}
      changePlayerView={changePlayerView}
    >
      <span className="buttons">
        <span className="back">
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationNext}
            style={{ height: "50px", width: "50px" }}
          ></Player>
        </span>
        <span
          className="play"
          onClick={() => {
            dispatch(API.PlayTrack(deviceID));
          }}
        >
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationPauseAndPlay}
            style={{ height: "50px", width: "50px" }}
          ></Player>
        </span>
        <span className="next">
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationNext}
            style={{ height: "50px", width: "50px" }}
          ></Player>
        </span>
      </span>
      <span className="progress">
        <span>0:00</span>
        <InputRange
          maxValue={100}
          minValue={0}
          value={20}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <span>0:00</span>
      </span>
      <span className="volumme">
        <span>
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationVolume}
            style={{ height: "50px", width: "65px" }}
          ></Player>
        </span>
        <span>
          <InputRange
            maxValue={100}
            minValue={0}
            value={20}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </span>
      </span>
    </DivPlayerAuth>
  ) : (
    <DivPlayerAuth
      changePlayerView2={changePlayerView2}
      changePlayerView={changePlayerView}
    >
      <span className="buttons">
        <span className="back">
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationNext}
            style={{ height: "50px", width: "50px" }}
          ></Player>
        </span>
        <Player
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          src={animationPauseAndPlay}
          style={{ height: "50px", width: "50px" }}
        ></Player>
        <span className="next">
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationNext}
            style={{ height: "50px", width: "50px" }}
          ></Player>
        </span>
      </span>
      <span className="progress">
        <span>0:00</span>
        <InputRange
          maxValue={100}
          minValue={0}
          value={20}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <span>0:00</span>
      </span>
      <span className="volumme">
        <span>
          <Player
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={animationVolume}
            style={{ height: "50px", width: "65px" }}
          ></Player>
        </span>
        <span>
          <InputRange
            maxValue={100}
            minValue={0}
            value={20}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </span>
      </span>
    </DivPlayerAuth>
  );
}

export default PlayerAuth;
