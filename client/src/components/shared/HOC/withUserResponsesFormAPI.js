import React, { Component } from "react";
import { userResponseActions } from "../../../reducers/userResponsesFromAPI";
import { connect } from "react-redux";
import { compose } from "redux";

const withUserResponsesFromAPI = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const {
        userTracklists,
        userProfile,
        userFavoriteArtists,
        userTracklistsLoading,
        userProfileLoading,
        userFavoriteArtistsLoading,
        clearUserTracklists,
        clearUserProfile,
        clearUserFavoriteArtists,
        ...rest
      } = this.props;
      return (
        <WrappedComponent
          {...rest}
          userTracklists={userTracklists}
          userProfile={userProfile}
          userFavoriteArtists={userFavoriteArtists}
          userTracklistsLoading={userTracklistsLoading}
          userProfileLoading={userProfileLoading}
          userFavoriteArtistsLoading={userFavoriteArtistsLoading}
          clearUserFavoriteArtists={clearUserFavoriteArtists}
          clearUserProfile={clearUserProfile}
          clearUserTracklists={clearUserTracklists}
        />
      );
    }
  }
  return HOC;
};

const mapStateToProps = (state) => ({
  userTracklists: state.userResponses.tracklists["tracklists"],
  userProfile: state.userResponses.userProfile["info"],
  userFavoriteArtists: state.userResponses.favoriteArtists["artists"],
  userTracklistsLoading: state.userResponses.tracklists["loading"],
  userProfileLoading: state.userResponses.userProfile["loading"],
  userFavoriteArtistsLoading: state.userResponses.favoriteArtists["loading"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearUserTracklists: () => {
      dispatch(userResponseActions.successUserTracklists({ tracklists: [] }));
    },
    clearUserProfile: () => {
      dispatch(userResponseActions.successUserTracklists({ info: {} }));
    },
    clearUserFavoriteArtists: () => {
      dispatch(userResponseActions.successUserTracklists({ artists: [] }));
    },
  };
};

const withUserResponsesFromAPIState = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUserResponsesFromAPI
);

export default withUserResponsesFromAPIState;
