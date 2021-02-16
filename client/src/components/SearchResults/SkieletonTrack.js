import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonText = styled(Skeleton)`
  height: 32px;
  background-color: #1db954;
`;

const Chip = styled.div`
  flex-basis: 95%;
  border-radius: 5px;
  margin-bottom: 5px;
  opacity: 0.8;
`;

export default function SkieletonTrack(props) {
  return (
    <Chip>
      <StyledSkeletonText variant='rect' />
    </Chip>
  );
}
