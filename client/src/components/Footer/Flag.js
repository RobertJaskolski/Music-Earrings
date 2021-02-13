import React from "react";
import styled from "styled-components";
import poland from "../../images/poland.png";
import PropTypes from "prop-types";

const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export function Flag(props) {
  const { lang } = props;
  if (!lang) {
    return null;
  }
  return (
    <FlagBox data-test='FlagComponent'>
      <img
        alt='lang'
        width='100%'
        height='100%'
        src={poland}
        data-test='FlagIMG'
      />
    </FlagBox>
  );
}

Flag.propTypes = {
  lang: PropTypes.string,
};

export default Flag;
