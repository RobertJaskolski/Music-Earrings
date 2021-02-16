import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ArtistChip, TrackChip } from "../../components/SearchResults";
import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Section = styled.section`
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease-out;
  height: auto;
  transform-origin: top;
  ${({ active }) =>
    active &&
    css`
      transform: scaleY(1);
    `}
  ${({ active }) =>
    !active &&
    css`
      transform: scaleY(0);
    `}
`;

function Search(props) {
  const { searchTracks, searchArtists, loading, search } = props;
  return (
    <Grid id='searchBox' item>
      <Section active={search ? true : false}>
        <Grid container>
          <Grid item lg={6} xs={12}>
            <h1>Artists</h1>
            <Div>
              {searchArtists.map((item) => {
                if (!item.name.includes("feat"))
                  return <ArtistChip key={item.id} {...item} />;
              })}
            </Div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <h1>Tracks</h1>
            <Div>
              {searchTracks.map((item) => {
                return <TrackChip key={item.id} {...item} />;
              })}
            </Div>
          </Grid>
        </Grid>
      </Section>
    </Grid>
  );
}

Search.propTypes = {};

const mapStateToProps = (state) => {
  return {
    searchTracks: state.SpotifyResponses["tracks"],
    searchArtists: state.SpotifyResponses["artists"],
    loading: state.SpotifyResponses["loading"],
    search: state.search["searchText"],
  };
};

export default connect(mapStateToProps, {})(Search);
