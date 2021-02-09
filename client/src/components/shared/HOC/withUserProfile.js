import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

const withUserProfile = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const { data, ...rest } = this.props;
      return <WrappedComponent {...rest} userProfile={data} />;
    }
  }
  return HOC;
};

const mapStateToProps = (state) => ({
  data: state.userInfo["data"],
});

const withUserProfileState = compose(
  connect(mapStateToProps, null),
  withUserProfile
);

withUserProfileState.propTypes = {};

export default withUserProfileState;
