import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonIMG = styled(Skeleton)`
  position: absolute;
  background-color: #1db954;
`;
const StyledSkeletonText = styled(Skeleton)`
  height: 35px;
  background-color: #1db954;
  margin-left: 55px;
`;

const Chip = styled.div`
  flex-basis: 95%;
  border-radius: 5px;
  margin-bottom: 25px;
  opacity: 0.8;
`;

export default function SkeletonArtist() {
  return (
    <Chip>
      <StyledSkeletonIMG variant='rect' width={55} height={55} />
      <StyledSkeletonText variant='rect' />
    </Chip>
  );
}
