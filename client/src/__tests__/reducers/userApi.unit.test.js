import userResponseReducer, {
  userResponseTypes,
} from '../../reducers/userResponsesFromAPI';

const INIT_STATE = {
  tracklists: {
    tracklists: [],
    loading: false,
  },
  userProfile: {
    info: {},
    loading: false,
  },
  favoriteArtists: {
    artists: [],
    loading: false,
  },
  error: null,
};

describe('User responses reducer', () => {
  test('should return default state', () => {
    const newState = userResponseReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return error in state', () => {
    const err = 'some error';
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_RESPONSE_FAILURE,
      payload: err,
    });
    expect(newState).toEqual({ ...INIT_STATE, error: err });
  });

  test('should return info about loading for user profile', () => {
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_PROFILE_REQUEST,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      userProfile: {
        ...INIT_STATE.userProfile,
        loading: true,
      },
    });
  });

  test('should return info about loading for user favorite artists', () => {
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_FAVORITE_ARTISTS_REQUEST,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      favoriteArtists: {
        ...INIT_STATE.favoriteArtists,
        loading: true,
      },
    });
  });

  test('should return info about loading for user tracklist', () => {
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_TRACKLISTS_REQUEST,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      tracklists: {
        ...INIT_STATE.tracklists,
        loading: true,
      },
    });
  });

  test('should return state with new user profile', () => {
    const newProfile = { info: 'John' };
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_PROFILE_SUCCESS,
      payload: { ...newProfile },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      userProfile: {
        info: newProfile.info,
        loading: false,
      },
    });
  });

  test('should return state with new user tracklists', () => {
    const newTracklists = { tracklists: ['John', 'John'] };
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_TRACKLISTS_SUCCESS,
      payload: { ...newTracklists },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      tracklists: {
        tracklists: newTracklists.tracklists,
        loading: false,
      },
    });
  });

  test('should return state with new user favorite artists', () => {
    const newArtists = { artists: ['John', 'John'] };
    const newState = userResponseReducer(undefined, {
      type: userResponseTypes.GET_USER_FAVORITE_ARTISTS_SUCCESS,
      payload: { ...newArtists },
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      favoriteArtists: {
        artists: newArtists.artists,
        loading: false,
      },
    });
  });
});
