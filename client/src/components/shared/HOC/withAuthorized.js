import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default withAuthorizedState;
