import React from "react";
import { shallow } from "enzyme";
import { LoginButton } from "../../components/Nav";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<LoginButton {...props} />);
  return component;
};

describe("LoginButton Component", () => {
  let component;
  beforeEach(() => {
    const props = { redirectLink: "exampleURL" };
    component = setup(props);
  });
  describe("Checking prop types", () => {
    it("should not throw a warning", () => {
      const expectProps = {
        redirectLink: "Test string",
      };
      const propsError = checkProps(LoginButton, expectProps);
      expect(propsError).toBeUndefined();
    });
  });

  it("should render without errors", () => {
    const wrapper = findByDataTest(component, "loginButtonComponent");
    expect(wrapper.length).toBe(1);
    expect(component.exists()).toBe(true);
  });
  it("should render spotify logo", () => {
    const wrapper = findByDataTest(component, "spotifyLogoIMG");
    expect(wrapper.length).toBe(1);
  });
  it("should render redirect button", () => {
    const wrapper = findByDataTest(component, "redirectButton");
    expect(wrapper.length).toBe(1);
  });
  it("should render redirect link to authorize", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });
});
