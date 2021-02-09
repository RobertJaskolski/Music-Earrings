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
import { authActions } from "../../reducers/auth";
import PropTypes from "prop-types";

const Nav = (props) => {
  const { logout, clear, loading, auth, userProfile } = props;
  const handleLogout = () => {
    logout();
    clear();
  };
  return (
    <Grid item>
      <nav>
        <Grid container spacing={1}>
          <Grid item sm={2}>
            <Logo widthLogo='75px' heightLogo='75px' />
          </Grid>
          <Grid item lg={7} md={6} sm={5}>
            <SearchInput />
          </Grid>
          <Grid item lg={3} md={4} sm={5}>
            {loading ? (
              <SkieletonNav />
            ) : auth ? (
              <LogoutButton
                logout={handleLogout}
                name={userProfile?.display_name || "Avatar"}
                imageURL={userProfile?.images[0].url || ""}
              />
            ) : (
              <LoginButton />
            )}
          </Grid>
        </Grid>
      </nav>
    </Grid>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(authActions.logout());
    },
    clear: () => {
      dispatch(tokensActions.clear());
    },
  };
};

Nav.propTypes = {
  logout: PropTypes.func,
  clear: PropTypes.func,
  auth: PropTypes.bool,
};

export default connect(null, mapDispatchToProps)(Nav);
