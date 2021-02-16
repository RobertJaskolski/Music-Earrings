import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Chip = styled.div`
  flex-basis: 95%;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  min-height: 35px;
  background-color: #1db954;
  opacity: 0.8;
  transition-duration: 300ms;
  &:hover {
    opacity: 1;
  }
`;

const IMG = styled.img`
  position: absolute;
  margin-right: 5px;
`;

const H3 = styled.h3`
  margin: 0px 0px 0px 60px;
  padding: 0px;
`;

function ArtistChip(props) {
  const { name, images } = props;
  if (!name) {
    return null;
  }
  return (
    <Chip data-test='chipComponent'>
      <IMG
        data-test='chipIMG'
        height='55px'
        width='55px'
        src={images[0]?.url || "/images/wrapper.jpg"}
        alt={name}
      />
      <H3 data-test='chipText'>{name}</H3>
    </Chip>
  );
}

ArtistChip.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ArtistChip;
