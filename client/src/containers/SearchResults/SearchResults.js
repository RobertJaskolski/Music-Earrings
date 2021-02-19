import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ArtistChip,
  TrackChip,
  SkeletonArtist,
  SkieletonTrack,
} from "../../components/SearchResults";
import { Section, Div, H1 } from "./style/style";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";

function SearchResults(props) {
  const {
    searchTracks,
    searchArtists,
    loading,
    search,
    auth,
    addTrackToFiltr,
    addArtistToFiltr,
    filtersLength,
  } = props;
  const showSearch = search ? true : false;
  const addToFilters = (item) => {
    if (filtersLength < 5) {
      if (item.type === "track") addTrackToFiltr(item);
      else if (item.type === "artist") addArtistToFiltr(item);
    }
  };
  return (
    <Section id='searchBox' active={showSearch}>
      {loading ? (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            <Div>
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
              <SkeletonArtist />
            </Div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            <Div>
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
              <SkieletonTrack />
            </Div>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            {searchArtists.length ? (
              <Div>
                {searchArtists.map((item) => {
                  return (
                    !item.name.includes("feat") && (
                      <ArtistChip
                        addToFilters={addToFilters}
                        key={item.id}
                        artist={item}
                        auth={auth}
                      />
                    )
                  );
                })}
              </Div>
            ) : (
              <Div>
                <H1 active={showSearch}>No results</H1>
              </Div>
            )}
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            {searchTracks.length ? (
              <Div>
                {searchTracks.map((item) => {
                  return (
                    <TrackChip
                      key={item.id}
                      track={item}
                      auth={auth}
                      addToFilters={addToFilters}
                    />
                  );
                })}
              </Div>
            ) : (
              <Div>
                <H1 active={showSearch}>No results</H1>
              </Div>
            )}
          </Grid>
        </Grid>
      )}
    </Section>
  );
}

SearchResults.propTypes = {
  searchTracks: PropTypes.array,
  searchArtists: PropTypes.array,
  loading: PropTypes.bool,
  search: PropTypes.string,
  auth: PropTypes.bool,
  addTrackToFiltr: PropTypes.func,
  addArtistToFiltr: PropTypes.func,
  filtersLength: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    searchTracks: state.SpotifyResponses["tracks"],
    searchArtists: state.SpotifyResponses["artists"],
    loading: state.SpotifyResponses["loading"],
    search: state.search["searchText"],
    filtersLength:
      state.filtrsGeneratePlaylist["artistSeeds"].length +
      state.filtrsGeneratePlaylist["trackSeeds"].length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTrackToFiltr: (track) => {
      dispatch(filtersActions.addTrack(track));
    },
    addArtistToFiltr: (artist) => {
      dispatch(filtersActions.addArtist(artist));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
