import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Chip = styled.div`
  display: inline-block;
  background-color: #1db954;
  opacity: 0.75;
  font-size: 10px;
  margin: 2px 2px;
  border: 1px solid #1db954;
  padding: 5px 10px;
  border-radius: 25px;
  transition-duration: 250ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function ArtistChip(props) {
  const { name } = props;
  return <Chip>{name}</Chip>;
}

ArtistChip.propTypes = {};

export default ArtistChip;
