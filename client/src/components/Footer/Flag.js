import React from "react";
import PropTypes from "prop-types";
import { FlagBox } from "./style/style";

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
        src='/images/poland.ico'
        data-test='FlagIMG'
      />
    </FlagBox>
  );
}

Flag.propTypes = {
  lang: PropTypes.string,
};

export default Flag;
