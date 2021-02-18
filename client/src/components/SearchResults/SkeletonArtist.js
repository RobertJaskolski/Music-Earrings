import React from "react";
import {
  ChipSkeltonArtist,
  Div,
  StyledSkeletonIMGArtist,
  StyledSkeletonTextArtist,
} from "./style/style";

import {
  DivArtistPhone,
  StyledSkeletonIMGArtistPhone,
  StyledSkeletonTextArtistPhone,
} from "./style/phone.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function SkeletonArtist() {
  const changeChip = useMediaQuery("(min-width:1000px)");

  return (
    <ChipSkeltonArtist desktop={changeChip}>
      {changeChip ? (
        <Div>
          <StyledSkeletonIMGArtist variant='rect' width={65} height={65} />
          <StyledSkeletonTextArtist variant='rect' />
        </Div>
      ) : (
        <DivArtistPhone>
          <StyledSkeletonIMGArtistPhone variant='rect' width={90} height={90} />
          <StyledSkeletonTextArtistPhone variant='rect' />
        </DivArtistPhone>
      )}
    </ChipSkeltonArtist>
  );
}
