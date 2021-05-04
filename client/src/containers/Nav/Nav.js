// Import outside
import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
// Import utils, API's and etc.
import { tokensActions } from '../../reducers/tokens';
import { authActions } from '../../reducers/auth';
import API from '../../api/SpotifyAPI';
import MyAPI from '../../api/MyAPI';
// Import Components
import {
  LoginButton,
  Logo,
  SearchInput,
  LogoutButton,
  SkieletonNav,
} from '../../components/Nav';

const Nav = ({
  logout,
  clearTokens,
  userProfileLoading,
  auth,
  userProfile,
  setSearchText,
  clearArtistsAndTracks,
  SpotifyGetArtistAndTrack,
  MyAPIGetArtistAndTrack,
}) => {
  let time;
  const { t } = useTranslation();
  const changeNav = useMediaQuery('(min-width:650px)');
  const handleLogout = () => {
    logout();
    clearTokens();
  };
  const handleOnChangeSearch = (event) => {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      setSearchText(event.target.value);
      if (event.target.value && auth) {
        SpotifyGetArtistAndTrack();
      } else if (event.target.value && !auth) {
        MyAPIGetArtistAndTrack();
      } else {
        setTimeout(() => clearArtistsAndTracks(), 300);
      }
    }, 700);
  };
  return (
    <Grid item>
      <nav>
        {changeNav ? (
          <Grid container spacing={2}>
            <Grid item lg={1} md={2} sm={2}>
              <Logo widthLogo='75px' heightLogo='75px' data-test='logo' />
            </Grid>
            <Grid item lg={8} md={6} sm={5}>
              <SearchInput handleOnChangeSearch={handleOnChangeSearch} />
            </Grid>
            <Grid item lg={3} md={4} sm={5}>
              {userProfileLoading ? (
                <SkieletonNav data-test='skielton' />
              ) : auth ? (
                <LogoutButton
                  logout={handleLogout}
                  name={userProfile?.display_name || 'Avatar'}
                  imageURL={
                    userProfile?.images ? userProfile?.images[0]?.url : ''
                  }
                />
              ) : (
                <LoginButton
                  redirectLink={`${process.env.REACT_APP_API_URL}/login`}
                >
                  {t('containers.Nav.connectWithSpotify')}
                </LoginButton>
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={2}>
              <Logo widthLogo='50px' heightLogo='50px' />
            </Grid>
            <Grid item xs={10}>
              {userProfileLoading ? (
                <SkieletonNav />
              ) : auth ? (
                <LogoutButton
                  logout={handleLogout}
                  name={userProfile?.display_name || 'Avatar'}
                  imageURL={
                    userProfile?.images ? userProfile?.images[0]?.url : ''
                  }
                />
              ) : (
                <LoginButton
                  redirectLink={`${process.env.REACT_APP_API_URL}/login`}
                >
                  Connect with Spotify
                </LoginButton>
              )}
            </Grid>
            <Grid item xs={12}>
              <SearchInput handleOnChangeSearch={handleOnChangeSearch} />
            </Grid>
          </Grid>
        )}
      </nav>
    </Grid>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(authActions.logout());
    },
    clearTokens: () => {
      dispatch(tokensActions.clear());
    },
    SpotifyGetArtistAndTrack: () => dispatch(API.GetArtistAndTrack()),
    MyAPIGetArtistAndTrack: () => dispatch(MyAPI.GetArtistAndTrack()),
  };
};

export default connect(null, mapDispatchToProps)(Nav);
