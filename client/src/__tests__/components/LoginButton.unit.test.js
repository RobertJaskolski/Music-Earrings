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
    const props = { redirectLink: "https://www.test.com/" };
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
  describe("With props", () => {
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
    it("should render a tag", () => {
      const wrapper = component.find("a");
      expect(wrapper.length).toBe(1);
    });
  });
  describe("Without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "loginButtonComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
