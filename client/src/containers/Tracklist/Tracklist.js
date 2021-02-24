import React from "react";
import PropTypes from "prop-types";
import { Div, Line, H2 } from "./style/style";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { Filters, TracksAndArtists } from "../../components/Tracklist";

function Tracklist(props) {
  const {
    seedArtists,
    seedTracks,
    deleteArtist,
    deleteTrack,
    filtersLength,
  } = props;
  const handleDeleteArtist = (artist) => {
    deleteArtist(artist);
  };
  const handleDeleteTrack = (track) => {
    deleteTrack(track);
  };
  return (
    <Div>
      <main style={{ width: "100%" }}>
        <H2>Tracklist</H2>
        <Line />
        <Filters />
        {filtersLength ? (
          <TracksAndArtists
            handleDeleteArtist={handleDeleteArtist}
            handleDeleteTrack={handleDeleteTrack}
            artists={seedArtists}
            tracks={seedTracks}
          />
        ) : null}
      </main>
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
    filtersLength:
      state.filtrsGeneratePlaylist["artistSeeds"].length +
      state.filtrsGeneratePlaylist["trackSeeds"].length,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
