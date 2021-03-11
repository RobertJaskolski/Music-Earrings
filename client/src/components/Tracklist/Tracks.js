import React from "react";
import {
  ChipTrack,
  DivTrack,
  LineTrack,
  IMGTrack,
  TextTrack,
} from "./style/style";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
function Tracks(props) {
  const { track, seedsLength } = props;
  const { name, album } = track;
  if (!seedsLength) {
    return null;
  }
  return (
    <ChipTrack data-test='chipComponent'>
      <DivTrack>
        <LineTrack />
        <span>
          <IMGTrack
            data-test='chipIMG'
            src={album?.images[0]?.url || "/images/wrapper.jpg"}
            width='40x'
            height='auto'
          />
          <TextTrack>{name}</TextTrack>
        </span>
        <span>
          <div>
            <PlaylistAddIcon />
          </div>
          <PlayArrowIcon />
        </span>
      </DivTrack>
    </ChipTrack>
  );
}

export default Tracks;
