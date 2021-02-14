import React from "react";
import { shallow } from "enzyme";
import { SearchInput } from "../../components/Nav";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<SearchInput {...props} />);
  return component;
};

describe("SearchIntpu Component", () => {
  let component;
  beforeEach(() => {
    component = setup({ handleOnChangeSearch: function () {} });
  });

  describe("checking propTypes", () => {
    it("should not throw error", () => {
      const expectProps = {
        handleOnChangeSearch: function () {},
      };
      const propsError = checkProps(SearchInput, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("With props", () => {
    it("should render without errors", () => {
      const wrapper = findByDataTest(component, "SearchInputComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should render a text field", () => {
      const wrapper = findByDataTest(component, "searchTextField");
      expect(wrapper.length).toBe(1);
    });
  });
  describe("Without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "SearchInputComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
