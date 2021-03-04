import React, { useEffect } from "react";
import { Div, Line, H2 } from "./style/style";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { Filters, TracksAndArtists } from "../../components/Tracklist";
import API from "../../api/SpotifyAPI";
import MyAPI from "../../api/MyAPI";
import Tracks from "../../components/Tracklist/Tracks";
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
  } = props;
  const handleDeleteArtist = (artist) => {
    deleteArtist(artist);
  };
  const handleDeleteTrack = (track) => {
    deleteTrack(track);
  };
  useEffect(() => {
    if (seedArtists.length > 0 || seedTracks.length > 0) {
      if (auth) {
        SpotifyGetRecommendations();
      } else {
        MyAPIGetRecommendations();
      }
    }
  }, [seedArtists, seedTracks]);
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
        {recommendTracks["tracks"]?.length > 0 &&
          recommendTracks["tracks"]?.map((track) => {
            return <Tracks track={track} />;
          })}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
