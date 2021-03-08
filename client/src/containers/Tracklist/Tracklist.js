import React, { useEffect } from "react";
import { Div, Line, H2, Span } from "./style/style";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import {
  Filters,
  TracksAndArtists,
  SaveButton,
} from "../../components/Tracklist";
import API from "../../api/SpotifyAPI";
import MyAPI from "../../api/MyAPI";
import Tracks from "../../components/Tracklist/Tracks";
import LinearProgress from "@material-ui/core/LinearProgress";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";
import { withStyles } from "@material-ui/core/styles";

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

function Tracklist(props) {
  const {
    seedArtists,
    seedTracks,
    deleteArtist,
    deleteTrack,
    filtersLength,
    SpotifyGetRecommendations,
    MyAPIGetRecommendations,
    auth,
    recommendTracks,
    loadingTracklist,
    clearTracklist,
  } = props;
  const handleDeleteArtist = (artist) => {
    deleteArtist(artist);
    if (filtersLength === 1) clearTracklist();
  };
  const handleDeleteTrack = (track) => {
    deleteTrack(track);

    if (!filtersLength === 1) clearTracklist();
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
        <Span>{loadingTracklist && <CssLinearProgress />}</Span>
        {recommendTracks["tracks"]?.length > 0 &&
          recommendTracks["tracks"]?.map((track) => {
            return <Tracks track={track} key={track.id} />;
          })}

        <SaveButton auth={auth} />
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
    clearTracklist: () => {
      dispatch(spotifyApiActions.clearTracklist());
    },
    SpotifyGetRecommendations: () => dispatch(API.GetRecommendations()),
    MyAPIGetRecommendations: () => dispatch(MyAPI.GetRecommendations()),
  };
};
const mapStateToProps = (state) => {
  return {
    seedArtists: state.filtrsGeneratePlaylist["artistSeeds"],
    seedTracks: state.filtrsGeneratePlaylist["trackSeeds"],
    recommendTracks: state.SpotifyResponses["tracklist"],
    filtersLength:
      state.filtrsGeneratePlaylist["artistSeeds"].length +
      state.filtrsGeneratePlaylist["trackSeeds"].length,
    loadingTracklist: state.SpotifyResponses["loadingTracklist"],
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
