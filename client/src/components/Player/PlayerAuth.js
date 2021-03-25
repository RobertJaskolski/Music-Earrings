import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationPauseAndPlay from "../../assets/pause.json";
import animationNext from "../../assets/next.json";
import animationVolume from "../../assets/mute.json";
import { DivPlayerAuth } from "./style/style";
import InputRange from "react-input-range";
import "./style/style.css";

function PlayerAuth(props) {
  const { changePlayerView, track, changePlayerView2 } = props;
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
