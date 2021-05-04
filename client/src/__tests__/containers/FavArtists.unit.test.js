import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FavArtists from '../../containers/FavArtists/FavArtists';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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
