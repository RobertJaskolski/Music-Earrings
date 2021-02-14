import React from "react";
import { Grid } from "@material-ui/core";
import {
  LoginButton,
  Logo,
  SearchInput,
  LogoutButton,
  SkieletonNav,
} from "../../components/Nav";
import { connect } from "react-redux";
import { tokensActions } from "../../reducers/tokens";
import { searchActions } from "../../reducers/search";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";
import { authActions } from "../../reducers/auth";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import API from "../../api/SpotifyAPI";
import SearchResults from "../SearchResults/SearchResults";
const Nav = (props) => {
  const {
    logout,
    clearTokens,
    loading,
    auth,
    userProfile,
    search,
    clearResponse,
    getArtistAndTrack,
  } = props;
  let time;
  const changeNav = useMediaQuery("(min-width:650px)");
  const handleLogout = () => {
    logout();
    clearTokens();
  };
  const handleOnChangeSearch = (event) => {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      search({ searchText: event.target.value });
      if (event.target.value) {
        getArtistAndTrack();
      } else {
        clearResponse();
      }
    }, 700);
  };
  return (
    <Grid item>
      <nav>
        {changeNav ? (
          <Grid container spacing={2}>
            <Grid item lg={1} md={2} sm={2}>
              <Logo widthLogo='75px' heightLogo='75px' />
            </Grid>
            <Grid item lg={8} md={6} sm={5}>
              <SearchInput handleOnChangeSearch={handleOnChangeSearch} />
              <SearchResults />
            </Grid>
            <Grid item lg={3} md={4} sm={5}>
              {loading ? (
                <SkieletonNav />
              ) : auth ? (
                <LogoutButton
                  logout={handleLogout}
                  name={userProfile?.display_name || "Avatar"}
                  imageURL={userProfile?.images[0]?.url || ""}
                />
              ) : (
                <LoginButton
                  redirectLink={`${process.env.REACT_APP_API_URL}/login`}
                />
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={2}>
              <Logo widthLogo='50px' heightLogo='50px' />
            </Grid>
            <Grid item xs={10}>
              {loading ? (
                <SkieletonNav />
              ) : auth ? (
                <LogoutButton
                  logout={handleLogout}
                  name={userProfile?.display_name || "Avatar"}
                  imageURL={userProfile?.images[0]?.url || ""}
                />
              ) : (
                <LoginButton
                  redirectLink={`${process.env.REACT_APP_API_URL}/login`}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <SearchInput handleOnChangeSearch={handleOnChangeSearch} />
              <SearchResults />
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
    search: (item) => {
      dispatch(searchActions.change(item));
    },
    getArtistAndTrack: () => dispatch(API.GetArtistAndTrack()),
    clearResponse: () => {
      dispatch(spotifyApiActions.clear());
    },
  };
};

Nav.propTypes = {
  logout: PropTypes.func,
  clearTokens: PropTypes.func,
  search: PropTypes.func,
  clearResponse: PropTypes.func,
  getArtistAndTrack: PropTypes.func,
  auth: PropTypes.bool,
  userProfile: PropTypes.shape({
    country: PropTypes.string,
    display_name: PropTypes.string,
    email: PropTypes.string,
    explicit_content: PropTypes.shape({
      filter_enabled: PropTypes.bool,
      filter_locked: PropTypes.bool,
    }),
    external_urls: PropTypes.object,
    followers: PropTypes.shape({
      href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      total: PropTypes.number,
    }),
    href: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.array,
    product: PropTypes.string,
    type: PropTypes.string,
    uri: PropTypes.string,
  }),
};

export default connect(null, mapDispatchToProps)(Nav);
