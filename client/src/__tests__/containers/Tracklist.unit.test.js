import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tracklist from '../../containers/Tracklist/Tracklist';
import { testStore } from '../../utils/testsUtils';

const makeStore = (INIT_STATE = {}) => {
  const store = testStore(INIT_STATE);
  return store;
};

describe('Tracklist container', () => {
  test('should render component', () => {
    const store = makeStore();
    const wrapper = shallow(<Tracklist store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
