// Import outside
import React, { useEffect } from "react";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
// Import utils, API's and etc.
import API from "../../api/SpotifyAPI";
import MyAPI from "../../api/MyAPI";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
// Import Components
import {
  Filters,
  TracksAndArtists,
  SaveButton,
  Tracks,
} from "../../components/Tracklist";
// Import Styles
import { Div, Line, H2, Span } from "./style/style";

const CssLinearProgress = withStyles(() => ({
  root: {
    height: 7,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1ed760",
  },
}))(LinearProgress);

function Tracklist({
  seedArtists,
  seedTracks,
  deleteArtist,
  deleteTrack,
  filtersLength,
  SpotifyGetRecommendations,
  MyAPIGetRecommendations,
  auth,
  recommendedTracks,
  loadingRecommendedTracks,
  clearRecommendedTracks,
  changeTracklistName,
  tracklistName,
  clearTracklistName,
  SpotifyCreatePlaylist,
}) {
  const handleChangeTracklistName = (event) => {
    changeTracklistName(event.target.value);
  };

  const handleSaveTracklistName = () => {
    if (tracklistName) {
      SpotifyCreatePlaylist();
      clearTracklistName();
    }
  };

  const handleDeleteArtist = (artist) => {
    deleteArtist(artist);
    if (filtersLength === 1) {
      clearRecommendedTracks();
      clearTracklistName();
    }
  };

  const handleDeleteTrack = (track) => {
    deleteTrack(track);
    if (!filtersLength === 1) {
      clearRecommendedTracks();
      clearTracklistName();
    }
  };

  useEffect(() => {
    if (seedArtists.length > 0 || seedTracks.length > 0) {
      if (auth) {
        SpotifyGetRecommendations();
      } else {
        MyAPIGetRecommendations();
      }
    }
  }, [
    seedArtists,
    seedTracks,
    SpotifyGetRecommendations,
    MyAPIGetRecommendations,
    auth,
  ]);

  return (
    <Div>
      <main style={{ width: "100%" }}>
        <H2>Tracklist</H2>
        <Line />
        <Filters auth={auth} />
        {filtersLength ? (
          <TracksAndArtists
            handleDeleteArtist={handleDeleteArtist}
            handleDeleteTrack={handleDeleteTrack}
            artists={seedArtists}
            tracks={seedTracks}
          />
        ) : null}
        <Span>{loadingRecommendedTracks && <CssLinearProgress />}</Span>
        {recommendedTracks?.length > 0 &&
          recommendedTracks?.map((track) => {
            return <Tracks track={track} key={track.id} />;
          })}

        <SaveButton
          disabledName={!recommendedTracks?.length && true}
          disabledButton={!tracklistName && true}
          tracklistName={tracklistName}
          handleTextField={handleChangeTracklistName}
          handleButton={handleSaveTracklistName}
          auth={auth}
        />
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
    changeTracklistName: (name) => {
      dispatch(filtersActions.addNameTracklist(name));
    },
    clearTracklistName: () => {
      dispatch(filtersActions.clearNameTracklist());
    },
    SpotifyGetRecommendations: () => dispatch(API.GetRecommendations()),
    MyAPIGetRecommendations: () => dispatch(MyAPI.GetRecommendations()),
    SpotifyCreatePlaylist: () => dispatch(API.CreatePlaylist()),
  };
};
const mapStateToProps = (state) => {
  return {
    seedArtists: state.filtrsGeneratePlaylist["artistSeeds"],
    seedTracks: state.filtrsGeneratePlaylist["trackSeeds"],
    filtersLength:
      state.filtrsGeneratePlaylist["artistSeeds"].length +
      state.filtrsGeneratePlaylist["trackSeeds"].length,
    tracklistName: state.filtrsGeneratePlaylist["tracklistName"],
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
