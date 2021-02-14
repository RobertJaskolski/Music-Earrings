import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Chip = styled.div`
  display: inline-block;
  font-size: 10px;
  margin: 2px 2px;
  border: 1px solid #1db954;
  padding: 5px 10px;
  border-radius: 25px;
`;

function TrackChip(props) {
  const { name } = props;
  return <Chip>{name}</Chip>;
}

TrackChip.propTypes = {};

export default TrackChip;
