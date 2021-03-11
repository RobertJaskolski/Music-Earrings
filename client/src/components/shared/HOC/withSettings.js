import React, { Component } from "react";
import { clientSettingsActions } from "../../../reducers/clientSettings";
import { connect } from "react-redux";
import { compose } from "redux";

const withSettings = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const {
        artistSeeds,
        trackSeeds,
        limit,
        energy,
        popularity,
        danceable,
        tracklistName,
        searchText,
        addTrackToSeeds,
        addArtistToSeeds,
        deleteTrackFromSeeds,
        deleteArtistFromSeeds,
        setLimit,
        setDanceable,
        setEnergy,
        setPopularity,
        setSearchText,
        setTracklistName,
        ...rest
      } = this.props;
      return (
        <WrappedComponent
          artistSeeds={artistSeeds}
          trackSeeds={trackSeeds}
          limit={limit}
          energy={energy}
          popularity={popularity}
          danceable={danceable}
          tracklistName={tracklistName}
          searchText={searchText}
          addTrackToSeeds={addTrackToSeeds}
          addArtistToSeeds={addArtistToSeeds}
          deleteTrackFromSeeds={deleteTrackFromSeeds}
          deleteArtistFromSeeds={deleteArtistFromSeeds}
          setLimit={setLimit}
          setDanceable={setDanceable}
          setEnergy={setEnergy}
          setPopularity={setPopularity}
          setSearchText={setSearchText}
          setTracklistName={setTracklistName}
          {...rest}
        />
      );
    }
  }
  return HOC;
};

const mapStateToProps = (state) => ({
  artistSeeds: state.settings.filters["artistSeeds"],
  trackSeeds: state.settings.filters["trackSeeds"],
  limit: state.settings.filters["limit"],
  energy: state.settings.filters["energy"],
  popularity: state.settings.filters["popularity"],
  danceable: state.settings.filters["danceable"],
  tracklistName: state.settings.texts["tracklistName"],
  searchText: state.settings.texts["searchText"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTrackToSeeds: (track) => {
      dispatch(clientSettingsActions.addTrackToSeeds({ track }));
    },
    addArtistToSeeds: (artist) => {
      dispatch(clientSettingsActions.addArtistToSeeds({ artist }));
    },
    deleteTrackFromSeeds: (track) => {
      dispatch(clientSettingsActions.deleteTrackFromSeeds({ track }));
    },
    deleteArtistFromSeeds: (artist) => {
      dispatch(clientSettingsActions.deleteArtistFromSeeds({ artist }));
    },
    setLimit: (limit) => {
      dispatch(clientSettingsActions.setLimit({ limit }));
    },
    setDanceable: (danceable) => {
      dispatch(clientSettingsActions.setDanceable({ danceable }));
    },
    setEnergy: (energy) => {
      dispatch(clientSettingsActions.setEnergy({ energy }));
    },
    setPopularity: (popularity) => {
      dispatch(clientSettingsActions.setPopularity({ popularity }));
    },
    setSearchText: (searchText) => {
      dispatch(clientSettingsActions.setSearchText({ searchText }));
    },
    setTracklistName: (tracklistName) => {
      dispatch(clientSettingsActions.setTracklistName({ tracklistName }));
    },
  };
};

const withSettingsState = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSettings
);

export default withSettingsState;
