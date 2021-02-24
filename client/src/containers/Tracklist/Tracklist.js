import React from "react";
import PropTypes from "prop-types";
import { Div, Line, H2 } from "./style/style";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";

function Tracklist(props) {
  const { seedArtists, seedTracks } = props;
  return (
    <Div>
      <H2>Tracklist</H2>
      <Line />
      {JSON.stringify(seedArtists)}
    </Div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArtist: (item) => {
      dispatch(filtersActions.deleteArtist(item));
    },
    deleteTrack: (item) => {
      dispatch(filtersActions.deleteTrack(item));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    seedArtists: state.filtrsGeneratePlaylist["artistSeeds"],
    seedTracks: state.filtrsGeneratePlaylist["trackSeeds"],
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
