import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default withUserProfileState;
