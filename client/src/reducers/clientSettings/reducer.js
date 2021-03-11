import types from "./types";
const INIT_STATE = {
  filters: {
    artistSeeds: [],
    trackSeeds: [],
    limit: 25,
    energy: [0, 100],
    popularity: [0, 100],
    danceable: [0, 100],
  },
  texts: {
    tracklistName: "",
    searchText: "",
  },
};
const clientSettings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_ARTIST_SEED:
      if (!state.filters.artistSeeds.includes(action.payload.artist))
        return {
          ...state,
          filters: {
            ...state.filters,
            artistSeeds: [...state.filters.artistSeeds, action.payload.artist],
          },
        };
      else return state;
    case types.DELETE_ARTIST_SEED:
      const newArtistSeeds = state.filters.artistSeeds.filter((item) => {
        if (item !== action.payload.artist) return item;
      });
      return {
        ...state,
        filters: { ...state.filters, artistSeeds: newArtistSeeds },
      };
    case types.ADD_TRACK_SEED:
      if (!state.filters.trackSeeds.includes(action.payload.track))
        return {
          ...state,
          filters: {
            ...state.filters,
            trackSeeds: [...state.filters.trackSeeds, action.payload.track],
          },
        };
      else return state;
    case types.DELETE_TRACK_SEED:
      const newTrackSeeds = state.filters.trackSeeds.filter((item) => {
        if (item !== action.payload.track) return item;
      });
      return {
        ...state,
        filters: { ...state.filters, trackSeeds: newTrackSeeds },
      };
    case types.SET_LIMIT_FILTER:
      return {
        ...state,
        filters: { ...state.filters, limit: action.payload.limit },
      };
    case types.SET_POPULARITY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, popularity: action.payload.popularity },
      };
    case types.SET_ENERGY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, energy: action.payload.energy },
      };
    case types.SET_DANCEALBE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, danceable: action.payload.danceable },
      };
    case types.SET_TRACKLIST_NAME:
      return {
        ...state,
        texts: { ...state.texts, tracklistName: action.payload.tracklistName },
      };
    case types.SET_SEARCH_TEXT:
      return {
        ...state,
        texts: { ...state.texts, searchText: action.payload.searchText },
      };
    default:
      return state;
  }
};

export default clientSettings;
