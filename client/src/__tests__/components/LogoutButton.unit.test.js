import React from "react";
import { shallow } from "enzyme";
import { LogoutButton } from "../../components/Nav";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<LogoutButton {...props} />);
  return component;
};

describe("LogoutButton Component", () => {
  let component;
  beforeEach(() => {
    const props = {
      logout: function () {},
      imageURL: "https://www.test.com/",
      name: "Name",
    };
    component = setup(props);
  });

  describe("Checking prop types", () => {
    it("should not throw a warning", () => {
      const expectProps = {
        logout: function () {},
        imageURL: "https://www.test.com/",
        name: "Name",
      };
      const propsError = checkProps(LogoutButton, expectProps);
      expect(propsError).toBeUndefined();
    });
    it("should throw a warning", () => {
      const expectProps = {
        logout: function () {},
        imageURL: "https://www.test.com/",
        name: 12,
      };
      const propsError = checkProps(LogoutButton, expectProps);
      expect(propsError).toBeDefined();
    });
  });

  describe("with props", () => {
    it("should render without errors", () => {
      const wrapper = findByDataTest(component, "LogoutButtonComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should render a User Avatar", () => {
      const wrapper = findByDataTest(component, "avatar");
      expect(wrapper.length).toBe(1);
    });
    it("should render a Logout button", () => {
      const wrapper = findByDataTest(component, "logoutButton");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "LogoutButtonComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
