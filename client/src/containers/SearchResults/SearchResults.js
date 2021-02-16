import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ArtistChip,
  TrackChip,
  SkeletonArtist,
  SkieletonTrack,
} from "../../components/SearchResults";
import styled, { css } from "styled-components";
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const H1 = styled.h1`
  transition: all 0.3s ease-out;
  ${({ active }) =>
    active &&
    css`
      font-size: 2.5em;
    `}
  ${({ active }) =>
    !active &&
    css`
      font-size: 0px;
    `}
`;
const Section = styled.section`
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease-out;
  min-height: 0px;
  transform-origin: top;
  ${({ active }) =>
    active &&
    css`
      min-height: 450px;
      transform: scaleY(1);
    `}
  ${({ active }) =>
    !active &&
    css`
      transform: scaleY(0);
      min-height: 0px;
    `}
`;

function Search(props) {
  const { searchTracks, searchArtists, loading, search } = props;
  const showSearch = search ? true : false;
  return (
    <Section id='searchBox' active={showSearch}>
      {loading ? (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            <Div>
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
            </Div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            <Div>
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
            </Div>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            {searchArtists.length ? (
              <Div>
                {searchArtists.map((item) => {
                  return (
                    !item.name.includes("feat") && (
                      <ArtistChip key={item.id} {...item} />
                    )
                  );
                })}
              </Div>
            ) : (
              <Div>
                <H1 active={showSearch}>No results</H1>
              </Div>
            )}
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            {searchTracks.length ? (
              <Div>
                {searchTracks.map((item) => {
                  return <TrackChip key={item.id} {...item} />;
                })}
              </Div>
            ) : (
              <Div>
                <H1 active={showSearch}>No results</H1>
              </Div>
            )}
          </Grid>
        </Grid>
      )}
    </Section>
  );
}

Search.propTypes = {
  searchTracks: PropTypes.array,
  searchArtists: PropTypes.array,
  loading: PropTypes.bool,
  search: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    searchTracks: state.SpotifyResponses["tracks"],
    searchArtists: state.SpotifyResponses["artists"],
    loading: state.SpotifyResponses["loading"],
    search: state.search["searchText"],
  };
};

export default connect(mapStateToProps, {})(Search);
