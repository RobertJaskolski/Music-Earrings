import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationPauseAndPlay from "../../assets/pause.json";
import animationVolume from "../../assets/mute.json";
import { DivPlayerNotAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";

function PlayerNotAuth(props) {
  const { track } = props;
  const [playerState, setPlayerState] = useState(true);
  const [animationLottie, setAnimationLottie] = useState(null);
  const [animationLottieVolume, setAnimationLottieVolume] = useState(null);
  const [volume, setVolume] = useState(25);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [mute, setMute] = useState(false);
  const handleOnClickPlayOrPause = () => {
    if (!playerState) {
      animationLottie.playSegments([30, 0], true);
      setPlayerState(true);
    } else if (playerState) {
      animationLottie.playSegments([0, 50], true);
      setPlayerState(false);
    }
  };
  const handleMute = () => {
    if (mute) {
      setMute(false);
      setVolume(24);
      animationLottieVolume.goToAndStop(24, true);
    } else {
      setVolume(0);
      setMute(true);
      animationLottieVolume.goToAndStop(0, true);
    }
  };
  const handleChangeVolumeAnimation = (value) => {
    if (animationLottieVolume && value < 25) {
      animationLottieVolume.goToAndStop(value, true);
      if (value) setMute(false);
    }
  };
  return (
    <DivPlayerNotAuth>
      {track?.preview_url && (
        <audio
          id="audioHTML5"
          src={track?.preview_url}
          preload="metadata"
          autoPlay
        />
      )}
      <span onClick={handleOnClickPlayOrPause} className={"stopPlay"}>
        <Player
          lottieRef={(instance) => {
            setAnimationLottie(instance);
          }}
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          src={animationPauseAndPlay}
          style={{ height: "50px", width: "50px" }}
        ></Player>
      </span>
      <span className={"duration"}>0:00</span>
      <span className={"input-range-span"}>
        <InputRange
          maxValue={100}
          minValue={0}
          value={20}
          onChange={() => {}}
        />
      </span>
      <span className={"duration"}>0:00</span>
      <span onClick={handleMute}>
        <Player
          lottieRef={(instance) => {
            setAnimationLottieVolume(instance);
            instance.goToAndStop(24, true);
          }}
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          src={animationVolume}
          style={{ height: "50px", width: "65px" }}
        ></Player>
      </span>
      <span className={"input-volume-range-span"}>
        <InputRange
          maxValue={25}
          minValue={0}
          value={volume}
          onChange={(value) => {
            setVolume(value);
            handleChangeVolumeAnimation(value);
          }}
        />
      </span>
    </DivPlayerNotAuth>
  );
}

export default PlayerNotAuth;
