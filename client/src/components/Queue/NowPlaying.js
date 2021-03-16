import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "./style/style.css";
import { DivNow, Name, Img } from "./style/style";

function NowPlaying(props) {
  const { track } = props;
  const changeWidth = useMediaQuery("(min-width:960px)");
  return (
    <DivNow changeWidth={changeWidth}>
      <Img
        src={track?.album?.images[0]?.url || "/images/wrapper.jpg"}
        changeWidth={changeWidth}
        alt={"name"}
      />
      <Name
        className={"slide"}
        nameAndArtist={`${track?.artists[0]?.name} - ${track?.name}`}
        changeWidth={changeWidth}
      ></Name>
    </DivNow>
  );
}

export default NowPlaying;
