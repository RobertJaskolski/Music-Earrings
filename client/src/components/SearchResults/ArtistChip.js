import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import QueueIcon from "@material-ui/icons/Queue";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Chip = styled.div`
  flex-basis: 95%;
  border-radius: 5px;
  margin-bottom: 35px;
  flex-wrap: wrap;
  min-height: 40px;
  background-color: #1db954;
  opacity: 0.8;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
  }
  svg {
    font-size: 35px;
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IMG = styled.img`
  position: absolute;
  margin-right: 5px;
  border-radius: 5px;
`;

const H2 = styled.h2`
  margin: 0px 0px 0px 70px;
  padding: 0px;
`;

function ArtistChip(props) {
  const { name, images, auth } = props;
  const changeNChip = useMediaQuery("(min-width:1280px)");
  if (!name) {
    return null;
  }
  return (
    <Chip data-test='chipComponent'>
      <Div>
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
      </Div>
    </Chip>
  );
}

ArtistChip.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ArtistChip;
