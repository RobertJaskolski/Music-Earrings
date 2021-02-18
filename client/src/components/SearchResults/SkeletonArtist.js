import React from "react";
import {
  ChipSkeltonArtist,
  Div,
  StyledSkeletonIMGArtist,
  StyledSkeletonTextArtist,
} from "./style/style";

export default function SkeletonArtist() {
  return (
    <ChipSkeltonArtist>
      <Div>
        <StyledSkeletonIMGArtist variant='rect' width={65} height={65} />
        <StyledSkeletonTextArtist variant='rect' />
      </Div>
    </ChipSkeltonArtist>
  );
}
