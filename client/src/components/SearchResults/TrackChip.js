import React from "react";
import PropTypes from "prop-types";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import QueueIcon from "@material-ui/icons/Queue";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ChipTrack, DivTrack, IMGTrack } from "./style/style";
import { DivTrackPhone, Line, TextTrackPhone } from "./style/phone.style";
function TrackChip(props) {
  const { track, addToFilters, auth } = props;
  const changeChip = useMediaQuery("(min-width:1000px)");
  const { name, album, external_urls } = track;
  if (!name) {
    return null;
  }
  return (
    <ChipTrack data-test='chipComponent' desktop={changeChip}>
      {changeChip ? (
        <DivTrack>
          <span>
            <PlayArrowIcon />
            <IMGTrack
              data-test='chipIMG'
              src={album?.images[0]?.url || "/images/wrapper.jpg"}
              width='40x'
              height='auto'
            />
            <div>{name}</div>
          </span>
          <span>
            {auth ? (
              <Tooltip
                style={
                  auth ? { display: "inline-block" } : { color: "#282828" }
                }
                title='Add to quequ'
              >
                <PlaylistAddIcon />
              </Tooltip>
            ) : (
              <Tooltip title='Listen on Spotify'>
                <a target='_blank' href={external_urls["spotify"] || ""}>
                  <img
                    alt='spotify Logo'
                    width='35px'
                    height='35px'
                    src='/images/spotifyLogo.svg'
                  />
                </a>
              </Tooltip>
            )}
            <Tooltip title='Add to filters for generate playlist'>
              <QueueIcon onClick={() => addToFilters(track)} />
            </Tooltip>
          </span>
        </DivTrack>
      ) : (
        <DivTrackPhone>
          <Line />
          <span>
            <IMGTrack
              data-test='chipIMG'
              src={album?.images[0]?.url || "/images/wrapper.jpg"}
              width='40x'
              height='auto'
            />
            <TextTrackPhone>{name}</TextTrackPhone>
          </span>
          <span>
            <div>
              {auth ? (
                <PlaylistAddIcon />
              ) : (
                <a target='_blank' href={external_urls["spotify"] || ""}>
                  <img
                    alt='spotify Logo'
                    width='35px'
                    height='35px'
                    src='/images/spotifyLogo.svg'
                  />
                </a>
              )}
              <QueueIcon onClick={() => addToFilters(track)} />
            </div>
            <PlayArrowIcon />
          </span>
        </DivTrackPhone>
      )}
    </ChipTrack>
  );
}

TrackChip.propTypes = {
  name: PropTypes.string,
  album: PropTypes.object,
};

export default TrackChip;
