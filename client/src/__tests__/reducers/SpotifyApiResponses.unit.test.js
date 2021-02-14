import spotifyApiReducer, {
  spotifyApiTypes,
} from "../../reducers/spotifyApiResponses";

const INIT_STATE = {
  artists: [],
  tracks: [],
  loading: false,
};

describe("Spotify API Reducer", () => {
  it("should return default state", () => {
    const newState = spotifyApiReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });
  it("return loading: true", () => {
    const newState = spotifyApiReducer(undefined, {
      type: spotifyApiTypes.FETCHING_DATA,
    });
    expect(newState).toEqual({ ...INIT_STATE, loading: true });
  });
  it("return cleared state to default", () => {
    const newState = spotifyApiReducer(undefined, {
      type: spotifyApiTypes.CLEAR_DATA,
    });
    expect(newState).toEqual(INIT_STATE);
  });
  it("return new state", () => {
    const newState = spotifyApiReducer(undefined, {
      type: spotifyApiTypes.SAVE_RESPONSE_DATA,
      payload: {
        artists: [{ name: "test" }, { name: "test2" }],
        tracks: [{ name: "test" }, { name: "test2" }],
      },
    });
    expect(newState).toEqual({
      artists: [{ name: "test" }, { name: "test2" }],
      tracks: [{ name: "test" }, { name: "test2" }],
      loading: false,
    });
  });
});
