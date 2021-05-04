import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FavArtists from '../../containers/FavArtists/FavArtists';

describe('Fav artists container', () => {
  test('should not render if user logout', () => {
    const wrapper = shallow(<FavArtists auth={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should render correctly when user login', () => {
    const wrapper = shallow(<FavArtists auth={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
