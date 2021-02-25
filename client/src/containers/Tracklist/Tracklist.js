import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Div, Line, H2 } from "./style/style";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { Filters, TracksAndArtists } from "../../components/Tracklist";
import API from "../../api/SpotifyAPI";

function Tracklist(props) {
  const {
    seedArtists,
    seedTracks,
    deleteArtist,
    deleteTrack,
    filtersLength,
    GetRecommendationsSpotify,
  } = props;
  const handleDeleteArtist = (artist) => {
    deleteArtist(artist);
  };
  const handleDeleteTrack = (track) => {
    deleteTrack(track);
  };
  useEffect(() => {
    if (seedArtists.length > 0 || seedTracks.length > 0) {
      GetRecommendationsSpotify();
    }
  }, [seedArtists, seedTracks]);
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
    GetRecommendationsSpotify: () => dispatch(API.GetRecommendations()),
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
