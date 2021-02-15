import React from "react";
import { shallow } from "enzyme";
import { Logo } from "../../components/Nav";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<Logo {...props} />);
  return component;
};

describe("Logo component", () => {
  let component;
  beforeEach(() => {
    const props = { widthLogo: "75px", heightLogo: "44px" };
    component = setup(props);
  });
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectProps = {
        widthLogo: 33,
        heightLogo: "44px",
      };
      const propsError = checkProps(Logo, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("With props", () => {
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
  describe("Without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "logoComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
