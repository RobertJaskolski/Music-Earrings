import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

//Artist
export const DivArtistPhone = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const IMGArtistPhone = styled.img`
  border-radius: 5px 5px 0px 0px;
  flex-basis: auto;
`;

export const H4ArtistPhone = styled.h4`
  flex-basis: 95%;
  background-color: #1db954;
  text-align: center;
  padding: 5px;
  border-radius: 3px;
  margin: 0px;
`;

export const SpanArtistPhone = styled.span`
  flex-basis: 95%;
`;
//Artist skelton
export const StyledSkeletonIMGArtistPhone = styled(Skeleton)`
  background-color: #1db954;
  border-radius: 5px 5px 0px 0px;
`;
export const StyledSkeletonTextArtistPhone = styled(Skeleton)`
  height: 65px;
  width: 100%;
  background-color: #1db954;
  border-radius: 3px;
`;
//Track

//Track skelton
