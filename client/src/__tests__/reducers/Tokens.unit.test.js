import tokensReducer, { tokensTypes } from "../../reducers/tokens";

const INIT_STATE = {
  accessToken: "",
  refreshToken: "",
};

describe("Tokens Reducer", () => {
  it("should return default state", () => {
    const newState = tokensReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });
  it("should return new tokens", () => {
    const tokens = { accessToken: "token", refreshToken: "token" };
    const newState = tokensReducer(undefined, {
      type: tokensTypes.REFRESH_TOKENS,
      payload: tokens,
    });
    expect(newState).toEqual(tokens);
  });
  it("should return empty tokens", () => {
    const newState = tokensReducer(undefined, {
      type: tokensTypes.CLEAR_TOKENS,
    });
    expect(newState).toEqual(INIT_STATE);
  });
});
