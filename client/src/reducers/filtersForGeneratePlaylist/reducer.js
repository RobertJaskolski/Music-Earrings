import types from "../../actions/filtersForGeneratePlaylist/types";

const INIT_STATE = {
  artistSeeds: [],
  trackSeeds: [],
};
const filterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_ARTIST:
      if (!state.artistSeeds.includes(action.payload))
        return {
          ...state,
          artistSeeds: [...state.artistSeeds, action.payload],
        };
      else return state;

    case types.DELETE_ARTIST:
      const newArtistSeeds = state.artistSeeds.filter((item) => {
        if (item !== action.payload) return item;
      });
      return { ...state, artistSeeds: newArtistSeeds };

    case types.ADD_TRACK:
      if (!state.trackSeeds.includes(action.payload))
        return { ...state, trackSeeds: [...state.trackSeeds, action.payload] };
      else return state;

    case types.DELETE_TRACK:
      const newTrackSeeds = state.trackSeeds.filter((item) => {
        if (item !== action.payload) return item;
      });
      return { ...state, trackSeeds: newTrackSeeds };

    case types.CLEAR_FILTERS:
      return INIT_STATE;

    default:
      return state;
  }
};
export default filterReducer;
