import userProfileReducer, {
  userProfileTypes,
} from "../../reducers/userProfile";

const INIT_STATE = {
  isLoading: false,
  isError: false,
  data: {
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
  },
};

describe("UserProfile Reducer", () => {
  it("should return default state", () => {
    const newState = userProfileReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });
  it("should return error", () => {
    const newState = userProfileReducer(undefined, {
      type: userProfileTypes.GET_USER_PROFILE_FAILURE,
    });
    expect(newState).toEqual({
      ...INIT_STATE,
      isLoading: false,
      isError: true,
    });
  });
  it("should return data loading info", () => {
    const newState = userProfileReducer(undefined, {
      type: userProfileTypes.GET_USER_PROFILE_REQUEST,
    });
    expect(newState).toEqual({ ...INIT_STATE, isLoading: true });
  });
  it("should return success", () => {
    const newData = {
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
    const newState = userProfileReducer(undefined, {
      type: userProfileTypes.GET_USER_PROFILE_SUCCESS,
      payload: newData,
    });
    expect(newState).toEqual({
      isError: false,
      isLoading: false,
      data: newData,
    });
  });
});
