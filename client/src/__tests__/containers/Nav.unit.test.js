import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from '../../containers/Nav/Nav';
import { testStore } from '../../utils/testsUtils';

const store = (INIT_STATE = {}) => {
  const store = testStore(INIT_STATE);
  return store;
};

describe('Nav container', () => {
  test('should render component', () => {
    const wrapper = shallow(<Nav store={store()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
