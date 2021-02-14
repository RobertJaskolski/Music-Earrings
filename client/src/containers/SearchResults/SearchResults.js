import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ArtistChip, TrackChip } from "../../components/SearchResults";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 10px 0px 5px 5px;
  padding: 0;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Section = styled.section`
  border-radius: 5px;
`;

function Search(props) {
  const { searchTracks, searchArtists, loading } = props;
  return (
    <Grid id='searchBox' item>
      <Section>
        <H1>Search Results</H1>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Div>
              {searchArtists.map((item) => {
                if (!item.name.includes("feat"))
                  return <ArtistChip key={item.id} {...item} />;
              })}
            </Div>
          </Grid>
          <Grid item sm={6} xs={12}>
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
  };
};

export default connect(mapStateToProps, {})(Search);
