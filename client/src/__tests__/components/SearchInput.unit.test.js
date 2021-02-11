import React from "react";
import { shallow } from "enzyme";
import { SearchInput } from "../../components/Nav";
import { findByDataTest } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<SearchInput {...props} />);
  return component;
};

describe("SearchIntpu Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    const wrapper = findByDataTest(component, "SearchInputComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render a text field", () => {
    const wrapper = findByDataTest(component, "searchTextField");
    expect(wrapper.length).toBe(1);
  });
});
