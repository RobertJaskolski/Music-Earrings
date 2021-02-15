import moxios from "moxios";
import API from "../../api/SpotifyAPI";
import { testStore } from "../../utils/testsUtils";

describe("Get user profile action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should not throw error", () => {
    const expectedState = {
      country: "Poland",
      display_name: "XYZ",
      email: "example@gmail.com",
      explicit_content: {
        filter_enabled: false,
        filter_locked: false,
      },
      external_urls: null,
      followers: {
        href: null,
        total: 0,
      },
      href: "",
      id: "",
      images: [],
      product: "",
      type: "",
      uri: "",
    };

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(API.GetUserProfile()).then(() => {
      const newState = store.getState().userInfo;
      expect(newState).toStrictEqual({
        data: expectedState,
        isLoading: false,
        isError: false,
      });
    });
  });
  it("should throw a error", () => {
    const INIT_STATE = {
      country: "",
      display_name: "",
      email: "",
      explicit_content: {
        filter_enabled: false,
        filter_locked: false,
      },
      external_urls: null,
      followers: {
        href: null,
        total: 0,
      },
      href: "",
      id: "",
      images: [],
      product: "",
      type: "",
      uri: "",
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: [],
      });
    });
    return store.dispatch(API.GetUserProfile()).then(() => {
      const newState = store.getState().userInfo;
      expect(newState).toStrictEqual({
        data: INIT_STATE,
        isLoading: false,
        isError: true,
      });
    });
  });
});
