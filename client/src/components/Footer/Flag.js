import React from "react";
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

export default Flag;
