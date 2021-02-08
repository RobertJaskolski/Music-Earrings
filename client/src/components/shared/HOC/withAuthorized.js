import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

const withAuthorized = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      const { isAuth, ...rest } = this.props;
      return <WrappedComponent {...rest} auth={isAuth} />;
    }
  }

  return HOC;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth["isAuthorized"],
});

const withAuthorizedState = compose(
  connect(mapStateToProps, null),
  withAuthorized
);

withAuthorized.propTypes = {
  isAuth: PropTypes.bool,
};

export default withAuthorizedState;
