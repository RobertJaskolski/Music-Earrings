import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import QueueIcon from "@material-ui/icons/Queue";

const Chip = styled.div`
  flex-basis: 95%;
  border-radius: 5px;
  margin-bottom: 35px;
  flex-wrap: wrap;
  min-height: 45px;
  background-color: #1db954;
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
  }
  svg {
    font-size: 40px;
    cursor: pointer;
  }
`;

const IMG = styled.img`
  position: absolute;
  margin-right: 5px;
  border-radius: 4px 0px 4px 4px;
`;

const H2 = styled.h2`
  margin: 0px 0px 0px 70px;
  padding: 0px;
`;

function ArtistChip(props) {
  const { name, images, auth } = props;
  if (!name) {
    return null;
  }
  return (
    <Chip data-test='chipComponent'>
      <IMG
        data-test='chipIMG'
        height='65px'
        width='65px'
        src={images[0]?.url || "/images/wrapper.jpg"}
        alt={name}
      />
      <H2 data-test='chipText'>{name}</H2>
      <span>
        {auth ? (
          <Tooltip title='Add to quequ'>
            <QueueIcon />
          </Tooltip>
        ) : (
          <Tooltip title='Add to quequ'>
            <QueueIcon />
          </Tooltip>
        )}
      </span>
    </Chip>
  );
}

ArtistChip.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ArtistChip;
