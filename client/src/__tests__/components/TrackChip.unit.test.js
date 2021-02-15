import React from "react";
import { TrackChip } from "../../components/SearchResults";
import { shallow } from "enzyme";
import { findByDataTest, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const component = shallow(<TrackChip {...props} />);
  return component;
};

describe("TrackChip Component", () => {
  let component;
  beforeEach(() => {
    const props = {
      name: "Test",
      album: {
        images: [],
      },
    };
    component = setup(props);
  });
  describe("checking propTypes", () => {
    it("should not throw an error", () => {
      const expectProps = {
        name: "Test",
        album: {
          images: [],
        },
      };
      const propsError = checkProps(TrackChip, expectProps);
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
