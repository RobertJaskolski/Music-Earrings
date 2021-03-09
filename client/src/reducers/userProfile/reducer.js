import types from "../../actions/userProfile/types";
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
  tracklistsInfo: [],
  favs: [],
};

const userProfileReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.GET_USER_PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_USER_FAV_ARTISTS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_USER_TRACKLIST_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_USER_PROFILE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_USER_FAV_ARTIST_SUCCESS:
      return { ...state, isLoading: false, favs: action.payload };
    case types.GET_USER_TRACKLIST_SUCCESS:
      return { ...state, isLoading: false, tracklistsInfo: action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;
