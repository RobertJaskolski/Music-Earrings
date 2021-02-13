import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function SearchResults(props) {
  const { searchTracks, searchArtists, loading } = props;
  return (
    <Grid item>
      <section>
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid item sm={10} xs={12}>
            <h1>Artist</h1>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={10} xs={12}>
            <h2>Tracks</h2>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      </section>
    </Grid>
  );
}

SearchResults.propTypes = {};

const mapStateToProps = (state) => {
  return {
    searchTracks: state.SpotifyResponses["tracks"],
    searchArtists: state.SpotifyResponses["artists"],
    loading: state.SpotifyResponses["loading"],
  };
};

export default connect(mapStateToProps, {})(SearchResults);
