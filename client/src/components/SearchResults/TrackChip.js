import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Chip = styled.div`
  flex-basis: 95%;
  width: 100%;
  background-color: #1db954;
  margin-bottom: 3px;
  border-radius: 2px;
  height: 32px;
  opacity: 0.8;
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
  }
`;
const IMG = styled.img`
  float: left;
`;
function TrackChip(props) {
  const { name, album } = props;
  if (!name) {
    return null;
  }
  return (
    <Chip data-test='chipComponent'>
      <p data-test='chipText'>
        <IMG
          data-test='chipIMG'
          src={album?.images[0]?.url || ""}
          width='32px'
          height='32px'
        />{" "}
        {name}
      </p>
    </Chip>
  );
}

TrackChip.propTypes = {
  name: PropTypes.string,
  album: PropTypes.object,
};

export default TrackChip;
