// Import outside
import React, { useEffect } from "react";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
// Import utils, API's and etc.
import API from "../../api/SpotifyAPI";
import MyAPI from "../../api/MyAPI";
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
  SpotifyGetRecommendations,
  MyAPIGetRecommendations,
  auth,
  recommendedTracks,
  loadingRecommendedTracks,
  clearRecommendedTracks,
  SpotifyCreatePlaylist,
  deleteTrackFromSeeds,
  deleteArtistFromSeeds,
  artistSeeds,
  trackSeeds,
  tracklistName,
  setTracklistName,
  setDanceable,
  setEnergy,
  setPopularity,
  setLimit,
  limit,
  changePlayingTrack,
}) {
  const seedsLength = artistSeeds.length + trackSeeds.length;
  const handleChangeTracklistName = (event) => {
    setTracklistName(event.target.value);
  };

  const handleSaveTracklistName = () => {
    if (tracklistName) {
      SpotifyCreatePlaylist();
      setTracklistName("");
    }
  };

  const handleDeleteArtist = (artist) => {
    deleteArtistFromSeeds(artist);
    if (seedsLength === 1) {
      clearRecommendedTracks();
      setTracklistName("");
    }
  };

  const handleDeleteTrack = (track) => {
    deleteTrackFromSeeds(track);
    if (!seedsLength === 1) {
      clearRecommendedTracks();
      setTracklistName("");
    }
  };

  useEffect(() => {
    if (artistSeeds.length > 0 || trackSeeds.length > 0) {
      if (auth) {
        SpotifyGetRecommendations();
      } else {
        MyAPIGetRecommendations();
      }
    }
  }, [
    artistSeeds,
    trackSeeds,
    SpotifyGetRecommendations,
    MyAPIGetRecommendations,
    auth,
  ]);

  return (
    <Div>
      <main style={{ width: "100%" }}>
        <H2>Tracklist</H2>
        <Line />
        <Filters
          auth={auth}
          setDanceable={setDanceable}
          setEnergy={setEnergy}
          setPopularity={setPopularity}
          setLimit={setLimit}
          limit={limit}
          trackSeeds={trackSeeds}
          artistSeeds={artistSeeds}
        />
        {seedsLength ? (
          <TracksAndArtists
            handleDeleteArtist={handleDeleteArtist}
            handleDeleteTrack={handleDeleteTrack}
            artists={artistSeeds}
            tracks={trackSeeds}
          />
        ) : null}
        <Span>{loadingRecommendedTracks && <CssLinearProgress />}</Span>
        {recommendedTracks?.length > 0 &&
          recommendedTracks?.map((track) => {
            return (
              <Tracks
                auth={auth}
                track={track}
                key={track.id}
                seedsLength={seedsLength}
                changePlayingTrack={changePlayingTrack}
              />
            );
          })}

        <SaveButton
          disabledName={!seedsLength && true}
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
    SpotifyGetRecommendations: () => dispatch(API.GetRecommendations()),
    MyAPIGetRecommendations: () => dispatch(MyAPI.GetRecommendations()),
    SpotifyCreatePlaylist: () => dispatch(API.CreatePlaylist()),
  };
};

export default connect(null, mapDispatchToProps)(Tracklist);
