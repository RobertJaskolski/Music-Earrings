import React from "react";
import { StyledSkeletonTextTrack, ChipSkeltonTrack } from "./style/style";
import { Line } from "./style/phone.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function SkieletonTrack() {
  const changeChip = useMediaQuery("(min-width:1000px)");
  return (
    <ChipSkeltonTrack>
      {changeChip ? (
        <StyledSkeletonTextTrack desktop={changeChip} variant='rect' />
      ) : (
        <div>
          <Line />
          <StyledSkeletonTextTrack
            desktop={changeChip}
            height={70}
            variant='rect'
          />
        </div>
      )}
    </ChipSkeltonTrack>
  );
}
