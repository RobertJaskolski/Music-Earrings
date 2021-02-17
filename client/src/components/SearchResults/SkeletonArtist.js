import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonIMG = styled(Skeleton)`
  position: absolute;
  background-color: #1db954;
  border-radius: 5px;
`;
const StyledSkeletonText = styled(Skeleton)`
  height: 40px;
  width: 100%;
  background-color: #1db954;
  margin-left: 65px;
  border-radius: 0px 5px 5px 0px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Chip = styled.div`
  flex-basis: 95%;
  margin-bottom: 35px;
  min-height: 40px;
`;

export default function SkeletonArtist() {
  return (
    <Chip>
      <Div>
        <StyledSkeletonIMG variant='rect' width={65} height={65} />
        <StyledSkeletonText variant='rect' />
      </Div>
    </Chip>
  );
}
