import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { playerNotAuthActions } from "../../../reducers/playerNotAuth";

const withPlayerNotAuth = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const {
        queueTracks,
        addTrackToQueue,
        deleteTrackFromQueue,
        clearQueue,
        ...rest
      } = this.props;
      return (
        <WrappedComponent
          queueTracks={queueTracks}
          addTrackToQueue={addTrackToQueue}
          deleteTrackFromQueue={deleteTrackFromQueue}
          clearQueue={clearQueue}
          {...rest}
        />
      );
    }
  }

  return HOC;
};

const mapStateToProps = (state) => ({
  playingTrack: state.playerNotAuth["track"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayingTrack: (track) => {
      dispatch(playerNotAuthActions.addTrackToNotAuthPlayer({ track }));
    },
  };
};

const withPlayerNotAuthState = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlayerNotAuth
);

export default withPlayerNotAuthState;
