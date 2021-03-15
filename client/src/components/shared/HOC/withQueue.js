import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { queueActions } from "../../../reducers/queue";

const withQueue = (WrappedComponent) => {
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
  queueTracks: state.queue["tracks"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTrackToQueue: (track) => {
      dispatch(queueActions.addTrackToQueue({ track }));
    },
    deleteTrackFromQueue: (track) => {
      dispatch(queueActions.deleteTrackFromQueue({ track }));
    },
    clearQueue: () => {
      dispatch(queueActions.clearQueue());
    },
  };
};

const withQueueState = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withQueue
);

export default withQueueState;
