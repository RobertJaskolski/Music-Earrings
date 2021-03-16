import React from "react";
import { DivTrack, ImgRadius, Line } from "./style/style";
import ClearIcon from "@material-ui/icons/Clear";

function QueueTrack(props) {
  const { track } = props;
  return (
    <DivTrack>
      <Line></Line>
      <ImgRadius
        src={track?.album?.images[0]?.url || "/images/wrapper.jpg"}
        alt={track.name}
        width={50}
        height={50}
      />
      <div>
        <p>{`${track.artists[0]?.name} - ${track.name}`}</p>
        <ClearIcon />
      </div>
    </DivTrack>
  );
}

export default QueueTrack;
