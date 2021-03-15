import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "./style/style.css";
import { DivNow, Name, Img } from "./style/style";

function NowPlaying(props) {
  const { track } = props;
  const changeWidth = useMediaQuery("(min-width:700px)");
  return (
    <DivNow>
      <Img
        src={track?.album?.images[0]?.url}
        width={45}
        height={45}
        alt={"name"}
      />
      <Name
        className={changeWidth ? "slide" : "slide2"}
        nameAndArtist={`${track?.artists[0]?.name} - ${track?.name}`}
        changeWidth={changeWidth}
      ></Name>
    </DivNow>
  );
}

export default NowPlaying;
