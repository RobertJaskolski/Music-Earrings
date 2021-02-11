import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer/Footer";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("Footer Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it("should render without errors", () => {
    const wrapper = findByDataTest(component, "FooterComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render a copyright", () => {
    const wrapper = findByDataTest(component, "copyright");
    expect(wrapper.length).toBe(1);
  });
  it("should render a links", () => {
    const wrapper = findByDataTest(component, "links");
    expect(wrapper.length).toBe(3);
  });
});
