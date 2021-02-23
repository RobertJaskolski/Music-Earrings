import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

const withUserProfile = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const { data, favs, ...rest } = this.props;
      return <WrappedComponent {...rest} favs={favs} userProfile={data} />;
    }
  }
  return HOC;
};

const mapStateToProps = (state) => ({
  data: state.userInfo["data"],
  favs: state.userInfo["favs"],
});

const withUserProfileState = compose(
  connect(mapStateToProps, null),
  withUserProfile
);

withUserProfileState.propTypes = {
  data: PropTypes.shape({
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
  favs: PropTypes.array,
};

export default withUserProfileState;
