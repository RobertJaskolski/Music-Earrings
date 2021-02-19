import React from "react";
import { StyledSkeletonTextTrack, ChipSkeltonTrack } from "./style/style";
import { Line } from "./style/phone.style";

export default function SkieletonTrack({ changeChip }) {
  return (
    <ChipSkeltonTrack>
      {changeChip ? (
        <StyledSkeletonTextTrack
          desktop={changeChip.toString()}
          variant='rect'
        />
      ) : (
        <div>
          <Line />
          <StyledSkeletonTextTrack
            desktop={changeChip.toString()}
            height={70}
            variant='rect'
          />
        </div>
      )}
    </ChipSkeltonTrack>
  );
}
