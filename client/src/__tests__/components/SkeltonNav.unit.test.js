import React from "react";
import { shallow } from "enzyme";
import { SkieletonNav } from "../../components/Nav";
import { findByDataTest } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<SkieletonNav {...props} />);
  return component;
};

describe("SkieltonNav Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it("Should render without errors", () => {
    const wrapper = findByDataTest(component, "SkieltonNavComponent");
    expect(wrapper.length).toBe(1);
    expect(component.exists()).toBe(true);
  });
  it("Should render a skeleton", () => {
    const wrapper = findByDataTest(component, "skeleton");
    expect(wrapper.length).toBe(1);
  });
});
