import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import QueueIcon from "@material-ui/icons/Queue";
import Tooltip from "@material-ui/core/Tooltip";

const Chip = styled.div`
  flex-basis: 95%;
  width: 100%;
  background-color: #1db954;
  margin-bottom: 5px;
  border-radius: 2px;
  min-height: 40px;
  opacity: 0.8;
  transition-duration: 300ms;
  span:first-child svg {
    transition: all 0.3s linear;
    opacity: 0;
    position: absolute;
    z-index: 10;
    font-size: 40px;
  }
  :hover {
    opacity: 1;
    span:first-child svg {
      opacity: 1;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 85%;
  span > div {
    margin-left: 45px;
    padding-top: 10px;
  }
  span:last-of-type {
    flex-basis: 15%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    svg {
      margin-right: 5px;
      transition: all 0.3s linear;
      font-size: 35px;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
    img {
      margin-right: 5px;
      opacity: 0.6;
      transition: all 0.3s linear;
      font-size: 35px;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  }
`;
const IMG = styled.img`
  position: absolute;
`;
function TrackChip(props) {
  const { name, album, auth, external_urls } = props;
  if (!name) {
    return null;
  }
  return (
    <Chip data-test='chipComponent'>
      <Div>
        <span>
          <PlayArrowIcon />
          <IMG
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
              style={auth ? { display: "inline-block" } : { color: "#282828" }}
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
            <QueueIcon />
          </Tooltip>
        </span>
      </Div>
    </Chip>
  );
}

TrackChip.propTypes = {
  name: PropTypes.string,
  album: PropTypes.object,
};

export default TrackChip;
