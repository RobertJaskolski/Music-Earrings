import React from "react";
import { shallow } from "enzyme";
import { Logo } from "../../components/Nav";
import { findByDataTest } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<Logo {...props} />);
  return component;
};

describe("Logo component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    const wrapper = findByDataTest(component, "logoComponent");
    expect(wrapper.length).toBe(1);
    expect(component.exists()).toBe(true);
  });
  it("Should render a logo", () => {
    const img = findByDataTest(component, "logoIMG");
    expect(img.length).toBe(1);
  });
});
