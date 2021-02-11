import authReducer, { authTypes } from "../../reducers/auth";

const INIT_STATE = {
  isAuthorized: false,
  checking: true,
};

describe("Auth Reducer", () => {
  it("should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });
  it("should return login state", () => {
    const newState = authReducer(undefined, { type: authTypes.LOGIN_AUTH });
    expect(newState).toEqual({
      isAuthorized: true,
      checking: false,
    });
  });
  it("should return logout state", () => {
    const newState = authReducer(undefined, { type: authTypes.LOGOUT_AUTH });
    expect(newState).toEqual({
      isAuthorized: false,
      checking: false,
    });
  });
  it("should return checking state", () => {
    const newState = authReducer(undefined, { type: authTypes.CHECKING });
    expect(newState).toEqual({
      isAuthorized: false,
      checking: true,
    });
  });
});
