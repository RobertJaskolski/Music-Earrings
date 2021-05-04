import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Player from '../../containers/Player/Player';
import { testStore } from '../../utils/testsUtils';
import { Provider } from 'react-redux';

const makeStore = (INIT_STATE = {}) => {
  const store = testStore(INIT_STATE);
  return store;
};

describe('Player container', () => {
  test('should render component', () => {
    const store = makeStore();
    const wrapper = shallow(
      <Provider store={store}>
        <Player />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
