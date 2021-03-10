// Import outside
import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
// Import utils, API's and etc.
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { searchActions } from "../../reducers/search";
// Import Components
import {
  ArtistChip,
  TrackChip,
  SkeletonArtist,
  SkieletonTrack,
} from "../../components/SearchResults";
// Import Styles
import { Section, Div, H1, DivX, DivNoResults } from "./style/style";

function SearchResults({
  artists,
  tracks,
  loadingArtistsAndTracks,
  search,
  auth,
  addTrackToFiltr,
  addArtistToFiltr,
  filtersLength,
  clearSearch,
  clearArtistsAndTracks,
}) {
  let changeChip = useMediaQuery("(min-width:1000px)");
  const showSearch = search ? true : false;
  const addToFilters = (item) => {
    if (filtersLength < 5) {
      if (item.type === "track") addTrackToFiltr(item);
      else if (item.type === "artist") addArtistToFiltr(item);
    }
  };
  return (
    <Section id='searchBox' active={showSearch}>
      {loadingArtistsAndTracks ? (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            <Div>
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
            </Div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            <Div>
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
            </Div>
          </Grid>
          <Grid item lg={11} xs={5}></Grid>
          <Grid item lg={1} xs={1}>
            <DivX>
              <CancelPresentationIcon
                onClick={() => {
                  clearSearch();
                  clearArtistsAndTracks();
                }}
              />
            </DivX>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Artists</H1>
            {artists.length ? (
              <Div>
                {artists.map((item) => {
                  return (
                    !item.name.includes("feat") && (
                      <ArtistChip
                        addToFilters={addToFilters}
                        key={item.id}
                        artist={item}
                        auth={auth}
                        changeChip={changeChip}
                      />
                    )
                  );
                })}
              </Div>
            ) : (
              <DivNoResults active={showSearch}>
                <H1 active={showSearch}>No results</H1>
              </DivNoResults>
            )}
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>Tracks</H1>
            {tracks.length ? (
              <Div>
                {tracks.map((item) => {
                  return (
                    <TrackChip
                      key={item.id}
                      track={item}
                      auth={auth}
                      addToFilters={addToFilters}
                      changeChip={changeChip}
                    />
                  );
                })}
              </Div>
            ) : (
              <DivNoResults active={showSearch}>
                <H1 active={showSearch}>No results</H1>
              </DivNoResults>
            )}
          </Grid>
          <Grid item lg={11} xs={5}></Grid>
          <Grid item lg={1} xs={1}>
            <DivX>
              <CancelPresentationIcon
                onClick={() => {
                  clearSearch();
                  clearArtistsAndTracks();
                }}
              />
            </DivX>
          </Grid>
        </Grid>
      )}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
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
    clearSearch: () => {
      dispatch(searchActions.clear());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
