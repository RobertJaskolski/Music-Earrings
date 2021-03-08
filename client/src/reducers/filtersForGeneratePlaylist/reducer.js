import types from "../../actions/filtersForGeneratePlaylist/types";

const INIT_STATE = {
  artistSeeds: [],
  trackSeeds: [],
  limit: 25,
  energy: [0, 100],
  popularity: [0, 100],
  danceable: [0, 100],
  tracklistName: "",
};
const filterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_LIMIT:
      return { ...state, limit: action.payload };
    case types.DELETE_LIMIT:
      return { ...state, limit: 25 };
    case types.ADD_ENERGY:
      return { ...state, energy: action.payload };
    case types.DELETE_ENERGY:
      return { ...state, energy: [100, 0] };
    case types.ADD_POPULARITY:
      return { ...state, popularity: action.payload };
    case types.DELETE_POPULARITY:
      return { ...state, popularity: [100, 0] };
    case types.ADD_DANCEABLE:
      return { ...state, danceable: action.payload };
    case types.DELETE_DANCEABLE:
      return { ...state, danceable: [100, 0] };

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

    case types.ADD_NAME_TRACKLIST:
      return { ...state, tracklistName: action.payload };

    case types.DELETE_NAME_TRACKLIST:
      return { ...state, tracklistName: "" };

    case types.CLEAR_FILTERS:
      return INIT_STATE;

    default:
      return state;
  }
};
export default filterReducer;
