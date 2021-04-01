import React from "react";
import {
  ChipTrack,
  DivTrack,
  LineTrack,
  IMGTrack,
  TextTrack,
} from "./style/style";
import { useSelector } from "react-redux";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const mapState = ({ userResponses }) => ({
  user: userResponses.userProfile["info"],
});

function Tracks(props) {
  const { user } = useSelector(mapState);
  const { track, seedsLength, changePlayingTrack, auth } = props;
  const { name, album, external_urls } = track;
  if (!seedsLength) {
    return null;
  }
  return (
    <ChipTrack data-test="chipComponent">
      <DivTrack>
        <LineTrack />
        <span>
          <IMGTrack
            data-test="chipIMG"
            src={album?.images[0]?.url || "/images/wrapper.jpg"}
            width="40x"
            height="auto"
          />
          <TextTrack>{name}</TextTrack>
        </span>
        <span>
          <div></div>
          {track?.preview_url || (auth && user?.product === "premium") ? (
            <PlayArrowIcon
              onClick={() => {
                changePlayingTrack(track, "m");
              }}
            />
          ) : (
            <a
              target="_blank"
              rel="noreferrer"
              href={external_urls["spotify"] || ""}
            >
              <img
                alt="spotify Logo"
                width="35px"
                height="35px"
                src="/images/spotifyLogo.svg"
              />
            </a>
          )}
        </span>
      </DivTrack>
    </ChipTrack>
  );
}

export default Tracks;
