import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationPauseAndPlay from "../../assets/pause.json";
import animationVolume from "../../assets/mute.json";
import { DivPlayerAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";

function PlayerAuth(props) {
  const { changePlayerView, track } = props;
  return track?.preview_url ? (
    <DivPlayerAuth changePlayerView={changePlayerView}></DivPlayerAuth>
  ) : (
    <DivPlayerAuth changePlayerView={changePlayerView}></DivPlayerAuth>
  );
}

export default PlayerAuth;
