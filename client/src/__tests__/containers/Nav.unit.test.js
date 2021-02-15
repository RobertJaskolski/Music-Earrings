import React from "react";
import Nav from "../../containers/Nav/Nav";
import { shallow } from "enzyme";
import { findByDataTest, testStore, checkProps } from "../../utils/testsUtils";

const setup = (props = {}) => {
  const store = testStore();
  const wrapper = shallow(<Nav store={store} {...props} />).dive();
  return wrapper;
};

describe("Nav Container", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  describe("checking prop types", () => {
    it("should not throw an error", () => {
      const expectProps = {
        logout: function () {},
        clearTokens: function () {},
        search: function () {},
        clearResponse: function () {},
        getArtistAndTrack: function () {},
        auth: false,
        userProfile: {
          country: "PL",
          display_name: "test",
          email: "test@test.com",
          explicit_content: {
            filter_enabled: true,
            filter_locked: false,
          },
          external_urls: {},
          followers: {
            href: "link",
            total: 12,
          },
          href: "link",
          id: "213ssasewq",
          images: [],
          product: "premium",
          type: "das",
          uri: "as",
        },
      };
      const propsError = checkProps(Nav, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("with props", () => {
    it("should render without errors", () => {
      const wrapper = findByDataTest(component, "NavContainer");
      expect(wrapper.length).toBe(1);
    });
    it("should render search input", () => {
      const wrapper = findByDataTest(component, "searchInput");
      expect(wrapper.length).toBe(1);
    });
    it("should render search results", () => {
      const wrapper = findByDataTest(component, "searchResults");
      expect(wrapper.length).toBe(1);
    });
    it("should render logo", () => {
      const wrapper = findByDataTest(component, "logo");
      expect(wrapper.length).toBe(1);
    });
    it("should render login button", () => {
      const wrapper = findByDataTest(component, "login");
      expect(wrapper.length).toBe(1);
    });
    it("should render logout button", () => {
      const component = setup({ auth: true });
      const wrapper = findByDataTest(component, "logout");
      expect(wrapper.length).toBe(1);
    });
    it("should render skelton", () => {
      const component = setup({ loading: true });
      const wrapper = findByDataTest(component, "skielton");
      expect(wrapper.length).toBe(1);
    });
  });
});
