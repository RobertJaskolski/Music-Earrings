import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RootContainer from '../../containers/RootContainer';
import { testStore } from '../../utils/testsUtils';

const makeStore = (INIT_STATE = {}) => {
  const store = testStore(INIT_STATE);
  return store;
};

describe('Root container', () => {
  test('should render component', () => {
    const store = makeStore();
    const wrapper = shallow(<RootContainer store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
