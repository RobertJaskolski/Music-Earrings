import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ArtistChip, TrackChip } from "../../components/SearchResults";

function Search(props) {
  const { searchTracks, searchArtists, loading } = props;
  return (
    <Grid item>
      <section>
        <Grid container>
          <Grid item xs={12}>
            {searchArtists.map((item) => {
              return <ArtistChip key={item.id} {...item} />;
            })}
          </Grid>
          <Grid item xs={12}>
            {searchTracks.map((item) => {
              return <TrackChip key={item.id} {...item} />;
            })}
          </Grid>
        </Grid>
      </section>
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
