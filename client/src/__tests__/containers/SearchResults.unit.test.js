import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchResults from '../../containers/SearchResults/SearchResults';
import { testStore } from '../../utils/testsUtils';

const makeStore = (INIT_STATE = {}) => {
  const store = testStore(INIT_STATE);
  return store;
};

describe('Search results container', () => {
  test('should render component', () => {
    const store = makeStore();
    const wrapper = shallow(<SearchResults store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
