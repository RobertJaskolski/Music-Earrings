import React from "react";
import { Flag } from "../../components/Footer/Flag";
import { shallow } from "enzyme";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<Flag {...props} />);
  return component;
};

describe("Flag Component", () => {
  let component;
  beforeEach(() => {
    component = setup({ lang: "pl" });
  });
  describe("Checking props types", () => {
    it("should not throw a warning", () => {
      const expectProps = {
        lang: "pl",
      };
      const propsError = checkProps(Flag, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("with props", () => {
    it("should render without errors", () => {
      const wrapper = findByDataTest(component, "FlagComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should render flag img", () => {
      const wrapper = findByDataTest(component, "FlagIMG");
      expect(wrapper.length).toBe(1);
    });
  });
  describe("without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "FlagComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
