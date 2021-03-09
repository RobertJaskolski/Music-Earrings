import React, { Component } from "react";
import { responseActions } from "../../../reducers/responsesFromApi";
import { connect } from "react-redux";
import { compose } from "redux";

const withResponsesFromAPI = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const { artists, tracks, recommendedTracks, ...rest } = this.props;
      return (
        <WrappedComponent
          {...rest}
          artists={artists}
          tracks={tracks}
          recommendedTracks={recommendedTracks}
        />
      );
    }
  }
  return HOC;
};

const mapStateToProps = (state) => ({
  artists: state.responses.artistsAndTracks["artists"],
  tracks: state.responses.artistsAndTracks["tracks"],
  loadingArtistsAndTracks: state.responses.artistsAndTracks["loading"],
  recommendedTracks: state.responses.recommendedTracklist["tracklist"],
  loadingRecommendedTracks: state.responses.recommendedTracklist["loading"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearArtistsAndTracks: () => {
      dispatch(
        responseActions.successArtistsAndTracks({
          artists: [],
          tracks: [],
        })
      );
    },
    clearRecommendedTracks: () => {
      dispatch(
        responseActions.successRecommendedTracks({
          tracklist: [],
        })
      );
    },
  };
};

const withResponseFromAPIState = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withResponsesFromAPI
);

export default withResponseFromAPIState;
