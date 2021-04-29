import clientSettingsReducer, {
  clientSettingsTypes,
} from '../../reducers/clientSettings';

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
    tracklistName: '',
    searchText: '',
  },
};

describe('Settings reducer', () => {
  test('should return default state', () => {
    const newState = clientSettingsReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return new artists seed state', () => {
    const newArtist = { name: 'artist' };
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.ADD_ARTIST_SEED,
      payload: { artist: newArtist },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, artistSeeds: [newArtist] },
    });
  });

  test('should return new track seed state', () => {
    const newTrack = { name: 'track' };
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.ADD_TRACK_SEED,
      payload: { track: newTrack },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, trackSeeds: [newTrack] },
    });
  });

  test('should return deleted artists seed state', () => {
    const newArtist = { name: 'artist' };
    const newState = clientSettingsReducer(
      {
        ...INIT_STATE,
        filters: {
          ...INIT_STATE.filters,
          artistSeeds: [newArtist],
        },
      },
      {
        type: clientSettingsTypes.DELETE_ARTIST_SEED,
        payload: { artist: newArtist },
      }
    );
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return deleted track seed state', () => {
    const newTrack = { name: 'track' };
    const newState = clientSettingsReducer(
      {
        ...INIT_STATE,
        filters: {
          ...INIT_STATE.filters,
          trackSeeds: [newTrack],
        },
      },
      {
        type: clientSettingsTypes.DELETE_TRACK_SEED,
        payload: { track: newTrack },
      }
    );
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return new popularity state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_POPULARITY_FILTER,
      payload: { popularity: [0, 20] },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, popularity: [0, 20] },
    });
  });

  test('should return new danceable state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_DANCEALBE_FILTER,
      payload: { danceable: [0, 20] },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, danceable: [0, 20] },
    });
  });

  test('should return new limit state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_LIMIT_FILTER,
      payload: { limit: 21 },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, limit: 21 },
    });
  });

  test('should return new energy state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_ENERGY_FILTER,
      payload: { energy: [0, 20] },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      filters: { ...INIT_STATE.filters, energy: [0, 20] },
    });
  });

  test('should return new tracklist name state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_TRACKLIST_NAME,
      payload: { tracklistName: 'new tracklist' },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      texts: { ...INIT_STATE.texts, tracklistName: 'new tracklist' },
    });
  });

  test('should return new search test state', () => {
    const newState = clientSettingsReducer(undefined, {
      type: clientSettingsTypes.SET_SEARCH_TEXT,
      payload: { searchText: 'new search text' },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      texts: { ...INIT_STATE.texts, searchText: 'new search text' },
    });
  });
});
