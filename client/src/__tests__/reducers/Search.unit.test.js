import searchReducer, { searchTypes } from "../../reducers/search";

const INIT_STATE = {
  searchText: "",
};

describe("Search Reducer", () => {
  it("should return default state", () => {
    const newState = searchReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });
  it("should return changed state", () => {
    const changed = { searchText: "test" };
    const newState = searchReducer(undefined, {
      type: searchTypes.CHANGE_SEARCH,
      payload: changed,
    });
    expect(newState).toEqual(changed);
  });
  it("should return cleared state", () => {
    const newState = searchReducer(undefined, {
      type: searchTypes.CLEAR_SEARCH,
    });
    expect(newState).toEqual(INIT_STATE);
  });
});
