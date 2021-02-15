import moxios from "moxios";
import API from "../../api/SpotifyAPI";
import { testStore } from "../../utils/testsUtils";

describe("Get artist and users action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should not throw error", () => {
    const expectedState = {
      artists: [{ name: "test" }],
      tracks: [{ name: "test" }],
    };

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          artists: {
            items: expectedState.artists,
          },
          tracks: {
            items: expectedState.tracks,
          },
        },
      });
    });

    return store.dispatch(API.GetArtistAndTrack()).then(() => {
      const newState = store.getState().SpotifyResponses;
      expect(newState).toStrictEqual({
        tracks: expectedState.tracks,
        artists: expectedState.artists,
        loading: false,
      });
    });
  });
  it("should throw a error", () => {
    const INIT_STATE = {
      artists: [],
      tracks: [],
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: [],
      });
    });
    return store.dispatch(API.GetArtistAndTrack()).then(() => {
      const newState = store.getState().SpotifyResponses;
      expect(newState).toStrictEqual({
        ...INIT_STATE,
        loading: false,
      });
    });
  });
});
