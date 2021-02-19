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

export default function SkeletonArtist({ changeChip }) {
  return (
    <ChipSkeltonArtist desktop={changeChip}>
      {changeChip ? (
        <Div>
          <StyledSkeletonIMGArtist variant='rect' width={65} height={65} />
          <StyledSkeletonTextArtist variant='rect' />
        </Div>
      ) : (
        <DivArtistPhone>
          <StyledSkeletonIMGArtistPhone
            variant='rect'
            width={110}
            height={110}
          />
          <StyledSkeletonTextArtistPhone variant='rect' />
        </DivArtistPhone>
      )}
    </ChipSkeltonArtist>
  );
}
