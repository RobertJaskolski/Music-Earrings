import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationPauseAndPlay from "../../assets/pause.json";
import { DivPlayerNotAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";

function PlayerNotAuth() {
  const [playerState, setPlayerState] = useState(true);
  const [animationLottie, setAnimationLottie] = useState(null);
  const handleOnClickPlayOrPause = () => {
    console.log(playerState);
    if (!playerState) {
      animationLottie.playSegments([40, 0], true);
      setPlayerState(true);
    } else if (playerState) {
      animationLottie.playSegments([0, 50], true);
      setPlayerState(false);
    }
  };
  return (
    <DivPlayerNotAuth>
      <span onClick={handleOnClickPlayOrPause}>
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
      <span id="current-time" class="time">
        0:00
      </span>
      <span className={"input-range-span"}>
        <InputRange
          maxValue={100}
          minValue={0}
          value={20}
          onChange={() => {}}
        />
      </span>
      <span id="duration" class="time">
        0:00
      </span>
    </DivPlayerNotAuth>
  );
}

export default PlayerNotAuth;
