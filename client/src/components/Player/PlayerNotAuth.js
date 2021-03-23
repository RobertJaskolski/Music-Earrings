import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationPauseAndPlay from "../../assets/pause.json";
import animationVolume from "../../assets/mute.json";
import { DivPlayerNotAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

function PlayerNotAuth(props) {
  const { track } = props;
  const [playerState, setPlayerState] = useState(true);
  const [durationText, setDurationText] = useState("");
  const [durationNumber, setDurationNumber] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState("");
  const [currentTimeNumber, setCurrentTimeNumber] = useState(0);
  const [animationLottie, setAnimationLottie] = useState(null);
  const [animationLottieVolume, setAnimationLottieVolume] = useState(null);
  const [volume, setVolume] = useState(25);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [mute, setMute] = useState(false);
  const handleOnClickPlayOrPause = () => {
    if (!playerState) {
      if (audioPlayer) audioPlayer.play();
      animationLottie.playSegments([30, 0], true);
      setPlayerState(true);
    } else if (playerState) {
      if (audioPlayer) audioPlayer.pause();
      animationLottie.playSegments([0, 50], true);
      setPlayerState(false);
    }
  };
  const handleMute = () => {
    if (mute) {
      setMute(false);
      setVolume(24);
      animationLottieVolume.goToAndStop(24, true);
      if (audioPlayer) audioPlayer.volume = 1.0;
    } else {
      setVolume(0);
      setMute(true);
      animationLottieVolume.goToAndStop(0, true);
      if (audioPlayer) audioPlayer.volume = 0.0;
    }
  };
  const handleChangeVolumeAnimation = (value) => {
    if (animationLottieVolume && value < 25) {
      animationLottieVolume.goToAndStop(value, true);
      if (value) setMute(false);
    }
  };
  useEffect(() => {
    if (!audioPlayer || track?.preview_url !== audioPlayer.src) {
      setAudioPlayer(document.getElementById("audioHTML5"));
    } else {
      audioPlayer.addEventListener("canplaythrough", (e) => {
        audioPlayer.play();
        setDurationText(calculateTime(audioPlayer.duration));
        setDurationNumber(audioPlayer.duration);
      });
      audioPlayer.addEventListener("timeupdate", (e) => {
        setCurrentTimeText(calculateTime(audioPlayer.currentTime));
        setCurrentTimeNumber(audioPlayer.currentTime);
      });
      audioPlayer.addEventListener("ended", (e) => {
        audioPlayer.pause();
        setPlayerState(false);
      });
    }
  }, [audioPlayer, track]);

  return track?.preview_url ? (
    <DivPlayerNotAuth>
      <audio
        id="audioHTML5"
        src={track?.preview_url}
        preload="metadata"
        autoPlay={false}
      />
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
      <span className={"input-range-span"}>
        <span className={"duration"}>{audioPlayer && currentTimeText}</span>
        <InputRange
          maxValue={durationNumber || 100}
          minValue={0}
          value={currentTimeNumber || 0}
          onChange={(value) => {
            setCurrentTimeNumber(value);
            if (audioPlayer) audioPlayer.currentTime = value;
          }}
        />
        <span className={"duration"}>{audioPlayer && durationText}</span>
      </span>

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
            if (audioPlayer) audioPlayer.volume = (value * 4) / 100;
            handleChangeVolumeAnimation(value);
          }}
        />
      </span>
    </DivPlayerNotAuth>
  ) : (
    <DivPlayerNotAuth>
      <span className={"stopPlay"}>
        <Player
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          src={animationPauseAndPlay}
          style={{ height: "50px", width: "50px" }}
        ></Player>
      </span>

      <span className={"input-range-span"}>
        <span className={"duration"}>0:00</span>
        <InputRange onChange={() => {}} maxValue={100} minValue={0} value={0} />
        <span className={"duration"}>0:00</span>
      </span>

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
            if (audioPlayer) audioPlayer.volume = (value * 4) / 100;
            handleChangeVolumeAnimation(value);
          }}
        />
      </span>
    </DivPlayerNotAuth>
  );
}

export default PlayerNotAuth;
