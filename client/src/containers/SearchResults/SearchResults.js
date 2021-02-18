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

function SearchResults(props) {
  const { searchTracks, searchArtists, loading, search, auth } = props;
  const showSearch = search ? true : false;
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
                      <ArtistChip key={item.id} {...item} auth={auth} />
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
                  return <TrackChip key={item.id} {...item} auth={auth} />;
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
};

const mapStateToProps = (state) => {
  return {
    searchTracks: state.SpotifyResponses["tracks"],
    searchArtists: state.SpotifyResponses["artists"],
    loading: state.SpotifyResponses["loading"],
    search: state.search["searchText"],
  };
};

export default connect(mapStateToProps, {})(SearchResults);
