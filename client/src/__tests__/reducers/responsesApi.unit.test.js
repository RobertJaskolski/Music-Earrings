import responseReducer, {
  responseTypes,
} from '../../reducers/responsesFromApi';

const INIT_STATE = {
  artistsAndTracks: {
    artists: [],
    tracks: [],
    loading: false,
  },
  recommendedTracklist: {
    tracklist: [],
    uris: [],
    loading: false,
  },
  error: null,
};

describe('Responses reducer', () => {
  test('should return default state', () => {
    const newState = responseReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return error state', () => {
    const newState = responseReducer(undefined, {
      type: responseTypes.GET_RESPONSE_FAILURE,
      payload: 'error',
    });
    expect(newState).toEqual({ ...INIT_STATE, error: 'error' });
  });

  test('should return new tracks and artists state', () => {
    const newArtistAndTrack = {
      artists: ['artist'],
      tracks: ['track'],
    };
    const newState = responseReducer(undefined, {
      type: responseTypes.GET_ARTISTS_AND_TRACK_SUCCESS,
      payload: newArtistAndTrack,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      artistsAndTracks: { ...newArtistAndTrack, loading: false },
    });
  });

  test('should return recommended tracks state', () => {
    const newRecommended = {
      tracklist: [{ uri: 'dsa' }],
    };
    const newState = responseReducer(undefined, {
      type: responseTypes.GET_RECOMMENDED_TRACKS_SUCCESS,
      payload: newRecommended,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      recommendedTracklist: {
        tracklist: newRecommended.tracklist,
        uris: ['dsa'],
        loading: false,
      },
    });
  });

  test('should return loading artists and tracks state', () => {
    const newState = responseReducer(undefined, {
      type: responseTypes.GET_ARTISTS_AND_TRACK_REQUEST,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      artistsAndTracks: { ...INIT_STATE.artistsAndTracks, loading: true },
    });
  });

  test('should return loading recommended tracks state', () => {
    const newState = responseReducer(undefined, {
      type: responseTypes.GET_RECOMMENDED_TRACKS_REQUEST,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      recommendedTracklist: {
        ...INIT_STATE.recommendedTracklist,
        loading: true,
      },
    });
  });
});
