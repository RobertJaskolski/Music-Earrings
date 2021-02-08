import queryString from "query-string";

const GetHash = (refresh) => {
  if (window.location.hash) {
    const tokens = queryString.parse(window.location.hash);
    refresh({
      accessToken: tokens["access_token"],
      refreshToken: tokens["refresh_token"],
    });
    window.history.replaceState(null, null, " ");
  }
};

export default GetHash;
