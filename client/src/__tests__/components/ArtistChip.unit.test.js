import React from "react";
import { ArtistChip } from "../../components/SearchResults";
import { shallow } from "enzyme";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props) => {
  const component = shallow(<ArtistChip {...props} />);
  return component;
};

describe("ArtistChip Component", () => {
  let component;
  beforeEach(() => {
    const props = { name: "Test", images: [] };
    component = setup(props);
  });
  describe("checking propTypes", () => {
    it("should not throw an error", () => {
      const expectProps = {
        name: "Test",
        images: [],
      };
      const propsError = checkProps(ArtistChip, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("with props", () => {
    it("should render without errors", () => {
      const wrapper = findByDataTest(component, "chipComponent");
      expect(wrapper.length).toBe(1);
      expect(component.exists()).toBe(true);
    });
    it("should render img element", () => {
      const wrapper = findByDataTest(component, "chipIMG");
      expect(wrapper.length).toBe(1);
    });
    it("should render a name", () => {
      const wrapper = findByDataTest(component, "chipText");
      expect(wrapper.length).toBe(1);
    });
  });
  describe("without props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByDataTest(component, "chipComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
