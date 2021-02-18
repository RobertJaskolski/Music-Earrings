import React from "react";
import { StyledSkeletonTextTrack, ChipSkeltonTrack } from "./style/style";

export default function SkieletonTrack(props) {
  return (
    <ChipSkeltonTrack>
      <StyledSkeletonTextTrack variant='rect' />
    </ChipSkeltonTrack>
  );
}
